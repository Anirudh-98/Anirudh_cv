import  { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin, Code, Server, Database, Shield, Brain, ChevronDown } from 'lucide-react';

const Portfolio = () => {

  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            // setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Anirudh Jyothula Resume.pdf';
    link.download = 'Anirudh_Jyothula_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: 'Java', icon: Code, color: 'from-orange-400 to-red-500' },
    { name: 'Spring Boot', icon: Server, color: 'from-green-400 to-blue-500' },
    { name: 'ReactJS', icon: Code, color: 'from-blue-400 to-cyan-500' },
    { name: 'MySQL', icon: Database, color: 'from-yellow-400 to-orange-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-purple-400 to-pink-500' },
    { name: 'AI Integration', icon: Brain, color: 'from-indigo-400 to-purple-500' }
  ];

  const projects = [
    {
      title: 'Secure ECommerce Platform',
      description: 'Built with Java Spring Boot, MySQL, and Angular featuring Google OAuth 2.0, JWT authentication, and Splunk integration.',
      tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'OAuth 2.0'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Smart Legal Helper',
      description: 'AI-powered legal assistant platform with ReactJS frontend, Supabase backend, and integrated LLM-based chatbot.',
      tech: ['ReactJS', 'Supabase', 'AI/ML', 'LLM APIs'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Library Management System',
      description: 'Complete library management solution with MVC architecture, CRUD operations, and responsive UI.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JSP', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Anirudh Jyothula
            </h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="text-center z-10 px-4">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AJ</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Java Full Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            2+ Years Experience | Cybersecurity Expert | AI Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={downloadResume}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Java Full Stack Developer with over 2 years of hands-on experience in building scalable, 
                secure web applications using Java, Spring Boot, ReactJS, and MySQL. I hold a Master's 
                degree in <span className="text-purple-400 font-semibold">Cybersecurity from Coventry University</span>, 
                with a strong focus on integrating advanced security practices into application development.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Well-versed in implementing authentication, authorization, and secure coding standards. 
                Additionally familiar with <span className="text-cyan-400 font-semibold">AI technologies</span>, 
                leveraging automation and intelligent systems to boost development productivity and deliver 
                high-performance, future-ready software solutions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">MSc</div>
              <div className="text-white/80">Cybersecurity</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-white/80">Major Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <div className={`grid md:grid-cols-3 lg:grid-cols-6 gap-6 transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-6 bg-gradient-to-br ${skill.color} rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="w-8 h-8 text-white mb-4 group-hover:animate-bounce" />
                <h3 className="text-white font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Languages</h3>
              <div className="space-y-2">
                {['Java', 'SQL', 'HTML', 'JavaScript'].map(lang => (
                  <div key={lang} className="text-white/80 hover:text-white transition-colors">{lang}</div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Frameworks</h3>
              <div className="space-y-2">
                {['Spring Boot', 'Hibernate', 'ReactJS','Angular JS', 'Bootstrap'].map(framework => (
                  <div key={framework} className="text-white/80 hover:text-white transition-colors">{framework}</div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-400">Databases</h3>
              <div className="space-y-2">
                {['MySQL', 'PostgreSQL'].map(db => (
                  <div key={db} className="text-white/80 hover:text-white transition-colors">{db}</div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400">Tools</h3>
              <div className="space-y-2">
                {['Git', 'Maven', 'IntelliJ IDEA'].map(tool => (
                  <div key={tool} className="text-white/80 hover:text-white transition-colors">{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-6`}></div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Java Full Stack Developer</h3>
                  <p className="text-purple-400 font-semibold">RoyalCyber Pvt. Ltd, Hyderabad</p>
                </div>
                <div className="text-cyan-400 font-semibold">March 2022 – November 2022</div>
              </div>
              
              <ul className="space-y-2 text-white/80">
                <li>• Developed secure RESTful APIs using Spring Boot and integrated them with frontend modules</li>
                <li>• Implemented JWT and role-based access control mechanisms</li>
                <li>• Collaborated with frontend and QA teams to ensure full integration and testing</li>
                <li>• Used Git for version control</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Software Engineer Intern</h3>
                  <p className="text-purple-400 font-semibold">Futzen ETechnologies Pvt Ltd, Hyderabad</p>
                </div>
                <div className="text-cyan-400 font-semibold">August 2021 – February 2022</div>
              </div>
              
              <ul className="space-y-2 text-white/80">
                <li>• Contributed to backend development using Java and Spring Boot</li>
                <li>• Helped in writing reusable components and resolving production bugs</li>
                <li>• Involved in Agile sprints, bug tracking.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <a
              href="mailto:ranirudhjyothula@gmail.com"
              className="group bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <Mail className="w-8 h-8 text-red-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-white font-semibold">Email</div>
            </a>
            
            <a
              href="tel:+916301361466"
              className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-white font-semibold">Phone</div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/anirudh-jyothula-479661166"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-white font-semibold">LinkedIn</div>
            </a>
            
            <a
              href="https://github.com/Anirudh-98"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Github className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <div className="text-white font-semibold">GitHub</div>
            </a>
          </div>
          
          <div className="flex items-center justify-center text-white/60 mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Hyderabad, India</span>
          </div>
          
          <button
            onClick={downloadResume}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <Download className="inline-block w-5 h-5 mr-2" />
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Anirudh Jyothula. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;