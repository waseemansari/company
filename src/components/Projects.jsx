function Projects() {
  const projects = [
    {
      title: "Crypto Portfolio ",
      description: "A next-generation crypto currency platform featuring recommendations, real-time inventory, and seamless payment processing.",
      technologies: ["React", "Node.js", "Stripe"],
      image: "🛒",
      category: "Web Application",
      link: "https://peacecoin.com/",
      gradient: "from-blue-500 to-purple-600",
      stats: { users: "50K+", conversion: "+45%" }
    },
    {
      title: "Safety Course App",
      description: "Revolutionary team collaboration app with real-time sync, smart notifications, and advanced project analytics.",
      technologies: ["React Native", "Firebase", "WebRTC", "Analytics"],
      image: "📋",
      category: "Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.qhseinternational",
      gradient: "from-green-500 to-teal-600",
      stats: { teams: "1K+", productivity: "+60%" }
    },
    {
      title: "Crm",
      description: " Customer relationship management, telemedicine, and AI-assisted diagnostics.",
      technologies: ["jquery", "codeingotor", "html","css"],
      image: "🏥",
      category: "Healthcare",
      link: "https://starsacademies.com/",
      gradient: "from-red-500 to-pink-600",
      stats: { patients: "25K+", efficiency: "+40%" }
    },
    {
      title: "Crypto Mining",
      description: "We user create account and buy machine check live mining on there portal, blockchain contracts, and predictive market analytics.",
      technologies: ["Next.js", "Three.js", "Blockchain", "VR"],
      image: "🏠",
      category: "PropTech",
      link: "https://vista.network/",
      gradient: "from-orange-500 to-yellow-600",
      stats: { properties: "10K+", sales: "+35%" }
    },
    {
      title: "FinanceIQ Dashboard",
      description: "Advanced financial analytics platform with real-time market data, portfolio optimization, and risk assessment.",
      technologies: ["next.ka", "node.js", "tailwind", "express"],
      image: "📊",
      category: "FinTech",
      link: "https://consultancy.qhseinternational.com",
      gradient: "from-indigo-500 to-blue-600",
      stats: { trades: "1M+", accuracy: "94%" }
    },
    {
      title: "EduTech Universe",
      description: "Next-gen learning platform with adaptive AI tutoring, immersive content, and blockchain certifications.",
       technologies: ["next.ka", "node.js", "tailwind", "express"],
      image: "🎓",
      category: "EdTech",
      link: "https://elearnings.qhseinternational.com/login",
      gradient: "from-purple-500 to-indigo-600",
      stats: { students: "100K+", completion: "+70%" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <span className="text-sm font-semibold text-blue-300">💎 Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Featured Masterpieces
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our portfolio of groundbreaking projects that have transformed businesses and delighted millions of users worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10">
                {/* Project icon and category */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-5xl p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {project.image}
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-bold text-white`}>
                    {project.category}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center p-3 bg-white/5 rounded-xl">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
               
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-block text-center`}
                  >
                    View Live
                  </a>
                  <button className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 hover:bg-white/5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-16">
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;