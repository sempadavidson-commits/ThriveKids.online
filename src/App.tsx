import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart, TrendingUp, Users, Globe, Zap, Award, CheckCircle2 } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  impact: string;
  stats: { label: string; value: string }[];
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

// Animated Counter Component
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Marquee Component
const Marquee: React.FC<{ children: React.ReactNode; speed?: number }> = ({ children, speed = 50 }) => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-transparent via-white to-transparent">
      <div
        className="flex gap-8 py-4 animate-scroll"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-8 flex-shrink-0">
            {children}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

const programs: Program[] = [
  {
    id: 'education',
    title: 'Education Support',
    description: 'Providing tuition scholarships, vital school supplies, tutoring circles, and building literacy labs for vulnerable children across Africa and Asia.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    impact: '1,420+ children empowered',
    stats: [
      { label: 'Scholarships', value: '1,420+' },
      { label: 'Literacy Labs', value: '45' },
      { label: 'Completion Rate', value: '94.2%' }
    ]
  },
  {
    id: 'health',
    title: 'Health & Nutrition',
    description: 'Fighting malnutrition and disease through mobile clinics, immunization programs, therapeutic nutrition, and community health education.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
    impact: '18,200+ lives transformed',
    stats: [
      { label: 'Children Treated', value: '18.2K' },
      { label: 'School Meals', value: '3.2M' },
      { label: 'Water Outlets', value: '240+' }
    ]
  },
  {
    id: 'protection',
    title: 'Child Protection',
    description: 'Rescuing vulnerable children from abuse, trafficking, and exploitation through emergency hotlines, safe shelters, and comprehensive rehabilitation.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    impact: '345 children rescued',
    stats: [
      { label: 'Rescued', value: '345' },
      { label: 'Advocates', value: '12K' },
      { label: 'Registered', value: '8.5K' }
    ]
  },
  {
    id: 'family',
    title: 'Family Strengthening',
    description: 'Empowering families with microloans, vocational training, agricultural support, and social services to break generational poverty cycles.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    impact: '560 families thriving',
    stats: [
      { label: 'Firms Funded', value: '560' },
      { label: 'Reunion Rate', value: '91%' },
      { label: 'Agri Kits', value: '1.9K' }
    ]
  }
];

const testimonials = [
  { name: 'Amina Hassan', location: 'Kenya', story: 'First female university applicant in village' },
  { name: 'James Mwangi', location: 'Uganda', story: 'Rescued from factory labor, now thriving' },
  { name: 'Maria Santos', location: 'Colombia', story: 'Built sustainable family business' },
  { name: 'Priya Sharma', location: 'India', story: 'Nutrition recovery success' },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Helen Vance, PhD',
    role: 'Executive Director & Co-Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    bio: '25+ years leading international child advocacy'
  },
  {
    name: 'Marcus Reynolds, CPA',
    role: 'Chief Program & Financial Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500',
    bio: 'Expert nonprofit financial management'
  },
  {
    name: 'Ambassador Daniel K. Choi',
    role: 'Chairperson of the Board',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500',
    bio: '30 years UN diplomatic experience'
  },
  {
    name: 'Sarah Jenkins-Hume, JD',
    role: 'Chair of Governance & Safeguarding',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500',
    bio: 'Child protection legal expert'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: 'Roboto, sans-serif', overflow: 'hidden' }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <Heart className="w-10 h-10 text-white absolute inset-0 m-auto" fill="white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">ThriveKids</span>
            </div>

            <div className="hidden md:flex gap-12">
              {['Programs', 'Impact', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-rose-600 font-medium text-sm transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-rose-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button className="hidden md:block bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-rose-200 font-semibold text-sm transform transition-all duration-300 hover:scale-105">
              Donate Now
            </button>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 space-y-3">
              {['Programs', 'Impact', 'Team', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-rose-600 py-2">
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-2 rounded-lg font-semibold">
                Donate
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 bg-gradient-to-br from-blue-50 via-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-gradient-to-br from-rose-200 to-transparent rounded-full -top-32 -right-32 opacity-30 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full -bottom-32 -left-32 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-semibold text-rose-600 bg-rose-50 px-4 py-2 rounded-full">🌍 Transforming Lives Globally</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Empower Every <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Child's Future</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                ThriveKids Global Foundation provides vulnerable children with education, healthcare, protection, and family support. Together, we're breaking cycles of poverty and creating lasting transformations across 15+ countries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-3.5 rounded-lg hover:shadow-2xl hover:shadow-rose-200 font-semibold flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105">
                  Make Impact Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-900 px-8 py-3.5 rounded-lg hover:border-rose-600 hover:text-rose-600 hover:bg-rose-50 font-semibold transition-all duration-300">
                  Learn Our Story
                </button>
              </div>

              <div className="flex gap-8 pt-6 text-sm">
                <div>
                  <p className="text-3xl font-bold text-rose-600"><AnimatedCounter value={50000} /></p>
                  <p className="text-gray-600">Lives Transformed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-rose-600"><AnimatedCounter value={15} /></p>
                  <p className="text-gray-600">Countries Active</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-blue-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform group-hover:scale-105"></div>
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58e3f068b?auto=format&fit=crop&q=80&w=700"
                alt="Children"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Stats Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-transparent to-blue-500"></div>
        </div>

        <Marquee speed={40}>
          {[
            '✨ 50,000+ Lives Transformed',
            '📚 1,420+ Scholarships Funded',
            '🏥 18,200+ Children Treated',
            '🛡️ 345 Children Protected',
            '👨‍👩‍👧 560 Families Strengthened',
            '💧 110 Water Wells Built',
          ].map((stat, i) => (
            <span key={i} className="text-white font-semibold text-lg whitespace-nowrap">
              {stat}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Programs Section with Interactive Cards */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Impact Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive initiatives addressing the most critical needs of vulnerable children and families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setActiveProgram(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div className="relative h-96 overflow-hidden bg-gray-200">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {program.stats.map((stat, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-gray-200">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between">
                    <p className="text-rose-600 font-semibold">{program.impact}</p>
                    <ChevronRight className="w-5 h-5 text-rose-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section id="impact" className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-rose-200 rounded-full -top-36 -left-36 opacity-20 animate-blob"></div>
          <div className="absolute w-72 h-72 bg-blue-200 rounded-full -bottom-36 -right-36 opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Global <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '👥', number: 50000, label: 'Lives Transformed', desc: 'Children and families empowered' },
              { icon: '🌍', number: 15, label: 'Countries', desc: 'Operating globally' },
              { icon: '💰', number: 250, label: 'Million Invested', desc: 'In child welfare' },
              { icon: '⭐', number: 98, label: 'Satisfaction Rate', desc: 'Program effectiveness' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.number} />
                  {stat.label.includes('Million') && 'M'}
                  {stat.label.includes('Rate') && '%'}
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animate-fade-in { animation: fadeIn 1s ease-in; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-4">
            Stories of <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Change</span>
          </h2>
        </div>

        <Marquee speed={60}>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-rose-50 to-blue-50 p-8 rounded-2xl shadow-lg min-w-max border border-rose-100 flex-shrink-0"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mb-3 text-lg">{testimonial.story}</p>
              <p className="text-rose-600 font-bold">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.location}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming children's lives
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-80 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 bg-white group-hover:bg-gradient-to-r group-hover:from-rose-50 group-hover:to-blue-50 transition-all duration-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-rose-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -right-48 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -left-48 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">Join Us in Making History</h2>
          <p className="text-xl text-rose-50 mb-8 max-w-2xl mx-auto">
            Every contribution transforms lives. Together, we're creating a world where every child thrives with education, health, protection, and hope.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-rose-600 px-10 py-4 rounded-lg hover:shadow-2xl font-bold text-lg flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105">
              Donate Now
              <Heart className="w-5 h-5 group-hover:fill-rose-600 transition-all" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-rose-600 font-bold text-lg transition-all duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <span className="text-2xl font-bold">ThriveKids</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming lives through education, health, protection, and family support for vulnerable children worldwide.
              </p>
            </div>

            {[
              { title: 'Programs', links: ['Education', 'Health', 'Protection', 'Family Support'] },
              { title: 'Organization', links: ['About Us', 'Team', 'Careers', 'Blog'] },
              { title: 'Resources', links: ['Annual Report', 'Transparency', 'Impact Stories', 'Donate'] },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold text-lg mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 ThriveKids Global Foundation. All rights reserved.</p>
            <div className="flex gap-6">
              {['📘', '𝕏', '💼', '📷'].map((icon, i) => (
                <a key={i} href="#" className="text-2xl hover:scale-125 transition-transform duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
