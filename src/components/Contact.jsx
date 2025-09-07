import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData',formData);
    return 
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "codediumnet@gmail.com",
      link: "mailto:codediumnet@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📞",
      title: "Phone",
      value: " +92 3202043300",
      link: "tel: +923202043300",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Faisalabad Punjab, Pakistan",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💬",
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-600">🚀 Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Ready to Create Magic?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your vision into reality. Let's discuss how we can build something extraordinary together that exceeds your wildest expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="relative z-10">
                      <div className={`text-3xl mb-3 p-3 bg-gradient-to-br ${info.gradient} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="font-bold text-gray-900 mb-1">{info.title}</div>
                      <a 
                        href={info.link}
                        className={`bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent hover:underline font-medium`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Codedium?</h4>
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Free consultation and detailed project roadmap" },
                  { icon: "⚡", text: "Agile development with weekly progress updates" },
                  { icon: "🛡️", text: "Comprehensive post-launch support & maintenance" },
                  { icon: "💎", text: "Premium quality with transparent, fair pricing" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="text-2xl mr-4 group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
            {/* Form background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50"></div>
            
            <div className="relative z-10">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="text-8xl mb-6 animate-bounce">🎉</div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for reaching out! We'll get back to you within 24 hours with a detailed response.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h3>
                    <p className="text-gray-600">Tell us about your vision and let's make it happen</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="project" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
                        Project Type
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select project type</option>
                        <option value="web-development">🌐 Web Development</option>
                        <option value="mobile-app">📱 Mobile App</option>
                        <option value="custom-software">⚡ Custom Software</option>
                        <option value="cloud-devops">☁️ Cloud & DevOps</option>
                        <option value="consultation">💬 Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your vision, requirements, timeline, and any specific features you need. The more details you provide, the better we can help you!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;