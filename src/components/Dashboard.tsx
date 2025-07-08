// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   User, 
//   Heart, 
//   Brain, 
//   Activity, 
//   Zap, 
//   Mic, 
//   MicOff,
//   Play,
//   Pause,
//   BarChart3,
//   TrendingUp,
//   Shield,
//   Target,
//   Search,
//   Bell,
//   Settings,
//   Home,
//   MessageCircle,
//   Stethoscope,
//   TestTube,
//   Pill,
//   Moon,
//   Apple,
//   Dumbbell,
//   ChevronDown,
//   ChevronUp,
//   Watch,
//   Smartphone,
//   Eye
// } from 'lucide-react';

// // Circular Progress Component
// const CircularProgress: React.FC<{ value: number; size?: number; strokeWidth?: number }> = ({ 
//   value, 
//   size = 120, 
//   strokeWidth = 8 
// }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (value / 100) * circumference;

//   return (
//     <div className="relative">
//       <svg width={size} height={size} className="transform -rotate-90">
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           stroke="rgba(255, 255, 255, 0.1)"
//           strokeWidth={strokeWidth}
//         />
//         <motion.circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="none"
//           stroke="url(#gradient)"
//           strokeWidth={strokeWidth}
//           strokeLinecap="round"
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           initial={{ strokeDashoffset: circumference }}
//           animate={{ strokeDashoffset: offset }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         />
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#3B82F6" />
//             <stop offset="100%" stopColor="#14B8A6" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-3xl font-bold text-blue-400">{value}</span>
//       </div>
//     </div>
//   );
// };

// // Line Chart Component
// const LineChart: React.FC = () => {
//   const data = [85, 82, 88, 90, 87, 85, 89];
//   const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const max = Math.max(...data);
//   const min = Math.min(...data);
//   const range = max - min || 1;

//   const points = data.map((value, index) => {
//     const x = (index / (data.length - 1)) * 280;
//     const y = 80 - ((value - min) / range) * 60;
//     return `${x},${y}`;
//   }).join(' ');

//   const areaPoints = `0,80 ${points} 280,80`;

//   return (
//     <div className="w-full h-32">
//       <svg width="100%" height="100%" viewBox="0 0 280 100" className="overflow-visible">
//         <defs>
//           <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#3B82F6" />
//             <stop offset="100%" stopColor="#14B8A6" />
//           </linearGradient>
//           <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//             <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
//           </linearGradient>
//         </defs>
        
//         {[0, 1, 2, 3, 4].map((i) => (
//           <line
//             key={i}
//             x1="0"
//             y1={20 + i * 15}
//             x2="280"
//             y2={20 + i * 15}
//             stroke="rgba(255, 255, 255, 0.1)"
//             strokeWidth="1"
//           />
//         ))}
        
//         <motion.polygon
//           points={areaPoints}
//           fill="url(#areaGradient)"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
        
//         <motion.polyline
//           points={points}
//           fill="none"
//           stroke="url(#lineGradient)"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />
        
//         {data.map((value, index) => (
//           <motion.circle
//             key={index}
//             cx={(index / (data.length - 1)) * 280}
//             cy={80 - ((value - min) / range) * 60}
//             r="4"
//             fill="#3B82F6"
//             stroke="#1E293B"
//             strokeWidth="2"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
//             className="hover:r-6 transition-all cursor-pointer"
//           />
//         ))}
        
//         {labels.map((label, index) => (
//           <text
//             key={index}
//             x={(index / (labels.length - 1)) * 280}
//             y="95"
//             textAnchor="middle"
//             className="text-xs fill-gray-400"
//           >
//             {label}
//           </text>
//         ))}
//       </svg>
//     </div>
//   );
// };

// // Donut Chart Component
// const DonutChart: React.FC = () => {
//   const data = [
//     { label: 'HDL', value: 40, color: '#10B981' },
//     { label: 'LDL', value: 35, color: '#F59E0B' },
//     { label: 'Triglycerides', value: 25, color: '#EF4444' },
//   ];

//   const total = data.reduce((sum, item) => sum + item.value, 0);
//   const radius = 45;
//   const strokeWidth = 12;
//   const normalizedRadius = radius - strokeWidth * 0.5;
//   const circumference = normalizedRadius * 2 * Math.PI;

//   let cumulativePercent = 0;

//   return (
//     <div className="flex items-center justify-center">
//       <div className="relative">
//         <svg width="120" height="120" className="transform -rotate-90">
//           <circle
//             cx="60"
//             cy="60"
//             r={normalizedRadius}
//             fill="none"
//             stroke="rgba(255, 255, 255, 0.1)"
//             strokeWidth={strokeWidth}
//           />
          
//           {data.map((item, index) => {
//             const percent = item.value / total;
//             const strokeDasharray = `${percent * circumference} ${circumference}`;
//             const strokeDashoffset = -cumulativePercent * circumference;
//             cumulativePercent += percent;

//             return (
//               <motion.circle
//                 key={index}
//                 cx="60"
//                 cy="60"
//                 r={normalizedRadius}
//                 fill="none"
//                 stroke={item.color}
//                 strokeWidth={strokeWidth}
//                 strokeDasharray={strokeDasharray}
//                 strokeDashoffset={strokeDashoffset}
//                 strokeLinecap="round"
//                 initial={{ strokeDasharray: `0 ${circumference}` }}
//                 animate={{ strokeDasharray }}
//                 transition={{ duration: 1.5, delay: index * 0.3, ease: "easeInOut" }}
//               />
//             );
//           })}
//         </svg>
        
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-blue-400">{total}%</div>
//             <div className="text-xs text-gray-500">Total</div>
//           </div>
//         </div>
//       </div>
      
//       <div className="ml-6 space-y-2">
//         {data.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.2 + 0.5 }}
//             className="flex items-center text-sm"
//           >
//             <div 
//               className="w-3 h-3 rounded-full mr-2"
//               style={{ backgroundColor: item.color }}
//             ></div>
//             <span className="text-gray-300">{item.label}: {item.value}%</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Bar Chart Component
// const BarChart: React.FC = () => {
//   const data = [
//     { label: 'Mon', value: 65, color: '#3B82F6' },
//     { label: 'Tue', value: 59, color: '#8B5CF6' },
//     { label: 'Wed', value: 80, color: '#06B6D4' },
//     { label: 'Thu', value: 81, color: '#10B981' },
//     { label: 'Fri', value: 56, color: '#F59E0B' },
//     { label: 'Sat', value: 55, color: '#EF4444' },
//     { label: 'Sun', value: 40, color: '#EC4899' },
//   ];

//   const maxValue = Math.max(...data.map(d => d.value));

//   return (
//     <div className="w-full h-32">
//       <svg width="100%" height="100%" viewBox="0 0 280 100">
//         <defs>
//           {data.map((item, index) => (
//             <linearGradient key={index} id={`barGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor={item.color} />
//               <stop offset="100%" stopColor={item.color} stopOpacity="0.6" />
//             </linearGradient>
//           ))}
//         </defs>
        
//         {[0, 1, 2, 3, 4].map((i) => (
//           <line
//             key={i}
//             x1="0"
//             y1={20 + i * 15}
//             x2="280"
//             y2={20 + i * 15}
//             stroke="rgba(255, 255, 255, 0.1)"
//             strokeWidth="1"
//           />
//         ))}
        
//         {data.map((item, index) => {
//           const barHeight = (item.value / maxValue) * 60;
//           const barWidth = 30;
//           const barX = index * 40 + 5;
//           const barY = 80 - barHeight;
          
//           return (
//             <g key={index}>
//               <motion.rect
//                 x={barX}
//                 y={barY}
//                 width={barWidth}
//                 height={barHeight}
//                 fill={`url(#barGradient${index})`}
//                 rx="4"
//                 initial={{ height: 0, y: 80 }}
//                 animate={{ height: barHeight, y: barY }}
//                 transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
//                 className="hover:opacity-80 transition-opacity cursor-pointer"
//               />
              
//               <motion.text
//                 x={barX + barWidth / 2}
//                 y={barY - 5}
//                 textAnchor="middle"
//                 className="text-xs fill-gray-300 font-medium"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: index * 0.1 + 0.3 }}
//               >
//                 {item.value}
//               </motion.text>
              
//               <text
//                 x={barX + barWidth / 2}
//                 y="95"
//                 textAnchor="middle"
//                 className="text-xs fill-gray-400"
//               >
//                 {item.label}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// };

// // Human Body Component with Surrounding Organs
// const HumanBody: React.FC<{ biomarkers: any[] }> = ({ biomarkers }) => {
//   const [hoveredOrgan, setHoveredOrgan] = useState<string | null>(null);

//   const surroundingOrgans = [
//     { name: 'Brain', icon: Brain, x: 50, y: 8, color: '#8B5CF6', marker: 'Glucose', value: '85 mg/dL', status: 'optimal' },
//     { name: 'Eyes', icon: Eye, x: 85, y: 20, color: '#10B981', marker: 'Vision', value: '20/20', status: 'optimal' },
//     { name: 'Heart', icon: Heart, x: 15, y: 35, color: '#EF4444', marker: 'Heart Rate', value: '72 bpm', status: 'optimal' },
//     { name: 'Lungs', icon: Settings, x: 85, y: 40, color: '#06B6D4', marker: 'SpO2', value: '98%', status: 'optimal' },
//     { name: 'Liver', icon: Activity, x: 15, y: 55, color: '#F59E0B', marker: 'ALT', value: '25 U/L', status: 'optimal' },
//     { name: 'Kidneys', icon: Zap, x: 85, y: 65, color: '#3B82F6', marker: 'Creatinine', value: '0.9 mg/dL', status: 'optimal' },
//   ];

//   return (
//     <div className="relative w-full h-96 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50">
//       {/* Human Body Image */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="relative"
//           >
//             <img
//               src="data:image/png;base64,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"
//               alt="Human Body Anatomy"
//               className="w-64 h-80 object-cover rounded-lg opacity-70 filter grayscale contrast-125"
//               style={{
//                 maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)',
//                 WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)'
//               }}
//             />
            
//             {/* Overlay gradient for better integration */}
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-purple-900/20 rounded-lg"></div>
            
//             {/* Subtle glow effect */}
//             <div className="absolute inset-0 rounded-lg shadow-2xl shadow-blue-500/20"></div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Surrounding Organ Icons */}
//       {surroundingOrgans.map((organ, index) => (
//         <motion.div
//           key={`organ-${index}`}
//           className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
//           style={{ left: `${organ.x}%`, top: `${organ.y}%` }}
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: index * 0.2 + 1.2, duration: 0.5 }}
//           onMouseEnter={() => setHoveredOrgan(organ.name)}
//           onMouseLeave={() => setHoveredOrgan(null)}
//         >
//           <motion.div
//             className={`relative p-4 rounded-full backdrop-blur-sm border-2 transition-all duration-300 ${
//               hoveredOrgan === organ.name 
//                 ? 'bg-gray-800/80 border-white/40 shadow-2xl' 
//                 : 'bg-gray-800/60 border-gray-600/60 hover:bg-gray-800/70'
//             }`}
//             animate={{
//               scale: hoveredOrgan === organ.name ? 1.2 : 1,
//               boxShadow: hoveredOrgan === organ.name 
//                 ? `0 0 30px ${organ.color}60`
//                 : '0 0 0px transparent'
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             <organ.icon 
//               className="w-6 h-6 transition-colors duration-300" 
//               style={{ color: organ.color }}
//             />
            
//             {/* Pulsing ring effect */}
//             {hoveredOrgan === organ.name && (
//               <motion.div
//                 className="absolute inset-0 rounded-full border-2"
//                 style={{ borderColor: organ.color }}
//                 animate={{
//                   scale: [1, 1.5, 1],
//                   opacity: [0.8, 0, 0.8],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             )}
//           </motion.div>

//           {/* Organ Tooltip */}
//           <AnimatePresence>
//             {hoveredOrgan === organ.name && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10, scale: 0.8 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 10, scale: 0.8 }}
//                 className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 p-4 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl min-w-40 z-20"
//               >
//                 <div className="text-center">
//                   <div className="font-bold text-white text-sm mb-1">{organ.name}</div>
//                   <div className="text-xs text-gray-400 mb-2">{organ.marker}</div>
//                   <div className="text-lg font-bold mb-2" style={{ color: organ.color }}>
//                     {organ.value}
//                   </div>
//                   <div className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
//                     {organ.status}
//                   </div>
//                 </div>
//                 {/* Arrow */}
//                 <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       ))}

//       {/* Animated Energy Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={`particle-${i}`}
//             className="absolute w-1 h-1 bg-blue-400 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0, 1.5, 0],
//               y: [0, -30, 0],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 4,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Subtle pulse effect around the container */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl border border-blue-400/20"
//         animate={{
//           scale: [1, 1.01, 1],
//           opacity: [0.3, 0.6, 0.3],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   );
// };

// // Wearable Data Component
// const WearableData: React.FC = () => {
//   const wearableDevices = [
//     { name: 'Apple Watch', icon: Watch, color: 'text-blue-400' },
//     { name: 'Fitbit', icon: Activity, color: 'text-green-400' },
//     { name: 'OURA Ring', icon: Watch, color: 'text-purple-400' },
//   ];

//   return (
//     <div className="space-y-4">
//       <h3 className="text-lg font-bold">Wearable Data</h3>
//       <div className="space-y-3">
//         {wearableDevices.map((device, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg"
//           >
//             <div className="flex items-center">
//               <device.icon className={`w-4 h-4 mr-2 ${device.color}`} />
//               <span className="text-sm font-medium">{device.name}</span>
//             </div>
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//           </motion.div>
//         ))}
//       </div>
//       <div className="text-xs text-gray-500 mt-2">
//         Last sync: 2 minutes ago
//       </div>
//     </div>
//   );
// };

// // Voice Recorder Component
// const VoiceRecorder: React.FC<{
//   isRecording: boolean;
//   onStartRecording: () => void;
//   onStopRecording: () => void;
//   currentQuestion: string;
//   showResponse: boolean;
//   typedResponse: string;
// }> = ({
//   isRecording,
//   onStartRecording,
//   onStopRecording,
//   currentQuestion,
//   showResponse,
//   typedResponse,
// }) => {
//   return (
//     <div className="space-y-6">
//       <div className="flex justify-center">
//         <motion.button
//           onClick={isRecording ? onStopRecording : onStartRecording}
//           className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
//             isRecording 
//               ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30' 
//               : 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30'
//           }`}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {isRecording ? (
//             <MicOff className="w-8 h-8 text-white" />
//           ) : (
//             <Mic className="w-8 h-8 text-white" />
//           )}
          
//           {isRecording && (
//             <motion.div
//               className="absolute inset-0 rounded-full border-2 border-red-400"
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [1, 0, 1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           )}
//         </motion.button>
//       </div>

//       <AnimatePresence>
//         {currentQuestion && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
//           >
//             <h4 className="text-lg font-semibold mb-2 text-blue-400">AI Question</h4>
//             <p className="text-gray-300">{currentQuestion}</p>
            
//             {isRecording && (
//               <div className="flex justify-center mt-4 space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="w-1 bg-blue-400 rounded-full"
//                     animate={{
//                       height: [4, 20, 4],
//                     }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                       delay: i * 0.1,
//                       ease: "easeInOut",
//                     }}
//                   />
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {showResponse && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/30"
//           >
//             <h4 className="text-lg font-semibold mb-2 text-green-400">AI Recommendation</h4>
//             <p className="text-gray-300">{typedResponse}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {!isRecording && !currentQuestion && !showResponse && (
//         <div className="text-center text-gray-500">
//           <p>Click the microphone to start your health assessment</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main Dashboard Component
// const Dashboard: React.FC = () => {
//   const [activeSection, setActiveSection] = useState('overview');
//   const [isRecording, setIsRecording] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState('');
//   const [showResponse, setShowResponse] = useState(false);
//   const [typedResponse, setTypedResponse] = useState('');
//   const [collapsedSections, setCollapsedSections] = useState<{[key: string]: boolean}>({
//     actions: false,
//     diet: false,
//     tests: false
//   });

//   const healthQuestions = [
//     "How has your energy level been over the past week?",
//     "Have you noticed any changes in your sleep quality recently?",
//     "What activities make you feel most energized and alive?"
//   ];

//   const sampleResponse = "Based on your response, I recommend focusing on consistent sleep patterns and incorporating 15 minutes of morning sunlight exposure to optimize your circadian rhythm.";

//   const startRecording = () => {
//     setIsRecording(true);
//     setCurrentQuestion(healthQuestions[Math.floor(Math.random() * healthQuestions.length)]);
//     setShowResponse(false);
//     setTypedResponse('');
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     setCurrentQuestion('');
//     setTimeout(() => {
//       setShowResponse(true);
//       typeResponse();
//     }, 1000);
//   };

//   const typeResponse = () => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < sampleResponse.length) {
//         setTypedResponse(sampleResponse.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50);
//   };

//   const toggleSection = (section: string) => {
//     setCollapsedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const sidebarItems = [
//     { id: 'overview', label: 'Overview', icon: Home },
//     { id: 'biomarkers', label: 'Biomarkers', icon: TestTube },
//     { id: 'insights', label: 'AI Insights', icon: Brain },
//     { id: 'interventions', label: 'Interventions', icon: Target },
//     { id: 'risks', label: 'Risk Analysis', icon: Shield },
//     { id: 'chat', label: 'AI Chat', icon: MessageCircle },
//     { id: 'search', label: 'Search', icon: Search },
//   ];

//   const biomarkerData = [
//     { name: 'Glucose', value: 85, status: 'optimal', color: 'text-green-400' },
//     { name: 'Cholesterol', value: 180, status: 'moderate', color: 'text-yellow-400' },
//     { name: 'Blood Pressure', value: 120, status: 'optimal', color: 'text-green-400' },
//     { name: 'Vitamin D', value: 32, status: 'low', color: 'text-red-400' },
//     { name: 'HbA1c', value: 5.2, status: 'optimal', color: 'text-green-400' },
//     { name: 'CRP', value: 1.8, status: 'moderate', color: 'text-yellow-400' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
//       <div className="fixed inset-0 opacity-5">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>
//       </div>
      
//       <div className="relative z-10 flex h-screen">
//         {/* Sidebar */}
//         <motion.div 
//           initial={{ x: -300 }}
//           animate={{ x: 0 }}
//           className="w-64 bg-gray-900/80 backdrop-blur-xl border-r border-gray-800 p-6"
//         >
//           <div className="flex items-center mb-8">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
//             <div>
//               <h2 className="text-xl font-bold">LongevityAI</h2>
//               <p className="text-xs text-gray-500">Dashboard</p>
//             </div>
//           </div>

//           <nav className="space-y-2">
//             {sidebarItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveSection(item.id)}
//                 className={`w-full flex items-center p-3 rounded-lg transition-all ${
//                   activeSection === item.id
//                     ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
//                     : 'hover:bg-gray-800/50 text-gray-400'
//                 }`}
//               >
//                 <item.icon className="w-5 h-5 mr-3" />
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
//             <h3 className="font-semibold mb-2">Patient Profile</h3>
//             <div className="flex items-center mb-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
//               <div>
//                 <p className="font-medium">John Doe</p>
//                 <p className="text-xs text-gray-500">Age: 42</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Header */}
//           <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 p-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h1 className="text-2xl font-bold">Health Dashboard</h1>
//                 <p className="text-gray-500">Track your longevity journey</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
//                   <Bell className="w-5 h-5" />
//                 </button>
//                 <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
//                   <Settings className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </header>

//           {/* Dashboard Content */}
//           <div className="flex-1 p-6 overflow-y-auto">
//             {/* Top Stats Row */}
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
//               <motion.div 
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800"
//               >
//                 <div className="text-center">
//                   <CircularProgress value={86} />
//                   <h3 className="text-xl font-bold mt-4">Longevity Score</h3>
//                   <p className="text-gray-500">Excellent</p>
//                 </div>
//               </motion.div>

//               <motion.div 
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center"
//               >
//                 <div className="text-4xl font-bold text-blue-400">36</div>
//                 <h3 className="text-xl font-bold mt-2">Biological Age</h3>
//                 <p className="text-gray-500">6 years younger</p>
//               </motion.div>

//               <motion.div 
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center"
//               >
//                 <div className="text-4xl font-bold text-gray-400">42</div>
//                 <h3 className="text-xl font-bold mt-2">Chronological Age</h3>
//                 <p className="text-gray-500">Actual age</p>
//               </motion.div>

//               <motion.div 
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800"
//               >
//                 <WearableData />
//               </motion.div>
//             </div>

//             {/* Body Overview Section */}
//             <motion.div 
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="mb-8"
//             >
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4">Body Overview</h3>
//                 <HumanBody biomarkers={biomarkerData} />
//               </div>
//             </motion.div>

//             {/* Charts Section */}
//             <motion.div 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
//             >
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4">Glucose Trend</h3>
//                 <LineChart />
//               </div>
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4">Cholesterol Distribution</h3>
//                 <DonutChart />
//               </div>
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4">Weekly Activity</h3>
//                 <BarChart />
//               </div>
//             </motion.div>

//             {/* Biomarker Grid */}
//             <motion.div 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="mb-8"
//             >
//               <h3 className="text-xl font-bold mb-4">Biomarkers</h3>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                 {biomarkerData.map((marker, index) => (
//                   <div key={index} className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-800">
//                     <div className="text-sm text-gray-500">{marker.name}</div>
//                     <div className={`text-2xl font-bold ${marker.color}`}>{marker.value}</div>
//                     <div className="text-xs capitalize text-gray-500">{marker.status}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Voice Recorder Section */}
//             <motion.div 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 mb-8"
//             >
//               <h3 className="text-xl font-bold mb-4">AI Health Assessment</h3>
//               <VoiceRecorder 
//                 isRecording={isRecording}
//                 onStartRecording={startRecording}
//                 onStopRecording={stopRecording}
//                 currentQuestion={currentQuestion}
//                 showResponse={showResponse}
//                 typedResponse={typedResponse}
//               />
//             </motion.div>

//             {/* AI Insights - Collapsible */}
//             <motion.div 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.9 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-6"
//             >
//               {/* Suggested Actions */}
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800">
//                 <button
//                   onClick={() => toggleSection('actions')}
//                   className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-t-2xl"
//                 >
//                   <h3 className="text-lg font-bold flex items-center">
//                     <Dumbbell className="w-5 h-5 mr-2 text-orange-400" />
//                     Suggested Actions
//                   </h3>
//                   {collapsedSections.actions ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
//                 </button>
//                 <AnimatePresence>
//                   {!collapsedSections.actions && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-6 pb-6"
//                     >
//                       <ul className="space-y-2 text-sm">
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
//                           Increase physical activity
//                         </li>
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
//                           Improve sleep quality
//                         </li>
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
//                           Add magnesium supplement
//                         </li>
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Suggested Diet */}
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800">
//                 <button
//                   onClick={() => toggleSection('diet')}
//                   className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-t-2xl"
//                 >
//                   <h3 className="text-lg font-bold flex items-center">
//                     <Apple className="w-5 h-5 mr-2 text-green-400" />
//                     Suggested Diet
//                   </h3>
//                   {collapsedSections.diet ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
//                 </button>
//                 <AnimatePresence>
//                   {!collapsedSections.diet && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-6 pb-6"
//                     >
//                       <ul className="space-y-2 text-sm">
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
//                           Low-glycemic foods
//                         </li>
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
//                           High-fiber foods
//                         </li>
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
//                           Omega-3 rich fish
//                         </li>
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Suggested Tests */}
//               <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800">
//                 <button
//                   onClick={() => toggleSection('tests')}
//                   className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-t-2xl"
//                 >
//                   <h3 className="text-lg font-bold flex items-center">
//                     <TestTube className="w-5 h-5 mr-2 text-blue-400" />
//                     Suggested Tests
//                   </h3>
//                   {collapsedSections.tests ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
//                 </button>
//                 <AnimatePresence>
//                   {!collapsedSections.tests && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="px-6 pb-6"
//                     >
//                       <ul className="space-y-2 text-sm">
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
//                           Comprehensive Metabolic Panel
//                         </li>
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
//                           Advanced Lipid Testing
//                         </li>
//                         <li className="flex items-center">
//                           <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
//                           Vitamin D3 Test
//                         </li>
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Heart, 
  Brain, 
  Activity, 
  Zap, 
  Mic, 
  MicOff,
  Play,
  Pause,
  BarChart3,
  TrendingUp,
  Shield,
  Target,
  Search,
  Bell,
  Settings,
  Home,
  MessageCircle,
  Stethoscope,
  TestTube,
  Pill,
  Moon,
  Apple,
  Dumbbell,
  ChevronDown,
  ChevronUp,
  Watch,
  Smartphone,
  Eye
} from 'lucide-react';

// Circular Progress Component
const CircularProgress: React.FC<{ value: number; size?: number; strokeWidth?: number }> = ({ 
  value, 
  size = 120, 
  strokeWidth = 8 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center space-x-6">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="text-6xl font-bold text-cyan-400">{value}</div>
    </div>
  );
};

// Line Chart Component
const LineChart: React.FC = () => {
  const data = [85, 82, 88, 90, 87, 85, 89];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 280;
    const y = 80 - ((value - min) / range) * 60;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `0,80 ${points} 280,80`;

  return (
    <div className="w-full h-32">
      <svg width="100%" height="100%" viewBox="0 0 280 100" className="overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 15}
            x2="280"
            y2={20 + i * 15}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}
        
        <motion.polygon
          points={areaPoints}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.polyline
          points={points}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {data.map((value, index) => (
          <motion.circle
            key={index}
            cx={(index / (data.length - 1)) * 280}
            cy={80 - ((value - min) / range) * 60}
            r="4"
            fill="#3B82F6"
            stroke="#1E293B"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            className="hover:r-6 transition-all cursor-pointer"
          />
        ))}
        
        {labels.map((label, index) => (
          <text
            key={index}
            x={(index / (labels.length - 1)) * 280}
            y="95"
            textAnchor="middle"
            className="text-xs fill-gray-400"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
};

// Donut Chart Component
const DonutChart: React.FC = () => {
  const data = [
    { label: 'HDL', value: 40, color: '#10B981' },
    { label: 'LDL', value: 35, color: '#F59E0B' },
    { label: 'Triglycerides', value: 25, color: '#EF4444' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = 45;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  let cumulativePercent = 0;

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg width="120" height="120" className="transform -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={normalizedRadius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          
          {data.map((item, index) => {
            const percent = item.value / total;
            const strokeDasharray = `${percent * circumference} ${circumference}`;
            const strokeDashoffset = -cumulativePercent * circumference;
            cumulativePercent += percent;

            return (
              <motion.circle
                key={index}
                cx="60"
                cy="60"
                r={normalizedRadius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{ strokeDasharray }}
                transition={{ duration: 1.5, delay: index * 0.3, ease: "easeInOut" }}
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{total}%</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </div>
      </div>
      
      <div className="ml-6 space-y-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className="flex items-center text-sm"
          >
            <div 
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-300">{item.label}: {item.value}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Bar Chart Component
const BarChart: React.FC = () => {
  const data = [
    { label: 'Mon', value: 65, color: '#3B82F6' },
    { label: 'Tue', value: 59, color: '#8B5CF6' },
    { label: 'Wed', value: 80, color: '#06B6D4' },
    { label: 'Thu', value: 81, color: '#10B981' },
    { label: 'Fri', value: 56, color: '#F59E0B' },
    { label: 'Sat', value: 55, color: '#EF4444' },
    { label: 'Sun', value: 40, color: '#EC4899' },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full h-32">
      <svg width="100%" height="100%" viewBox="0 0 280 100">
        <defs>
          {data.map((item, index) => (
            <linearGradient key={index} id={`barGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={item.color} />
              <stop offset="100%" stopColor={item.color} stopOpacity="0.6" />
            </linearGradient>
          ))}
        </defs>
        
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 15}
            x2="280"
            y2={20 + i * 15}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}
        
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 60;
          const barWidth = 30;
          const barX = index * 40 + 5;
          const barY = 80 - barHeight;
          
          return (
            <g key={index}>
              <motion.rect
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={`url(#barGradient${index})`}
                rx="4"
                initial={{ height: 0, y: 80 }}
                animate={{ height: barHeight, y: barY }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              
              <motion.text
                x={barX + barWidth / 2}
                y={barY - 5}
                textAnchor="middle"
                className="text-xs fill-gray-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.value}
              </motion.text>
              
              <text
                x={barX + barWidth / 2}
                y="95"
                textAnchor="middle"
                className="text-xs fill-gray-400"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Human Body Component with Surrounding Organs
const HumanBody: React.FC<{ biomarkers: any[] }> = ({ biomarkers }) => {
  const [hoveredOrgan, setHoveredOrgan] = useState<string | null>(null);

  const surroundingOrgans = [
    { name: 'Brain', icon: Brain, x: 50, y: 8, color: '#8B5CF6', marker: 'Glucose', value: '85 mg/dL', status: 'optimal' },
    { name: 'Eyes', icon: Eye, x: 85, y: 20, color: '#10B981', marker: 'Vision', value: '20/20', status: 'optimal' },
    { name: 'Heart', icon: Heart, x: 15, y: 35, color: '#EF4444', marker: 'Heart Rate', value: '72 bpm', status: 'optimal' },
    { name: 'Lungs', icon: Settings, x: 85, y: 40, color: '#06B6D4', marker: 'SpO2', value: '98%', status: 'optimal' },
    { name: 'Liver', icon: Activity, x: 15, y: 55, color: '#F59E0B', marker: 'ALT', value: '25 U/L', status: 'optimal' },
    { name: 'Kidneys', icon: Zap, x: 85, y: 65, color: '#3B82F6', marker: 'Creatinine', value: '0.9 mg/dL', status: 'optimal' },
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50">
      {/* Human Body Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="data:image/png;base64,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"
//               alt="Human Body Anatomy"
              alt="Human Body Anatomy"
              className="w-64 h-80 object-cover rounded-lg opacity-70 filter grayscale contrast-125"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 100%)'
              }}
            />
            
            {/* Overlay gradient for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-purple-900/20 rounded-lg"></div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-lg shadow-2xl shadow-blue-500/20"></div>
          </motion.div>
        </div>
      </div>

      {/* Surrounding Organ Icons */}
      {surroundingOrgans.map((organ, index) => (
        <motion.div
          key={`organ-${index}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          style={{ left: `${organ.x}%`, top: `${organ.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2 + 1.2, duration: 0.5 }}
          onMouseEnter={() => setHoveredOrgan(organ.name)}
          onMouseLeave={() => setHoveredOrgan(null)}
        >
          <motion.div
            className={`relative p-4 rounded-full backdrop-blur-sm border-2 transition-all duration-300 ${
              hoveredOrgan === organ.name 
                ? 'bg-gray-800/80 border-white/40 shadow-2xl' 
                : 'bg-gray-800/60 border-gray-600/60 hover:bg-gray-800/70'
            }`}
            animate={{
              scale: hoveredOrgan === organ.name ? 1.2 : 1,
              boxShadow: hoveredOrgan === organ.name 
                ? `0 0 30px ${organ.color}60`
                : '0 0 0px transparent'
            }}
            transition={{ duration: 0.3 }}
          >
            <organ.icon 
              className="w-6 h-6 transition-colors duration-300" 
              style={{ color: organ.color }}
            />
            
            {/* Pulsing ring effect */}
            {hoveredOrgan === organ.name && (
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: organ.color }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>

          {/* Organ Tooltip */}
          <AnimatePresence>
            {hoveredOrgan === organ.name && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 p-4 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl min-w-40 z-20"
              >
                <div className="text-center">
                  <div className="font-bold text-white text-sm mb-1">{organ.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{organ.marker}</div>
                  <div className="text-lg font-bold mb-2" style={{ color: organ.color }}>
                    {organ.value}
                  </div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                    {organ.status}
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Animated Energy Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle pulse effect around the container */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-blue-400/20"
        animate={{
          scale: [1, 1.01, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Wearable Data Component
const WearableData: React.FC = () => {
  const wearableDevices = [
    { name: 'Apple Watch', icon: Watch, color: 'text-blue-400' },
    { name: 'Fitbit', icon: Activity, color: 'text-green-400' },
    { name: 'OURA Ring', icon: Watch, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Wearable Data</h3>
      <div className="space-y-3">
        {wearableDevices.map((device, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg"
          >
            <div className="flex items-center">
              <device.icon className={`w-4 h-4 mr-2 ${device.color}`} />
              <span className="text-sm font-medium">{device.name}</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </motion.div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-2">
        Last sync: 2 minutes ago
      </div>
    </div>
  );
};

// Voice Recorder Component
const VoiceRecorder: React.FC<{
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  currentQuestion: string;
  showResponse: boolean;
  typedResponse: string;
}> = ({
  isRecording,
  onStartRecording,
  onStopRecording,
  currentQuestion,
  showResponse,
  typedResponse,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <motion.button
          onClick={isRecording ? onStopRecording : onStartRecording}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            isRecording 
              ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30' 
              : 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRecording ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
          
          {isRecording && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {currentQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
          >
            <h4 className="text-lg font-semibold mb-2 text-blue-400">AI Question</h4>
            <p className="text-gray-300">{currentQuestion}</p>
            
            {isRecording && (
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-blue-400 rounded-full"
                    animate={{
                      height: [4, 20, 4],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResponse && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/30"
          >
            <h4 className="text-lg font-semibold mb-2 text-green-400">AI Recommendation</h4>
            <p className="text-gray-300">{typedResponse}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isRecording && !currentQuestion && !showResponse && (
        <div className="text-center text-gray-500">
          <p>Click the microphone to start your health assessment</p>
        </div>
      )}
    </div>
  );
};

// Main Dashboard Component
const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [typedResponse, setTypedResponse] = useState('');
  const [collapsedSections, setCollapsedSections] = useState<{[key: string]: boolean}>({
    actions: false,
    diet: false,
    tests: false
  });

  const healthQuestions = [
    "How has your energy level been over the past week?",
    "Have you noticed any changes in your sleep quality recently?",
    "What activities make you feel most energized and alive?"
  ];

  const sampleResponse = "Based on your response, I recommend focusing on consistent sleep patterns and incorporating 15 minutes of morning sunlight exposure to optimize your circadian rhythm.";

  const startRecording = () => {
    setIsRecording(true);
    setCurrentQuestion(healthQuestions[Math.floor(Math.random() * healthQuestions.length)]);
    setShowResponse(false);
    setTypedResponse('');
  };

  const stopRecording = () => {
    setIsRecording(false);
    setCurrentQuestion('');
    setTimeout(() => {
      setShowResponse(true);
      typeResponse();
    }, 1000);
  };

  const typeResponse = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < sampleResponse.length) {
        setTypedResponse(sampleResponse.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'biomarkers', label: 'Biomarkers', icon: TestTube },
    { id: 'insights', label: 'AI Insights', icon: Brain },
    { id: 'interventions', label: 'Interventions', icon: Target },
    { id: 'risks', label: 'Risk Analysis', icon: Shield },
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
    { id: 'search', label: 'Search', icon: Search },
  ];

  const biomarkerData = [
    { name: 'Glucose', value: 85, status: 'optimal', color: 'text-green-400' },
    { name: 'Cholesterol', value: 180, status: 'moderate', color: 'text-yellow-400' },
    { name: 'Blood Pressure', value: 120, status: 'optimal', color: 'text-green-400' },
    { name: 'Vitamin D', value: 32, status: 'low', color: 'text-red-400' },
    { name: 'HbA1c', value: 5.2, status: 'optimal', color: 'text-green-400' },
    { name: 'CRP', value: 1.8, status: 'moderate', color: 'text-yellow-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>
      </div>
      
      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <motion.div 
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-64 bg-gray-900/80 backdrop-blur-xl border-r border-gray-800 p-6"
        >
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
            <div>
              <h2 className="text-xl font-bold">LongevityAI</h2>
              <p className="text-xs text-gray-500">Dashboard</p>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
                    : 'hover:bg-gray-800/50 text-gray-400'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="font-semibold mb-2">Patient Profile</h3>
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Age: 42</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Health Dashboard</h1>
                <p className="text-gray-500">Track your longevity journey</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 col-span-2"
              >
                <div className="text-center">
                  <CircularProgress value={86} />
                  <h3 className="text-xl font-bold mt-4">Longevity Score</h3>
                  <p className="text-gray-500">Excellent</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center"
              >
                <div className="text-4xl font-bold text-blue-400">36</div>
                <h3 className="text-xl font-bold mt-2">Biological Age</h3>
                <p className="text-gray-500">6 years younger</p>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center"
              >
                <div className="text-4xl font-bold text-gray-400">42</div>
                <h3 className="text-xl font-bold mt-2">Chronological Age</h3>
                <p className="text-gray-500">Actual age</p>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800"
              >
                <WearableData />
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 col-span-2"
              >
                <div className="text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl">🏆</span>
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Your Achievement</h4>
                  <div className="text-3xl font-bold text-white mb-1">100</div>
                  <div className="text-lg text-yellow-300 mb-4">Longenomic Tokens</div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                    <div className="text-sm text-gray-300 mb-2">Progress to Next Level</div>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
                      <motion.div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '10%' }}
                        transition={{ delay: 1, duration: 1.5 }}
                      ></motion.div>
                    </div>
                    <div className="text-sm text-gray-400">
                      Perform <span className="text-yellow-400 font-semibold">1000 more steps</span> to earn and unlock next level
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center"
              >
                <div className="text-4xl font-bold text-green-400">92</div>
                <h3 className="text-xl font-bold mt-2">Health Score</h3>
                <p className="text-gray-500">Excellent</p>
              </motion.div>
            </div>

            {/* Body Overview Section */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Body Overview</h3>
                <HumanBody biomarkers={biomarkerData} />
              </div>
            </motion.div>

            {/* Charts Section */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Glucose Trend</h3>
                <LineChart />
              </div>
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Cholesterol Distribution</h3>
                <DonutChart />
              </div>
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Weekly Activity</h3>
                <BarChart />
              </div>
            </motion.div>

            {/* Biomarker Grid */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold mb-4">Biomarkers</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {biomarkerData.map((marker, index) => (
                  <div key={index} className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-800">
                    <div className="text-sm text-gray-500">{marker.name}</div>
                    <div className={`text-2xl font-bold ${marker.color}`}>{marker.value}</div>
                    <div className="text-xs capitalize text-gray-500">{marker.status}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Voice Recorder Section */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 mb-8"
            >
              <h3 className="text-xl font-bold mb-4">AI Health Assessment</h3>
              <VoiceRecorder 
                isRecording={isRecording}
                onStartRecording={startRecording}
                onStopRecording={stopRecording}
                currentQuestion={currentQuestion}
                showResponse={showResponse}
                typedResponse={typedResponse}
              />
            </motion.div>

            {/* AI Insights - Collapsible */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Suggested Actions */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800">
                <button
                  onClick={() => toggleSection('actions')}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-t-2xl"
                >
                  <h3 className="text-lg font-bold flex items-center">
                    <Dumbbell className="w-5 h-5 mr-2 text-orange-400" />
                    Suggested Actions
                  </h3>
                  {collapsedSections.actions ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {!collapsedSections.actions && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-3">
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                          <div className="font-semibold text-sm mb-1">Workout: 10 min Zone 2 Cardio</div>
                          <div className="text-xs text-gray-400">
                            Reference: <span className="text-blue-400 underline">https://yourapp.com/learn/zone-2-cardio</span>
                          </div>
                        </div>
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                          <div className="font-semibold text-sm mb-1">Workout: Protein-rich breakfast</div>
                          <div className="text-xs text-gray-400">
                            Reference: <span className="text-blue-400 underline">https://yourapp.com/learn/high-protein-breakfast</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Suggested Diet */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800">
                <button
                  onClick={() => toggleSection('diet')}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-t-2xl"
                >
                  <h3 className="text-lg font-bold flex items-center">
                    <Apple className="w-5 h-5 mr-2 text-green-400" />
                    Diet
                  </h3>
                  {collapsedSections.diet ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {!collapsedSections.diet && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-3">
                        <div className="text-sm font-medium mb-2">Oats + Greek Yogurt + Berries</div>
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                          <div className="font-semibold text-sm mb-1">Item: Oats</div>
                          <div className="text-xs text-gray-400">
                            Product Link: <span className="text-blue-400 underline">https://yourstore.com/buy/oats</span>
                          </div>
                        </div>
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                          <div className="font-semibold text-sm mb-1">Item: Greek Yogurt</div>
                          <div className="text-xs text-gray-400">
                            Product Link: <span className="text-blue-400 underline">https://yourstore.com/buy/greek-yogurt</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Suggested Tests */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800">
                <button
                  onClick={() => toggleSection('tests')}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-t-2xl"
                >
                  <h3 className="text-lg font-bold flex items-center">
                    <TestTube className="w-5 h-5 mr-2 text-blue-400" />
                    Tests
                  </h3>
                  {collapsedSections.tests ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {!collapsedSections.tests && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-3">
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                          <div className="font-semibold text-sm mb-1">Test: Vitamin D3</div>
                          <div className="text-sm text-red-400 mb-1">Urgency: high</div>
                          <div className="text-xs text-gray-400">
                            Booking: <span className="text-blue-400 underline">https://yourlab.com/book/vitamin-d3</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;