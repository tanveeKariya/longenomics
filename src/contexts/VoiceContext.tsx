import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

interface VoiceContextType {
  isRecording: boolean;
  isListening: boolean;
  transcript: string;
  startRecording: () => void;
  stopRecording: () => void;
  speakText: (text: string) => void;
  clearTranscript: () => void;
  error: string | null;
  stopSpeaking: () => void;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
};

export const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const finalTranscriptRef = useRef<string>('');
  const isRecordingRef = useRef<boolean>(false);
  const lastWordRef = useRef<string>('');

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        if (!isRecordingRef.current) return;

        let combinedTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptSegment = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            combinedTranscript = transcriptSegment;
          }
        }

        // Check if the last word is similar to current one
        if (combinedTranscript.trim() !== '') {
          const words = combinedTranscript.trim().split(' ');
          const currentLastWord = words[words.length - 1].toLowerCase();
          
          // If the last word is similar to the previous one, don't record
          if (lastWordRef.current && currentLastWord === lastWordRef.current) {
            return;
          }
          
          lastWordRef.current = currentLastWord;
          setTranscript(combinedTranscript.trim());
        }
      };

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        if (isRecordingRef.current) {
          // Restart recognition if still recording
          try {
            recognitionRef.current?.start();
          } catch (error) {
            console.error('Error restarting recognition:', error);
            setIsRecording(false);
            isRecordingRef.current = false;
          }
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'no-speech' || event.error === 'audio-capture') {
          // Don't show error for these common issues, just restart
          return;
        }
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
        setIsRecording(false);
        isRecordingRef.current = false;
      };
    }

    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const startRecording = useCallback(() => {
    if (recognitionRef.current && !isRecording) {
      setIsRecording(true);
      isRecordingRef.current = true;
      setError(null);
      finalTranscriptRef.current = '';
      lastWordRef.current = '';
      setTranscript('');
      
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        setIsRecording(false);
        isRecordingRef.current = false;
        setError('Failed to start voice recognition');
      }
    }
  }, [isRecording]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current && isRecording) {
      setIsRecording(false);
      isRecordingRef.current = false;
      lastWordRef.current = '';
      recognitionRef.current.stop();
    }
  }, [isRecording]);

  const speakText = useCallback((text: string) => {
    if (synthRef.current) {
      // Stop any ongoing speech
      synthRef.current.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      synthRef.current.speak(utterance);
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
  }, []);
  const clearTranscript = useCallback(() => {
    setTranscript('');
    finalTranscriptRef.current = '';
    lastWordRef.current = '';
  }, []);

  const value: VoiceContextType = {
    isRecording,
    isListening,
    transcript,
    startRecording,
    stopRecording,
    speakText,
    stopSpeaking,
    clearTranscript,
    error
  };

  return (
    <VoiceContext.Provider value={value}>
      {children}
    </VoiceContext.Provider>
  );
};