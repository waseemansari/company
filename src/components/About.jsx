function About() {
  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const teamValues = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "Every project is approached with clear goals and measurable outcomes to ensure your business objectives are met."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work closely with our clients as partners, ensuring transparent communication throughout the development process."
    },
    {
      icon: "⚡",
      title: "Agile Development",
      description: "Our agile methodology ensures rapid delivery while maintaining the highest quality standards and flexibility."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Codedium
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of software developers dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded with a vision to bridge the gap between innovative technology and business success, 
              Codedium has been at the forefront of software development for over 5 years.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our team combines technical expertise with creative problem-solving to deliver solutions 
              that not only meet your requirements but exceed your expectations. We believe in the power 
              of technology to transform businesses and create meaningful impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From startups to enterprise clients, we've helped organizations across various industries 
              achieve their digital transformation goals through custom software development, web applications, 
              and mobile solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;