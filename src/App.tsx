import React, { useState } from 'react';
import { Menu, X, Heart, Users, Zap, Target, ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  impact: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ImpactStat {
  number: string;
  label: string;
  description: string;
}

const programs: Program[] = [
  {
    id: 'education',
    title: 'Education Support',
    description: 'Providing scholarships, school supplies, and literacy programs to empower children through quality education.',
    icon: <Target className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
    impact: '1,420+ children reached'
  },
  {
    id: 'health',
    title: 'Health & Nutrition',
    description: 'Fighting malnutrition and disease through mobile clinics, immunization programs, and nutrition support.',
    icon: <Heart className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600',
    impact: '18,200+ children treated'
  },
  {
    id: 'protection',
    title: 'Child Protection',
    description: 'Rescuing vulnerable children from abuse, trafficking, and exploitation through hotlines and safe havens.',
    icon: <Zap className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=600',
    impact: '345 children rescued'
  },
  {
    id: 'family',
    title: 'Family Strengthening',
    description: 'Empowering families with microloans, vocational training, and social support to break poverty cycles.',
    icon: <Users className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600',
    impact: '560 families supported'
  }
];

const impactStats: ImpactStat[] = [
  {
    number: '50K+',
    label: 'Lives Transformed',
    description: 'Children and families empowered through our programs'
  },
  {
    number: '15+',
    label: 'Countries',
    description: 'Operating across Africa, Asia, and beyond'
  },
  {
    number: '300+',
    label: 'Team Members',
    description: 'Dedicated professionals and local partners'
  },
  {
    number: '25+',
    label: 'Years',
    description: 'Of experience in child welfare and community development'
  }
];

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Helen Vance, PhD',
    role: 'Executive Director & Co-Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Marcus Reynolds, CPA',
    role: 'Chief Program & Financial Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Ambassador Daniel K. Choi',
    role: 'Chairperson of the Board',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Sarah Jenkins-Hume, JD',
    role: 'Chair of Governance & Safeguarding',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white font-roboto" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-rose-600" />
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Roboto, sans-serif' }}>ThriveKids</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              <a href="#programs" className="text-gray-700 hover:text-rose-600 font-medium text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-rose-600 font-medium text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>Impact</a>
              <a href="#team" className="text-gray-700 hover:text-rose-600 font-medium text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>Team</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-600 font-medium text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>Contact</a>
            </div>

            <button className="hidden md:block bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 font-medium text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Donate
            </button>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <a href="#programs" className="block py-2 text-gray-700 hover:text-rose-600" style={{ fontFamily: 'Roboto, sans-serif' }}>Programs</a>
              <a href="#impact" className="block py-2 text-gray-700 hover:text-rose-600" style={{ fontFamily: 'Roboto, sans-serif' }}>Impact</a>
              <a href="#team" className="block py-2 text-gray-700 hover:text-rose-600" style={{ fontFamily: 'Roboto, sans-serif' }}>Team</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-rose-600" style={{ fontFamily: 'Roboto, sans-serif' }}>Contact</a>
              <button className="w-full mt-4 bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Donate
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Empowering Children, <span className="text-rose-600">Transforming Futures</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                ThriveKids Global Foundation works to provide vulnerable children with education, healthcare, protection, and family support. Together, we're breaking cycles of poverty and creating lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 font-semibold flex items-center justify-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Make a Difference <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:border-rose-600 hover:text-rose-600 font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1469571486292-0ba58e3f068b?auto=format&fit=crop&q=80&w=600"
                alt="Children learning"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Comprehensive initiatives designed to address the most critical needs of vulnerable children and families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-rose-600 mb-3">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {program.description}
                  </p>
                  <p className="text-rose-600 font-semibold text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {program.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Our Global Impact
            </h2>
            <p className="text-lg text-blue-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Measurable change in the lives of children and families worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {stat.number}
                </p>
                <p className="text-xl font-semibold mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {stat.label}
                </p>
                <p className="text-blue-100 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Experienced professionals dedicated to creating lasting change for vulnerable children
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-medium text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Every contribution, no matter the size, helps us provide education, healthcare, protection, and family support to vulnerable children worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Donate Now
            </button>
            <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:border-rose-600 hover:text-rose-600 font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-rose-600" />
                <span className="text-lg font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>ThriveKids</span>
              </div>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Empowering children and families through education, health, protection, and community development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#programs" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Programs</a></li>
                <li><a href="#impact" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Impact</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Stories</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Annual Report</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Transparency</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-600 transition" style={{ fontFamily: 'Roboto, sans-serif' }}>Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span style={{ fontFamily: 'Roboto, sans-serif' }}>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span style={{ fontFamily: 'Roboto, sans-serif' }}>info@thrivekids.org</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span style={{ fontFamily: 'Roboto, sans-serif' }}>Global Office</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                © 2024 ThriveKids Global Foundation. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-rose-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-600 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
