import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  Brain, 
  Zap, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Download, 
  Upload,
  Users,
  MapPin,
  Apple,
  TestTube,
  CheckCircle,
  Shield,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  const healthMetrics = [
    { label: 'Heart Rate', value: '72 bpm', icon: Heart, color: 'text-red-500', bgColor: 'bg-red-50' },
    { label: 'Steps', value: '8,432', icon: Activity, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Sleep', value: '7.5h', icon: Brain, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { label: 'Energy', value: '85%', icon: Zap, color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
  ];

  const bodyOverviewData = [
    { organ: 'Heart', score: 92, color: 'bg-green-500' },
    { organ: 'Lungs', score: 88, color: 'bg-blue-500' },
    { organ: 'Liver', score: 85, color: 'bg-yellow-500' },
    { organ: 'Kidneys', score: 90, color: 'bg-purple-500' },
    { organ: 'Brain', score: 94, color: 'bg-indigo-500' },
    { organ: 'Muscles', score: 87, color: 'bg-orange-500' },
  ];

  const conciergeMessages = [
    { time: '9:00 AM', message: 'Good morning! Your sleep quality improved by 15% this week.' },
    { time: '10:30 AM', message: 'Reminder: Schedule your quarterly health check-up.' },
    { time: '2:15 PM', message: 'Your vitamin D levels are optimal. Great job!' },
    { time: '4:45 PM', message: 'Consider a 10-minute walk to reach your daily activity goal.' },
    { time: '6:30 PM', message: 'Your stress levels are elevated. Try some deep breathing exercises.' },
    { time: '8:00 PM', message: 'Perfect time for your evening meditation routine.' },
    { time: '9:15 PM', message: 'Your heart rate variability is in the excellent range today.' },
    { time: '10:00 PM', message: 'Wind down routine: Consider dimming lights for better sleep.' },
  ];

  const familyHistory = [
    { condition: 'Diabetes Type 2', relation: 'Father', age: '65', risk: 'Medium' },
    { condition: 'Hypertension', relation: 'Mother', age: '58', risk: 'High' },
    { condition: 'Heart Disease', relation: 'Grandfather', age: '72', risk: 'Low' },
    { condition: 'Arthritis', relation: 'Grandmother', age: '68', risk: 'Medium' },
  ];

  const suggestedActions = [
    { category: 'Exercise', action: 'Add 20 minutes of cardio', priority: 'High' },
    { category: 'Nutrition', action: 'Increase omega-3 intake', priority: 'Medium' },
    { category: 'Sleep', action: 'Maintain consistent bedtime', priority: 'High' },
  ];

  const dietSuggestions = [
    { meal: 'Breakfast', suggestion: 'Greek yogurt with berries', calories: '250 cal' },
    { meal: 'Lunch', suggestion: 'Quinoa salad with salmon', calories: '420 cal' },
    { meal: 'Dinner', suggestion: 'Grilled chicken with vegetables', calories: '380 cal' },
  ];

  const testRecommendations = [
    { test: 'Lipid Panel', frequency: 'Every 6 months', nextDue: 'Mar 15, 2024' },
    { test: 'Vitamin D', frequency: 'Annually', nextDue: 'Jun 20, 2024' },
    { test: 'HbA1c', frequency: 'Every 3 months', nextDue: 'Feb 10, 2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
              <p className="text-gray-600 mt-1">Your personalized health insights</p>
            </div>
            <div className="flex space-x-2">
              {['7d', '30d', '90d'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedTimeframe(period)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedTimeframe === period
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 1: Health Score Card with Updated Design */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98</div>
                <div className="text-emerald-100 text-sm">Health Score</div>
              </div>
              <div className="h-16 w-px bg-emerald-300"></div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span className="text-lg font-semibold">98% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-200" />
                  <span className="text-sm">Outcome Guarantee with our expert intervention</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-emerald-200" />
                  <span className="text-sm">Money-back guarantee if key biomarkers don't improve within 12 months</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-1">Excellent</div>
              <div className="text-emerald-100 text-sm">Overall Health Status</div>
            </div>
          </div>
        </div>

        {/* Row 2: Body Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Body Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bodyOverviewData.map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}>
                    {item.score}
                  </div>
                </div>
                <h3 className="font-medium text-gray-900">{item.organ}</h3>
                <p className="text-sm text-gray-600">{item.score}% Health</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 4: Upload/Download Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Smart Report</h3>
              <p className="text-gray-600 mb-4">Get your comprehensive health analysis report</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download Report
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Health Report</h3>
              <p className="text-gray-600 mb-4">Upload your latest lab results for analysis</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Upload Report
              </button>
            </div>
          </div>
        </div>

        {/* Row 5: AI Health Assessment */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">AI Health Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Risk Analysis</h3>
              </div>
              <p className="text-gray-700 mb-3">Based on your current health data, your cardiovascular risk is low.</p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Low Risk
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Trend Analysis</h3>
              </div>
              <p className="text-gray-700 mb-3">Your health metrics show consistent improvement over the past month.</p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Improving
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Next Steps</h3>
              </div>
              <p className="text-gray-700 mb-3">Schedule your quarterly check-up and consider adding strength training.</p>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Action Required
              </div>
            </div>
          </div>
        </div>

        {/* Row 6: Global Longevity Concierge & Family History Mapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Global Longevity Concierge</h2>
            </div>
            <div className="h-80 overflow-y-auto space-y-3 pr-2">
              {conciergeMessages.map((message, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-gray-500 font-medium">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{message.message}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-red-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Family History Mapper</h2>
            </div>
            <div className="h-80 space-y-4">
              {familyHistory.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{item.condition}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.risk === 'High' ? 'bg-red-100 text-red-800' :
                      item.risk === 'Medium' ? 'bg-amber-100 text-amber-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.relation} - Age {item.age}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 7: Suggested Actions, Diet, and Tests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-900">Suggested Actions</h2>
            </div>
            <div className="space-y-3">
              {suggestedActions.map((action, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-gray-900">{action.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      action.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {action.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{action.action}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Apple className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-900">Diet Suggestions</h2>
            </div>
            <div className="space-y-3">
              {dietSuggestions.map((diet, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-gray-900">{diet.meal}</span>
                    <span className="text-xs text-gray-500">{diet.calories}</span>
                  </div>
                  <p className="text-sm text-gray-600">{diet.suggestion}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <TestTube className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-900">Test Recommendations</h2>
            </div>
            <div className="space-y-3">
              {testRecommendations.map((test, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <h3 className="font-medium text-gray-900 mb-1">{test.test}</h3>
                  <p className="text-xs text-gray-500 mb-1">{test.frequency}</p>
                  <p className="text-sm text-blue-600 font-medium">Next: {test.nextDue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;