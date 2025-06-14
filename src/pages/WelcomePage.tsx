import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';

// Import profile image
const profileImageUrl = '/assets/images/profile.png';

const WelcomePage = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cyan-400">Welcome to My</span><br />
              <span className="text-purple-400">Digital Universe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-cyan-400">
              Where Innovation Meets Creativity
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              I'm Elvi Zekaj, a passionate full-stack developer crafting exceptional digital experiences
              with cutting-edge technologies and modern design principles.
            </p>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">React</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">TypeScript</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Node.js</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">Python</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">AWS</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm border border-indigo-500/30">Docker</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Discover My Story
              </Link>
              <Link to="/projects" className="px-8 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors">
                View My Work
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              {/* Profile Image with Fallback */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400/30 shadow-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                {/* Fallback Content - Always Visible */}
                <div className="w-full h-full flex items-center justify-center text-cyan-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <div className="text-lg font-semibold">Elvi Zekaj</div>
                    <div className="text-sm opacity-75">Full Stack Developer</div>
                  </div>
                </div>

                {/* Actual Image - Hidden by default, shown when loaded */}
                <img
                  src={profileImageUrl}
                  alt="Elvi Zekaj - Full Stack Developer"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                  onLoad={(e) => {
                    console.log('Profile image loaded successfully');
                    e.currentTarget.style.opacity = '1';
                  }}
                  onError={(e) => {
                    console.error('Failed to load profile image - using fallback');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              {/* Tech icons floating around */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-cyan-400 text-xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-purple-400 text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            Explore My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/about" className="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50">
              <div className="text-4xl mb-4 text-cyan-400">👨‍💻</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">About Me</h3>
              <p className="text-slate-300 leading-relaxed">Learn about my journey, skills, and passion for technology</p>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                <span>Learn more</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link to="/projects" className="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-purple-500/50">
              <div className="text-4xl mb-4 text-purple-400">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">Projects</h3>
              <p className="text-slate-300 leading-relaxed">Explore my latest work and innovative solutions</p>
              <div className="mt-4 flex items-center text-purple-400 text-sm font-medium">
                <span>View work</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link to="/skills" className="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-yellow-500/50">
              <div className="text-4xl mb-4 text-yellow-400">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors">Skills</h3>
              <p className="text-slate-300 leading-relaxed">Discover my technical expertise and capabilities</p>
              <div className="mt-4 flex items-center text-yellow-400 text-sm font-medium">
                <span>See skills</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link to="/experience" className="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-green-500/50">
              <div className="text-4xl mb-4 text-green-400">💼</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">Experience</h3>
              <p className="text-slate-300 leading-relaxed">Review my professional background and achievements</p>
              <div className="mt-4 flex items-center text-green-400 text-sm font-medium">
                <span>View history</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link to="/contact" className="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 md:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4 text-cyan-400">📧</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">Contact</h3>
              <p className="text-slate-300 leading-relaxed">Let's connect and discuss your next project</p>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                <span>Get in touch</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-slate-300 font-medium">Years Experience</div>
              <div className="mt-2 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-300 font-medium">Projects Completed</div>
              <div className="mt-2 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-slate-300 font-medium">Technologies Mastered</div>
              <div className="mt-2 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-green-500 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-slate-300 font-medium">Client Satisfaction</div>
              <div className="mt-2 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>

          {/* Code snippet showcase */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 font-mono text-sm">
              <div className="text-purple-400">interface <span className="text-cyan-400">Developer</span> {'{'}</div>
              <div className="ml-4 text-slate-300">name: <span className="text-green-400">string</span>;</div>
              <div className="ml-4 text-slate-300">skills: <span className="text-green-400">string</span>[];</div>
              <div className="ml-4 text-slate-300">passion: <span className="text-yellow-400">'building amazing things'</span>;</div>
              <div className="text-purple-400">{'}'}</div>
              <br />
              <div className="text-purple-400">const <span className="text-cyan-400">elvi</span>: <span className="text-cyan-400">Developer</span> = {'{'}</div>
              <div className="ml-4 text-slate-300">name: <span className="text-yellow-400">'Elvi Zekaj'</span>,</div>
              <div className="ml-4 text-slate-300">skills: [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'TypeScript'</span>, <span className="text-yellow-400">'Node.js'</span>],</div>
              <div className="ml-4 text-slate-300">passion: <span className="text-yellow-400">'building amazing things'</span></div>
              <div className="text-purple-400">{'}'};</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
