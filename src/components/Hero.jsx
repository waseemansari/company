function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300/30 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-pink-300/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-cyan-300/30 rounded-full animate-ping delay-900"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <span className="text-sm font-medium text-blue-300">✨ Premium Software Development</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Codedium
            </span>
            
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            We transform visionary ideas into extraordinary digital experiences that captivate users and drive business success through cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <button 
              onClick={scrollToContact}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 border-2 border-white/20 hover:border-white/40 rounded-2xl font-bold text-lg transition-all duration-500 backdrop-blur-sm hover:bg-white/5 relative overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-3 animate-pulse"></div>
          <div className="absolute -bottom-8 text-xs text-white/50">Scroll</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;