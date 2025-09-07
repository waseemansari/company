function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Stunning, responsive web applications that captivate users and drive conversions with modern frameworks and cutting-edge design.",
      features: ["Next.js & React", "Performance Optimized", "SEO Mastery", "Progressive Web Apps"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: "📱",
      title: "Mobile Excellence",
      description: "Native and cross-platform mobile experiences that users love, built with the latest technologies and design principles.",
      features: ["React Native", "Flutter Magic", "Native Performance", "App Store Ready"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: "⚡",
      title: "Custom Solutions",
      description: "Bespoke software solutions tailored to your unique business needs, designed to scale and evolve with your growth.",
      features: ["AI Integration", "Microservices", "Real-time Systems", "Enterprise Grade"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and seamless deployment pipelines that ensure your applications perform flawlessly at any scale.",
      features: ["Multi-Cloud", "Auto-Scaling", "Zero Downtime", "Security First"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-600">🚀 Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Services That Inspire
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver exceptional digital solutions that combine innovative technology with stunning design to create experiences that users love and businesses thrive on
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-2 border border-white/50 backdrop-blur-sm overflow-hidden`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Floating icon background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="text-8xl">{service.icon}</div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`text-5xl p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <span className="filter drop-shadow-lg">{service.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover/feature:scale-150 transition-transform duration-300`}></div>
                      <span className="text-gray-700 font-medium text-sm group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className={`w-full py-4 bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md`}>
                    <span className="flex items-center justify-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;