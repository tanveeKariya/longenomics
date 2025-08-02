# linkedin_backend.py (Conceptual Flask Application)
from flask import Flask, redirect, request, jsonify, session
import requests
import os
import secrets # For generating random state strings
from flask_cors import CORS # Import CORS to handle cross-origin requests from React

app = Flask(__name__)
CORS(app) # Enable CORS for all routes (important for frontend-backend communication)

# IMPORTANT: Set a strong secret key for session management in production
# For development, use a fixed, random string.
# NEVER use os.urandom(24) directly for app.secret_key in production,
# and NEVER expose your secret key. Use environment variables for production.
app.secret_key = 'j2k9l8h7g6f5d4s3a2z1x0c9v8b7n6m5' # Fixed secret key

# --- REPLACE THESE WITH YOUR ACTUAL LINKEDIN APP CREDENTIALS FROM LINKEDIN DEVELOPER PORTAL ---
# Using the IDs you provided previously. Double-check these against your LinkedIn app.
LINKEDIN_CLIENT_ID = os.environ.get("LINKEDIN_CLIENT_ID", "77zx3k9xjrbvnr")
LINKEDIN_CLIENT_SECRET = os.environ.get("LINKEDIN_CLIENT_SECRET", "WPL_AP1.KucxWWsphPCYWVrE.ZB2D5w==")

# This must match one of the Authorized Redirect URLs configured in LinkedIn Developer Portal
LINKEDIN_REDIRECT_URI = "http://localhost:5000/linkedin_callback" 

# URL where your React app is running (for redirecting *back* to the frontend after backend auth)
# This will redirect to your LinkedInPoster component after authentication.
FRONTEND_APP_URL = "http://localhost:3000/share" 

# LinkedIn OAuth Endpoints
AUTH_URL = "https://www.linkedin.com/oauth/v2/authorization"
TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken"
USER_INFO_URL = "https://api.linkedin.com/v2/me" # To get authenticated user's ID
SHARE_API_URL = "https://api.linkedin.com/v2/ugcPosts" # Updated LinkedIn Share API endpoint

@app.route('/')
def index():
    return "LinkedIn Integration Backend. Your backend is running."

# This is the endpoint your React frontend will hit to START the LinkedIn OAuth flow.
@app.route('/share') # This matches the backendOAuthStartUrl in your React component
def linkedin_auth():
    # Generate a random state to prevent CSRF attacks
    state = secrets.token_urlsafe(16)
    session['oauth_state'] = state # Store state in session

    params = {
        "response_type": "code",
        "client_id": LINKEDIN_CLIENT_ID,
        "redirect_uri": LINKEDIN_REDIRECT_URI,
        "state": state,
        "scope": "w_member_social,r_liteprofile" # Permissions needed
    }
    # Redirect user to LinkedIn's authorization page
    return redirect(f"{AUTH_URL}?{requests.compat.urlencode(params)}")

# This is the endpoint LinkedIn will redirect TO after the user authenticates.
# linkedin_backend.py

# ... (rest of your imports, app setup, secret_key, client_id/secret, redirect_uri, etc.) ...

@app.route('/linkedin_callback')
def linkedin_callback():
    code = request.args.get('code')
    state = request.args.get('state')
    error = request.args.get('error')

    # Validate state (this part remains the same)
    if state != session.pop('oauth_state', None):
        # Instead of jsonify, we postMessage an error
        error_message = "State mismatch. Possible CSRF attack."
        return f"""
            <!DOCTYPE html>
            <html>
            <body>
                <script>
                    if (window.opener) {{
                        window.opener.postMessage({{ type: 'linkedinAuthError', error: '{error_message}' }}, '{FRONTEND_APP_URL}');
                    }}
                    window.close();
                </script>
                <p>Authentication failed. Error: {error_message}</p>
            </body>
            </html>
        """, 400

    if error:
        # Instead of jsonify, we postMessage an error
        error_message = f"LinkedIn auth failed: {error}"
        return f"""
            <!DOCTYPE html>
            <html>
            <body>
                <script>
                    if (window.opener) {{
                        window.opener.postMessage({{ type: 'linkedinAuthError', error: '{error_message}' }}, '{FRONTEND_APP_URL}');
                    }}
                    window.close();
                </script>
                <p>Authentication failed. Error: {error_message}</p>
            </body>
            </html>
        """, 400

    if not code:
        error_message = "Authorization code not received."
        return f"""
            <!DOCTYPE html>
            <html>
            <body>
                <script>
                    if (window.opener) {{
                        window.opener.postMessage({{ type: 'linkedinAuthError', error: '{error_message}' }}, '{FRONTEND_APP_URL}');
                    }}
                    window.close();
                </script>
                <p>Authentication failed. Error: {error_message}</p>
            </body>
            </html>
        """, 400

    # Exchange authorization code for access token (this part remains the same)
    token_data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": LINKEDIN_REDIRECT_URI,
        "client_id": LINKEDIN_CLIENT_ID,
        "client_secret": LINKEDIN_CLIENT_SECRET,
    }
    token_response = requests.post(TOKEN_URL, data=token_data)
    token_json = token_response.json()

    if "access_token" not in token_json:
        error_message = "Failed to get access token from LinkedIn."
        details = token_json.get('error_description', token_json)
        print(f"Error getting access token: {details}") # Log details for debugging
        return f"""
            <!DOCTYPE html>
            <html>
            <body>
                <script>
                    if (window.opener) {{
                        window.opener.postMessage({{ type: 'linkedinAuthError', error: '{error_message}', details: '{details}' }}, '{FRONTEND_APP_URL}');
                    }}
                    window.close();
                </script>
                <p>Authentication failed: {error_message}</p>
            </body>
            </html>
        """, 500

    access_token = token_json["access_token"]
    session['linkedin_access_token'] = access_token 

    linkedin_user_id = None
    try:
        user_info_headers = {"Authorization": f"Bearer {access_token}"}
        user_info_response = requests.get(f"{USER_INFO_URL}?projection=(id)", headers=user_info_headers)
        user_info_response.raise_for_status() # Raise error for bad status codes
        user_info = user_info_response.json()
        linkedin_user_id = user_info.get('id')
        session['linkedin_user_id'] = linkedin_user_id
    except requests.exceptions.HTTPError as e:
        print(f"HTTP error fetching user info: {e.response.text}")
        # Even if user info fails, if token is valid, we might proceed or signal partial success
    except Exception as e:
        print(f"Unexpected error fetching user info: {str(e)}")

    # --- SUCCESS CASE: Signal back to the opener window and close ---
    success_message = "Authentication complete."
    return f"""
        <!DOCTYPE html>
        <html>
        <body>
            <script>
                if (window.opener) {{
                    window.opener.postMessage({{ type: 'linkedinAuthSuccess', userId: '{linkedin_user_id or ''}', message: '{success_message}' }}, '{FRONTEND_APP_URL}');
                }}
                window.close();
            </script>
            <p>{success_message}. You can close this window.</p>
        </body>
        </html>
    """
@app.route('/api/linkedin/post', methods=['POST'])
def post_to_linkedin():
    # Retrieve access token and user ID from your secure storage 
    # (e.g., database lookup by user ID).
    # For this simple example, we'll use the session.
    access_token = session.get('linkedin_access_token')
    linkedin_user_id = session.get('linkedin_user_id')

    if not access_token or not linkedin_user_id:
        return jsonify({"error": "User not authenticated with LinkedIn. Please authenticate first."}), 401

    message_content = request.json.get('message')
    if not message_content:
        return jsonify({"error": "Message content is required."}), 400

    # Construct the LinkedIn Share API payload for UGC Posts (new API)
    share_payload = {
        "author": f"urn:li:person:{linkedin_user_id}", # Correct format: urn:li:person:<id>
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": message_content
                },
                "shareMediaCategory": "NONE"
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" # Or CONNECTIONS, etc.
        }
    }

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0" # Required by LinkedIn API
    }

    try:
        response = requests.post(SHARE_API_URL, json=share_payload, headers=headers)
        response.raise_for_status() # Raise an HTTPError for bad responses (4xx or 5xx)
        
        post_urn = response.json().get('id') 
        return jsonify({"message": "Successfully posted to LinkedIn!", "linkedinPostId": post_urn}), 200
    except requests.exceptions.HTTPError as e:
        print(f"LinkedIn API error: {e.response.text}")
        return jsonify({"error": f"LinkedIn API error: {e.response.text}", "status_code": e.response.status_code}), e.response.status_code
    except Exception as e:
        print(f"An unexpected error occurred: {str(e)}")
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)