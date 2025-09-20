import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Github, Sparkles, ArrowRight, Play } from 'lucide-react';

export default function CodingChannelPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@LogicHubYT',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-400 hover:to-red-500',
      description: 'Coding Tutorials & Live Streams'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/logichub.codes/',
      color: 'from-pink-500 via-purple-500 to-indigo-500',
      hoverColor: 'hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400',
      description: 'Behind the Scenes & Quick Tips'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tejas7070',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-600 hover:to-gray-800',
      description: 'Open Source Projects & Code'
    }
  ];

  const codeSnippets = [
    'const awesome = true;',
    'function createMagic() { ... }',
    'git commit -m "✨ magic"',
    '// Building the future',
    '<Component /> 🚀'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower gradient */}
      <div
        className="fixed w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl pointer-events-none z-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
        }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className={`absolute text-gray-500/30 font-mono text-xs sm:text-sm transform transition-all duration-1000 hidden sm:block ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            left: `${10 + (i * 18)}%`,
            top: `${20 + (i * 15)}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `rotate(${-15 + i * 6}deg)`
          }}
        >
          {snippet}
        </div>
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className={`text-center mb-4 sm:mb-6 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* LogicHub Logo */}
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <div className="relative group">
              <img 
                src="/img/logo.png"
                alt="LogicHub Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover hover:scale-110 transition-transform duration-500 shadow-2xl animate-spin"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.3))',
                  animationDuration: '8s',
                }}
              />
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-2 sm:mb-4 animate-pulse leading-tight">
            LogicHub
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-2 px-4 font-extrabold">
          Learn. Build. Grow.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs sm:text-sm">
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Join the coding journey</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl w-full px-4">
          {/* YouTube Card */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ animationDelay: '0s' }}>
            <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-cyan-300/30 p-4 sm:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30">
                <div className={`absolute inset-0 bg-gradient-to-br ${socialLinks[0].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${socialLinks[0].color} ${socialLinks[0].hoverColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {socialLinks[0].name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-4">
                    {socialLinks[0].description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </a>
          </div>

          {/* Instagram Card */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-cyan-300/30 p-4 sm:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30">
                <div className={`absolute inset-0 bg-gradient-to-br ${socialLinks[1].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${socialLinks[1].color} ${socialLinks[1].hoverColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {socialLinks[1].name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-4">
                    {socialLinks[1].description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </a>
          </div>

          {/* GitHub Card - Centered */}
          <div className="sm:col-span-2 flex justify-center">
            <div className="w-full max-w-md">
              <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-cyan-300/30 p-4 sm:p-6 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${socialLinks[2].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${socialLinks[2].color} ${socialLinks[2].hoverColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                        <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                        {socialLinks[2].name}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-4">
                        {socialLinks[2].description}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-6 sm:mt-8 px-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-cyan-200 hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-spin" />
            <span className="text-xs sm:text-sm font-medium text-center">Let's build something amazing together</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-spin" />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}