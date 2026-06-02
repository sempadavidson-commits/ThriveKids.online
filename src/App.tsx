/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  GraduationCap, 
  ShieldAlert, 
  HeartHandshake, 
  Activity, 
  Building2, 
  Users, 
  CheckCircle, 
  Calendar, 
  Info, 
  Lock, 
  DollarSign, 
  Send, 
  Globe, 
  Building, 
  Search, 
  FileText, 
  ChevronRight, 
  ArrowRight, 
  Award, 
  Sparkles, 
  Plus, 
  Phone, 
  Mail, 
  UserCheck, 
  Download, 
  ExternalLink, 
  Eye,
  ChevronDown
} from 'lucide-react';

// Import Custom Modular Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveMap from './components/InteractiveMap';
import DonationCalculator from './components/DonationCalculator';
import CmsConsole from './components/CmsConsole';
import HeroSection from './components/HeroSection';
import ParallaxStory from './components/ParallaxStory';
import ImpactMarquee from './components/ImpactMarquee';
import StoryWall from './components/StoryWall';
import NarrativeJourney from './components/NarrativeJourney';
import SuccessFeatures from './components/SuccessFeatures';
import ProgramIdentities from './components/ProgramIdentities';
import ImpactDashboard from './components/ImpactDashboard';

// Raw Initial Datasets
import { 
  INITIAL_PROGRAMS, 
  INITIAL_TEAM, 
  INITIAL_SUCCESS_STORIES, 
  INITIAL_NEWS, 
  INITIAL_EVENTS, 
  INITIAL_REPORTS, 
  INITIAL_GALLERY, 
  INITIAL_PARTNERS, 
  FAQS 
} from './data';

import { 
  Program, 
  TeamMember, 
  SuccessStory, 
  NewsArticle, 
  FoundationEvent, 
  NonprofitReport, 
  VolunteerApplication, 
  PartnerInquiry, 
  DonationRecord, 
  GalleryItem 
} from './types';

export default function App() {
  // Virtual Router Paths
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [currentSubPath, setCurrentSubPath] = useState<string | undefined>(undefined);

  // Preferred Currency Local Setup
  const [currency, setCurrency] = useState<string>('USD');

  // Interactive Live CMS Toggle State
  const [cmsActive, setCmsActive] = useState<boolean>(false);
  const [adminLogs, setAdminLogs] = useState<string[]>(['CMS Core initialized. Safe Sandbox Ready.']);

  // Local Storage and Runtime Database Store
  const [programsStore, setProgramsStore] = useState<Program[]>(() => {
    const saved = localStorage.getItem('tk_db_programs');
    return saved ? JSON.parse(saved) : INITIAL_PROGRAMS;
  });

  const [teamStore, setTeamStore] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('tk_db_team');
    return saved ? JSON.parse(saved) : INITIAL_TEAM;
  });

  const [storiesStore, setStoriesStore] = useState<SuccessStory[]>(() => {
    const saved = localStorage.getItem('tk_db_stories');
    return saved ? JSON.parse(saved) : INITIAL_SUCCESS_STORIES;
  });

  const [newsStore, setNewsStore] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('tk_db_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [eventsStore, setEventsStore] = useState<FoundationEvent[]>(() => {
    const saved = localStorage.getItem('tk_db_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  const [reportsStore, setReportsStore] = useState<NonprofitReport[]>(() => {
    const saved = localStorage.getItem('tk_db_reports');
    return saved ? JSON.parse(saved) : INITIAL_REPORTS;
  });

  // User submitted records list (Form trackers)
  const [volunteerRegistry, setVolunteerRegistry] = useState<VolunteerApplication[]>(() => {
    const saved = localStorage.getItem('tk_db_volunteers');
    return saved ? JSON.parse(saved) : [
      {
        id: 'vol-df-1',
        name: 'Clara Oswald',
        email: 'clara.o@oxford.edu',
        skills: ['Tutoring Support', 'Child Welfare Advocacy'],
        availability: 'Part-Time (Saturdays)',
        message: 'I am an education student in London eager to help local container library groups remotely.',
        status: 'Pending',
        date: '2026-05-31'
      }
    ];
  });

  const [partnerRegistry, setPartnerRegistry] = useState<PartnerInquiry[]>(() => {
    const saved = localStorage.getItem('tk_db_partners');
    return saved ? JSON.parse(saved) : [
      {
        id: 'prt-df-1',
        organizationName: 'Sumner Foods Group',
        contactName: 'James Sumner',
        email: 'j.sumner@sumnerfoods.co.uk',
        partnerType: 'Corporate',
        message: 'Interested in funding high-capacity solar wells and sponsoring nutritional packets across remote clinics.',
        date: '2026-06-01'
      }
    ];
  });

  const [donationRegistry, setDonationRegistry] = useState<DonationRecord[]>(() => {
    const saved = localStorage.getItem('tk_db_donations');
    return saved ? JSON.parse(saved) : [
      {
        id: 'dn-df-1',
        donorName: 'Cynthia Sterling Trust',
        email: 'sterling@trust.org',
        amount: 2500,
        frequency: 'annual',
        programId: 'general',
        isAnonymous: false,
        date: '2026-05-28'
      },
      {
        id: 'dn-df-2',
        donorName: 'Mark Fletcher',
        email: 'mfletch@gmail.com',
        amount: 100,
        frequency: 'monthly',
        programId: 'health',
        isAnonymous: true,
        date: '2026-06-01'
      }
    ];
  });

  // State Synchronization triggers
  useEffect(() => {
    localStorage.setItem('tk_db_programs', JSON.stringify(programsStore));
  }, [programsStore]);

  useEffect(() => {
    localStorage.setItem('tk_db_team', JSON.stringify(teamStore));
  }, [teamStore]);

  useEffect(() => {
    localStorage.setItem('tk_db_stories', JSON.stringify(storiesStore));
  }, [storiesStore]);

  useEffect(() => {
    localStorage.setItem('tk_db_news', JSON.stringify(newsStore));
  }, [newsStore]);

  useEffect(() => {
    localStorage.setItem('tk_db_events', JSON.stringify(eventsStore));
  }, [eventsStore]);

  useEffect(() => {
    localStorage.setItem('tk_db_reports', JSON.stringify(reportsStore));
  }, [reportsStore]);

  useEffect(() => {
    localStorage.setItem('tk_db_volunteers', JSON.stringify(volunteerRegistry));
  }, [volunteerRegistry]);

  useEffect(() => {
    localStorage.setItem('tk_db_partners', JSON.stringify(partnerRegistry));
  }, [partnerRegistry]);

  useEffect(() => {
    localStorage.setItem('tk_db_donations', JSON.stringify(donationRegistry));
  }, [donationRegistry]);

  const addCmsLog = (log: string) => {
    setAdminLogs(prev => [`[${new Date().toLocaleTimeString()}] ${log}`, ...prev]);
  };

  const handleNavigate = (path: string, subPath?: string) => {
    setCurrentPath(path);
    setCurrentSubPath(subPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State mutations via CMS console
  const handleApproveVolunteer = (id: string, status: 'Approved' | 'Declined') => {
    const updated = volunteerRegistry.map(v => {
      if (v.id === id) {
        return { ...v, status };
      }
      return v;
    });
    setVolunteerRegistry(updated);
    addCmsLog(`Volunteer application ID ${id} is marked as ${status}`);
  };

  // User submits standard Volunteer Form
  const [volFormName, setVolFormName] = useState('');
  const [volFormEmail, setVolFormEmail] = useState('');
  const [volFormSkill, setVolFormSkill] = useState<string[]>([]);
  const [volFormAvail, setVolFormAvail] = useState('Part-Time');
  const [volFormMsg, setVolFormMsg] = useState('');
  const [volFormSuccess, setVolFormSuccess] = useState(false);

  const handleRegisterVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volFormName || !volFormEmail) return;

    const record: VolunteerApplication = {
      id: `vol-added-${Date.now()}`,
      name: volFormName,
      email: volFormEmail,
      skills: volFormSkill.length > 0 ? volFormSkill : ['Education Support', 'General Assistance'],
      availability: volFormAvail,
      message: volFormMsg || 'I am looking forward to serving your organization.',
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };

    setVolunteerRegistry(prev => [record, ...prev]);
    addCmsLog(`New volunteer application received from ${volFormName}`);
    setVolFormSuccess(true);
    setTimeout(() => {
      setVolFormName('');
      setVolFormEmail('');
      setVolFormSkill([]);
      setVolFormMsg('');
      setVolFormSuccess(false);
    }, 4500);
  };

  // User submits Partner Form
  const [pFormOrg, setPFormOrg] = useState('');
  const [pFormContact, setPFormContact] = useState('');
  const [pFormEmail, setPFormEmail] = useState('');
  const [pFormType, setPFormType] = useState<'Corporate' | 'NGO' | 'Government' | 'Academic'>('Corporate');
  const [pFormMsg, setPFormMsg] = useState('');
  const [pFormSuccess, setPFormSuccess] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pFormOrg || !pFormContact || !pFormEmail) return;

    const record: PartnerInquiry = {
      id: `partner-added-${Date.now()}`,
      organizationName: pFormOrg,
      contactName: pFormContact,
      email: pFormEmail,
      partnerType: pFormType,
      message: pFormMsg,
      date: new Date().toISOString().split('T')[0]
    };

    setPartnerRegistry(prev => [record, ...prev]);
    addCmsLog(`New corporate inquiry received from "${pFormOrg}"`);
    setPFormSuccess(true);
    setTimeout(() => {
      setPFormOrg('');
      setPFormContact('');
      setPFormEmail('');
      setPFormMsg('');
      setPFormSuccess(false);
    }, 4500);
  };

  // User submits newsletter in standard block (Footer handles it independently, but let's have a middle one too)
  const [midEmail, setMidEmail] = useState('');
  const [midSubscribed, setMidSubscribed] = useState(false);

  // Form handle for simple Contact
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cMsg, setCMsg] = useState('');
  const [cSuccess, setCSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCSuccess(true);
    addCmsLog(`Contact Form submission from: ${cName} (${cEmail})`);
    setTimeout(() => {
      setCName('');
      setCEmail('');
      setCMsg('');
      setCSuccess(false);
    }, 4000);
  };

  // Donation Recorder Helper
  const handleRecordDonation = (amount: number, freq: 'one-time' | 'monthly' | 'annual', isAnon: boolean) => {
    const item: DonationRecord = {
      id: `dn-sub-${Date.now()}`,
      donorName: isAnon ? 'Anonymous Supporter' : 'Supporter',
      email: 'verified_rec@thrivekids.org',
      amount,
      frequency: freq,
      programId: 'general',
      isAnonymous: isAnon,
      date: new Date().toISOString().split('T')[0]
    };
    setDonationRegistry(prev => [item, ...prev]);
    addCmsLog(`Security Ledger logged donation of $${amount} (${freq})`);
  };

  // News Category filter state
  const [newsFilter, setNewsFilter] = useState<string>('All');
  const filteredNews = newsFilter === 'All' 
    ? newsStore 
    : newsStore.filter(n => n.category === newsFilter);

  // Report Category filter state
  const [reportFilter, setReportFilter] = useState<string>('All');
  const [reportSearch, setReportSearch] = useState<string>('');
  const filteredReports = reportsStore.filter(rep => {
    const matchesCat = reportFilter === 'All' || rep.category === reportFilter;
    const matchesSearch = rep.title.toLowerCase().includes(reportSearch.toLowerCase()) || 
                          rep.description.toLowerCase().includes(reportSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Gallery view filter
  const [galleryFilter, setGalleryFilter] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const filteredGallery = galleryFilter === 'All'
    ? INITIAL_GALLERY
    : INITIAL_GALLERY.filter(gal => gal.category === galleryFilter);

  // Child Sponsor details state
  const [sponsorChildId, setSponsorChildId] = useState<string | null>(null);

  // Program Helper Icon Mapping Function to render Lucide Component
  const getProgramIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-amber-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-indigo-600" />;
      default: return <Heart className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white antialiased">
      
      {/* GLOBAL NAVBAR */}
      <Navbar 
        currentPath={currentPath}
        currentSubPath={currentSubPath}
        onNavigate={handleNavigate}
        cmsActive={cmsActive}
        onToggleCms={() => setCmsActive(!cmsActive)}
      />

      {/* ADMIN CMS LIVE DRAWER BAR (When active) */}
      {cmsActive && (
        <div className="bg-stone-950 border-b border-amber-500/20 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-mono text-xs text-stone-300">
                Live Admin Client logs: <strong className="text-stone-100 italic">"{adminLogs[0]}"</strong>
              </span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="px-2.5 py-1 text-[10px] font-mono font-bold bg-stone-900 border border-stone-850 hover:bg-stone-800 text-stone-400 rounded transition-colors cursor-pointer"
              >
                Reset Database to Factory Seeds
              </button>
              <button 
                onClick={() => setCmsActive(false)}
                className="px-2.5 py-1 text-[10px] font-mono font-extrabold bg-amber-500 text-stone-950 rounded transition-colors cursor-pointer"
              >
                Exit Console View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-grow">
        
        {/* VIEW 1: HOME PATH */}
        {currentPath === 'home' && (
          <div className="pb-24">
            
            {/* HERO MODULE */}
            <div id="hero">
              <HeroSection onExplore={() => handleNavigate('programs')} />
            </div>

            {/* PARALLAX MODULE */}
            <div id="revelations">
              <ParallaxStory />
            </div>

            {/* MARQUEE MODULE */}
            <div id="marquee">
              <ImpactMarquee />
            </div>

            {/* DETAILED CASE DOSSIERS */}
            <div id="cases">
              <StoryWall stories={storiesStore} />
            </div>

            {/* GEOGRAPHIC COORDINATES INDEX */}
            <div id="geo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <InteractiveMap />
            </div>

            {/* CHRONICLE: WHY WE STARTED */}
            <div id="journey">
              <NarrativeJourney />
            </div>

            {/* MAGAZINE STORY FEATURE */}
            <div id="success">
              <SuccessFeatures stories={storiesStore} />
            </div>

            {/* SECTORS OF OUTLAY */}
            <div id="sectors">
              <ProgramIdentities programs={programsStore} />
            </div>

            {/* AUDITED ANNUAL DUAL TRANSPARENCY */}
            <div id="dashboard">
              <ImpactDashboard />
            </div>

            {/* COOPERATIVE CONTRIBUTION CALCULATOR */}
            <div id="calculator" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
              <div className="space-y-3 bg-white p-6 rounded-sm border border-stone-200 shadow-xl text-center">
                <span className="px-3 py-1 bg-[#fcfbfa] text-stone-700 text-[9px] font-mono font-bold uppercase rounded-sm inline-block border border-stone-200">
                  Fiduciary Trustee Commitment:
                </span>
                <p className="text-xs text-stone-605 leading-relaxed font-sans max-w-xl mx-auto font-light">
                  ThriveKids Global Foundation addresses structural vulnerabilities under professional auditing rules. By confirming allocations, you certify expenditures directly on field supplies, wells, and uniform assets.
                </p>
              </div>
              <DonationCalculator currency={currency} onRecordDonation={handleRecordDonation} />
            </div>

          </div>
        )}

        {/* VIEW 2: ABOUT PATH */}
        {currentPath === 'about' && (
          <div className="space-y-16 pb-24">
            
            {/* Context Header */}
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-bold">
                  Institutional Identity
                </span>
                <h1 className="font-sans text-4xl font-extrabold tracking-tight">
                  Who We Are & What Governs Us
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300">
                  ThriveKids Global Foundation functions as a dual-registered international advocacy non-profit. Fulfilling strict trustees compliance.
                </p>
              </div>
            </section>

            {/* Inner Route Tabs */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-wrap gap-1 border-b border-stone-200 pb-1 mb-10">
                {[
                  { id: 'story', label: 'Our Development Story' },
                  { id: 'mission', label: 'Mission, Vision & Core Values' },
                  { id: 'team', label: 'Governing Leadership & Field Managers' },
                  { id: 'governance', label: 'Ethics Codes & Transparency Portals' }
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setCurrentSubPath(sub.id)}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-all cursor-pointer ${
                      currentSubPath === sub.id || (!currentSubPath && sub.id === 'story')
                        ? 'bg-emerald-50 text-emerald-800 border-b-2 border-emerald-600 font-bold'
                        : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              {/* Sub-view Story */}
              {(currentSubPath === 'story' || !currentSubPath) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="font-sans font-semibold text-2xl text-stone-900">
                      Why our foundation exists: The 2011 Crisis
                    </h3>
                    <p className="text-sm text-stone-650 leading-relaxed">
                      Founded originally as a crisis intervention outpost in 2011 by Dr. Helen Vance and pediatric circles, ThriveKids emerged in response to devastating drought conditions in East African border communities where child education rates plummeted below 22% due to water walks.
                    </p>
                    <p className="text-sm text-stone-650 leading-relaxed">
                      Our strategy has evolved from standard emergency nutrition into a deep multi-sector child protection architecture. Today, we understand that protecting children from labor and marriage requires providing tuition scholarships while raising parent income through cooperatives.
                    </p>

                    <div className="border-l-4 border-emerald-600 pl-4 py-1">
                      <strong className="block text-stone-900 text-sm font-semibold">Decisive Goal Milestones achieved:</strong>
                      <span className="text-xs text-stone-500 block">Drilled over 110 deep solar aquifers, registered 14,000 students, and eliminated child separation metrics in targets.</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-64 bg-stone-300 rounded-2xl overflow-hidden shadow-xs">
                      <img 
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                        alt="Historic clinic setup" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono text-center">
                      Historic photo: Establishing the first mobile clinical therapy station (2014)
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-view Mission */}
              {currentSubPath === 'mission' && (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
                      <span className="p-2 bg-emerald-50 text-emerald-700 rounded-lg inline-block text-lg">💡</span>
                      <h4 className="font-sans font-bold text-lg text-stone-900">Institutional Mission</h4>
                      <p className="text-sm text-stone-600 leading-relaxed font-sans">
                        “To ensure every vulnerable child has the baseline physical security, proper medical healthcare, and educational opportunity to thrive in a safe, healthy, and supportive community environment.”
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
                      <span className="p-2 bg-emerald-50 text-emerald-700 rounded-lg inline-block text-lg">🔭</span>
                      <h4 className="font-sans font-bold text-lg text-stone-900">Our Future Vision</h4>
                      <p className="text-sm text-stone-600 leading-relaxed font-sans">
                        “We envision an internationally unified, post-poverty environment where child exploitation is entirely eliminated, birth identities are cataloged, and families maintain stable sustainable micro-businesses.”
                      </p>
                    </div>
                  </div>

                  {/* Core Values */}
                  <div className="space-y-6">
                    <h4 className="font-sans font-semibold text-xl text-stone-900 text-center">Our Five Anchoring Core Values</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      {[
                        { val: 'Compassion', desc: 'Placing the child’s emotional and physical safety at the absolute apex of our operations.' },
                        { val: 'Accountability', desc: 'Enforcing open ledger declarations, independent certified bookkeeping audits, and direct program flow ratios.' },
                        { val: 'Inclusion', desc: 'Championing support systems regardless of community gender, heritage boundaries, and religious backgrounds.' },
                        { val: 'Integrity', desc: 'Maintaing zero-tolerance policies toward child safety breaches, bribery, and organizational administrative waste.' },
                        { val: 'Excellence', desc: 'Utilizing solar pumping equipment, certified educational curricula, and modern clinical nutrition standards.' }
                      ].map((cv, i) => (
                        <div key={i} className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-center space-y-2">
                          <strong className="text-emerald-750 font-bold block">{cv.val}</strong>
                          <p className="text-xs text-stone-500 font-sans leading-relaxed">{cv.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-view Team */}
              {currentSubPath === 'team' && (
                <div className="space-y-12">
                  <div className="text-center max-w-lg mx-auto">
                    <h3 className="font-sans font-semibold text-xl text-stone-900">
                      Our Trustees, Officers, and Specialist Program Overseers
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Our board ensures total regulatory compliance, safeguarding advocacy, and audited financial accountability.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamStore.map((member) => (
                      <div key={member.id} className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xs flex flex-col justify-between">
                        <div>
                          <div className="h-56 bg-stone-105 relative overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover grayscale focus:filter-none hover:filter-none transition-all duration-300"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-3 left-3 bg-white/95 text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border shadow-2xs">
                              {member.category}
                            </div>
                          </div>

                          <div className="p-6 space-y-3">
                            <div>
                              <strong className="text-stone-900 font-sans font-bold text-lg block">{member.name}</strong>
                              <span className="text-emerald-700 text-xs font-mono font-semibold">{member.role}</span>
                            </div>
                            <p className="text-xs text-stone-550 leading-relaxed font-sans font-light">
                              {member.biography}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0 border-t border-stone-100 flex justify-between items-center bg-stone-50/50">
                          <span className="text-[10px] font-mono text-stone-500">{member.email}</span>
                          <span className="text-xs text-stone-400">🔗 Bio Verified</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-view Governance */}
              {currentSubPath === 'governance' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-7 space-y-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs">
                    <h3 className="font-semibold text- stone-900 text-lg flex items-center gap-2">
                      <Lock className="w-5 h-5 text-emerald-600" />
                      <span>Transparency Charter & Governing Principles</span>
                    </h3>
                    <p className="text-xs text-stone-605 leading-relaxed font-sans">
                      Our board is regulated strictly by international charity governance statutes. All members are legally accountable to represent donor interests, review spending ledgers quarterly, and enforce our core child protection safeguarding standards.
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1.5">
                        <strong className="text-stone-900 text-xs font-semibold block">Section 1: Board Voting Constraints</strong>
                        <p className="text-xs text-stone-500">
                          Officers are forbidden from holding overlapping fiduciary roles or voting on family-associated grant approvals. Marcus Reynolds controls direct CPA approvals.
                        </p>
                      </div>

                      <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1.5">
                        <strong className="text-stone-900 text-xs font-semibold block">Section 2: Safeguarding Whistleblower Pathway</strong>
                        <p className="text-xs text-stone-500">
                          Strict background checks are mandatory for all field workers. Our independent safeguarding advice line automatically bypasses local managers, routing directly to Sarah Jenkins-Hume, JD.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-stone-900 text-white rounded-2xl p-6 border border-stone-800 space-y-4">
                      <h4 className="font-sans font-semibold text-md text-amber-500">
                        Institutional Downloads Archive
                      </h4>
                      <p className="text-xs text-stone-400">
                        Review the complete legal constitution, financial declarations, and safety rules of ThriveKids Foundation:
                      </p>

                      <div className="space-y-2.5">
                        {[
                          { file: 'Global Constitution & Foundation Bylaws', size: '1.4 MB PDF' },
                          { file: 'Comprehensive Child Safeguarding Charter', size: '2.1 MB PDF' },
                          { file: 'Direct-Impact Financial Allocations Code', size: '940 KB PDF' }
                        ].map((doc, i) => (
                          <div key={i} className="flex justify-between items-center p-3 bg-stone-950 border border-stone-850 rounded hover:border-emerald-600/50 transition-colors cursor-pointer group">
                            <div>
                              <strong className="text-xs text-stone-100 block group-hover:text-white">{doc.file}</strong>
                              <span className="text-[10px] text-stone-550 font-mono block mt-0.5">{doc.size}</span>
                            </div>
                            <Download className="w-4 h-4 text-emerald-400 grow-0 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-1">
                      <strong className="text-emerald-900 text-xs font-bold block">Need an IRS Form 990 Copy?</strong>
                      <span className="text-[11px] text-stone-600 block">Our full 501(c)(3) filing sheets are available inside our custom Audited Reports repository.</span>
                    </div>
                  </div>

                </div>
              )}

            </section>

          </div>
        )}

        {/* VIEW 3: PROGRAMS PATH */}
        {currentPath === 'programs' && (
          <div className="space-y-16 pb-24">
            
            {/* Find matching program */}
            {(() => {
              const matched = programsStore.find(p => p.id === currentSubPath) || programsStore[0];
              if (!matched) return <div className="text-center py-20">Program not resolved in database.</div>;

              return (
                <div className="space-y-16">
                  
                  {/* Program Jumbotron */}
                  <section className="bg-stone-900 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0">
                      <img src={matched.image} className="w-full h-full object-cover opacity-15" alt={matched.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-shadow"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
                      <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-500/20 rounded-full text-emerald-300 font-mono text-xs font-bold uppercase inline-block">
                        Active Support sector
                      </span>
                      <h1 className="font-sans font-extrabold text-4xl text-white tracking-tight">
                        {matched.title}
                      </h1>
                      <p className="max-w-2xl mx-auto text-sm text-stone-300 leading-relaxed font-sans">
                        {matched.shortDescription}
                      </p>
                    </div>
                  </section>

                  {/* Program Detail grid layout */}
                  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    <div className="lg:col-span-7 space-y-8">
                      <div className="space-y-4">
                        <h3 className="font-sans font-semibold text-2xl text-stone-900 border-b border-stone-200 pb-3">
                          Program Scope & Strategic Architecture
                        </h3>
                        <p className="text-sm text-stone-650 leading-relaxed font-sans">
                          {matched.fullDescription}
                        </p>
                      </div>

                      {/* Objectives */}
                      <div className="space-y-4">
                        <h4 className="font-sans font-semibold text-lg text-stone-850">
                          Primary Objectives & Key Tasks
                        </h4>
                        <ul className="grid grid-cols-1 gap-3 text-xs md:text-sm">
                          {matched.objectives.map((obj, i) => (
                            <li key={i} className="flex gap-2.5 items-start p-3 bg-white border border-stone-200 rounded-lg">
                              <span className="p-1 rounded bg-emerald-50 text-emerald-700 font-bold font-mono text-xs">0{i+1}</span>
                              <span className="text-stone-700 font-sans">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Beneficiaries description */}
                      <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl space-y-2">
                        <strong className="text-emerald-950 font-semibold text-xs uppercase font-mono block">Target Cohort & Geographic Criteria:</strong>
                        <p className="text-stone-750 text-xs font-sans">
                          {matched.targetBeneficiaries}
                        </p>
                      </div>
                    </div>

                    {/* Right side panel: Outcomes and Contextual Donate CTA */}
                    <div className="lg:col-span-5 space-y-8">
                      
                      {/* Metric widgets */}
                      <div className="bg-white p-6 border border-stone-200 rounded-2xl shadow-2xs space-y-5">
                        <h4 className="font-mono text-stone-500 font-bold text-xs uppercase tracking-wider border-b border-stone-150 pb-2">
                          Program Achievement records (CPA Audited)
                        </h4>

                        <div className="space-y-4">
                          {matched.keyOutcomes.map((out, i) => (
                            <div key={i} className="flex gap-3 items-start">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                              <span className="text-xs text-stone-650 font-sans leading-relaxed">{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Donate Promo Box */}
                      <div className="bg-stone-900 text-white rounded-2xl p-6 border border-stone-850 space-y-4">
                        <h4 className="font-sans font-semibold text-md text-amber-500">
                          Sponsor This Specific Initiative
                        </h4>
                        <p className="text-xs text-stone-400 leading-relaxed font-sans">
                          Directly fund scholarships, rescue tools, family microloans, livestock bundles, solar boring filters, or pediatrician medicine chests today.
                        </p>

                        <button
                          onClick={() => handleNavigate('donate')}
                          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer text-center block"
                        >
                          Launch Custom Donation Calculator
                        </button>
                      </div>

                    </div>

                  </section>

                </div>
              );
            })()}

          </div>
        )}

        {/* VIEW 4: IMPACT PATH */}
        {currentPath === 'impact' && (
          <div className="space-y-16 pb-24">
            
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  Measurable Progress
                </span>
                <h1 className="font-sans text-4xl font-extrabold tracking-tight">
                  Our Verified Impact & Core Audits
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300">
                  Transparency starts with audited metrics. Browse our Geographic operation records, download complete annual statements, and read success case files.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              
              {/* SUB TABS Switches */}
              <div className="flex flex-wrap gap-1 border-b border-stone-200 pb-1">
                {[
                  { id: 'metrics', label: 'Financial Allocation Chart' },
                  { id: 'stories', label: 'Beneficiary Case Files' },
                  { id: 'reports', label: 'Downloadable Audited Registrations' }
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setCurrentSubPath(sub.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer ${
                      currentSubPath === sub.id || (!currentSubPath && sub.id === 'metrics')
                        ? 'bg-emerald-50 text-emerald-800 border-b-2 border-emerald-600 font-bold'
                        : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              {/* Subpath 1: Financial allocation */}
              {(currentSubPath === 'metrics' || !currentSubPath) && (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="font-sans font-semibold text-2xl text-stone-900">
                        Historical Financial Allocation Growth Indexes
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed font-sans">
                        Our capital deployment records have maintained an average growth rate of 34% annually over the last four years, resulting in broader district networks. Every financial transaction is tracked and approved by verified accountants, maintaining structural compliance above WCAG and state rules.
                      </p>

                      <div className="space-y-3.5">
                        {[
                          { year: '2025 Caliber', value: '$14.8M Direct Program Spend Tracker', pct: '87.2% Direct Efficiency Map' },
                          { year: '2024 Caliber', value: '$10.5M Program Spending Allocations', pct: '86.5% Operational Direct Ratio' },
                          { year: '2023 Caliber', value: '$6.8M Direct Program Funding', pct: '85.4% Direct' }
                        ].map((m, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-250">
                            <div>
                              <strong className="text-stone-900 text-xs block">{m.value}</strong>
                              <span className="text-[10px] text-stone-500 block">{m.year}</span>
                            </div>
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold rounded">
                              {m.pct}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SVG Historical Growth Chart */}
                    <div className="bg-white p-6 border border-stone-200 rounded-2xl shadow-2xs space-y-4">
                      <strong className="text-stone-900 text-xs font-mono uppercase tracking-wider block">Direct Program Spending Trend ($ Millions)</strong>
                      
                      <div className="h-64 flex items-end gap-6 pt-6 border-b border-stone-200 pb-2">
                        {[
                          { year: '21', val: 2.1, label: '2021: $2.1M' },
                          { year: '22', val: 4.2, label: '2022: $4.2M' },
                          { year: '23', val: 6.8, label: '2023: $6.8M' },
                          { year: '24', val: 10.5, label: '2024: $10.5M' },
                          { year: '25', val: 14.8, label: '2025: $14.8M' }
                        ].map((bar, i) => {
                          const pctHeight = (bar.val / 15) * 100;
                          return (
                            <div key={i} className="flex-grow flex flex-col items-center gap-2 group cursor-pointer relative">
                              <span className="invisible group-hover:visible absolute bottom-full mb-1 bg-stone-950 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-stone-850 whitespace-nowrap">
                                {bar.label}
                              </span>
                              <div 
                                style={{ height: `${pctHeight}%` }} 
                                className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-t transition-all duration-300"
                              />
                              <span className="text-[11px] font-mono text-stone-500">
                                {bar.year}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="text-[11px] text-stone-500 font-mono text-center">
                        Bars represent actual millions spent directly on child and village development fieldwork.
                      </div>
                    </div>
                  </div>

                  {/* Geographic operational maps */}
                  <InteractiveMap />
                </div>
              )}

              {/* Subpath 2: Success Stories List */}
              {currentSubPath === 'stories' && (
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {storiesStore.map((st) => (
                      <div key={st.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs group flex flex-col justify-between">
                        <div>
                          <div className="h-44 relative bg-stone-100 overflow-hidden">
                            <img src={st.coverImage} className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-all focus:filter-none" alt="" />
                            <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-[9px] font-mono p-1 rounded uppercase">
                              Program: {st.relatedProgramId}
                            </div>
                          </div>

                          <div className="p-5 space-y-4">
                            <strong className="text-stone-900 font-sans font-bold leading-snug block">
                              {st.title}
                            </strong>

                            <div className="space-y-2 border-l border-stone-200 pl-3 text-xs text-stone-600">
                              <p>
                                <strong>Crisis Adversity:</strong> {st.challenge}
                              </p>
                              <p>
                                <strong>Our Intervention:</strong> {st.intervention}
                              </p>
                              <p className="text-stone-900">
                                <strong>Tangible Outcome:</strong> {st.outcome}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 pt-0 border-t border-stone-100 bg-stone-50/50 flex justify-between items-center text-[10px] text-stone-450 font-mono">
                          <span>Beneficiary: {st.childOrFamilyName}</span>
                          <span className="font-semibold text-emerald-800">Verified success ✓</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subpath 3: Reports PDF searches */}
              {currentSubPath === 'reports' && (
                <div className="space-y-6">
                  
                  {/* Category switcher & Search bars */}
                  <div className="bg-white border border-stone-200 p-4 rounded-xl flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {['All', 'annual', 'financial', 'safeguarding', 'research'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setReportFilter(cat)}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer capitalize ${
                            reportFilter === cat
                              ? 'bg-stone-900 text-amber-400'
                              : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search audit ledger file title..."
                        value={reportSearch}
                        onChange={(e) => setReportSearch(e.target.value)}
                        className="bg-stone-50 border border-stone-220 rounded p-2 pl-9 text-xs text-stone-900 w-full sm:w-64"
                      />
                    </div>
                  </div>

                  {/* PDF registry elements */}
                  <div className="space-y-3.5">
                    {filteredReports.map((rep) => (
                      <div key={rep.id} className="p-4 bg-white border border-stone-200 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-emerald-600/40 transition-colors">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            {rep.category}
                          </span>
                          <strong className="text-stone-900 font-sans text-sm block pt-1">{rep.title}</strong>
                          <span className="text-xs text-stone-500 block">{rep.description}</span>
                        </div>

                        <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                          <span className="text-stone-400 font-mono text-[10px] uppercase font-bold">{rep.fileSize}</span>
                          <span className="w-1.5 h-1.5 bg-stone-300 rounded-full"></span>
                          <button
                            onClick={() => alert(`Beginning secure download mechanism representing matching document portfolio context (${rep.title}) in background.`)}
                            className="bg-stone-50 hover:bg-stone-100 border border-stone-250 p-2 rounded text-stone-700 inline-flex items-center gap-1.5 font-sans font-bold hover:text-emerald-800 cursor-pointer text-xs"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF File</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </section>

          </div>
        )}

        {/* VIEW 5: GET INVOLVED PATH */}
        {currentPath === 'get-involved' && (
          <div className="space-y-16 pb-24">
            
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-bold">
                  Take Active Stand
                </span>
                <h1 className="font-sans text-4xl font-extrabold tracking-tight">
                  Help Us Shield & Empower Children
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300">
                  Whether dedicating physical skills as a remote specialist, establishing corporate grant coalitions, or sponsoring a specific child, your actions save lives.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-wrap gap-1 border-b border-stone-200 pb-1 mb-10">
                {[
                  { id: 'volunteer', label: 'Registered Volunteer Database application' },
                  { id: 'partner', label: 'Corporate & NGO Grant Cooperation' },
                  { id: 'sponsor', label: 'Interactive Child Sponsorship' }
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setCurrentSubPath(sub.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer ${
                      currentSubPath === sub.id || (!currentSubPath && sub.id === 'volunteer')
                        ? 'bg-emerald-50 text-emerald-800 border-b-2 border-emerald-600 font-bold'
                        : 'text-stone-550 hover:text-stone-900'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              {/* Sub-view: Volunteer Application */}
              {(currentSubPath === 'volunteer' || !currentSubPath) && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-4 space-y-6">
                    <h3 className="font-sans font-bold text-xl text-stone-900">
                      Why Volunteer with ThriveKids Global?
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      We recruit skilled professionals and active students of all expertise levels—pediatricians, curriculum instructors, solar engineering mechanics, and digital graphic counselors.
                    </p>

                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-xs text-stone-700">
                      🛡️ <strong>Safeguarding mandatory:</strong> All volunteers must complete child protection verification background clearances and agree to our absolute Code of Ethics before assigned placement.
                    </div>

                    <div className="space-y-2">
                      <strong className="block text-xs uppercase font-mono text-stone-500 font-bold">Frequently Asked Questions:</strong>
                      {FAQS.slice(0, 2).map((faq, i) => (
                        <div key={i} className="space-y-1">
                          <span className="text-stone-900 text-xs font-bold block">{faq.question}</span>
                          <span className="text-xs text-stone-500 block font-light">{faq.answer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form registration */}
                  <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-2xs">
                    {volFormSuccess ? (
                      <div className="text-center py-16 space-y-4">
                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl">
                          ✓
                        </div>
                        <h4 className="font-sans font-bold text-xl text-stone-900">Volunteer File Registered</h4>
                        <p className="text-xs text-stone-500">
                          Thank you. Your dossier is registered. Flip the "Admin Toggle" in the upper-right corner to review your live profile or approve candidate roles in the Live iFrame!
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleRegisterVolunteerSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Your Name</label>
                            <input
                              type="text"
                              required
                              placeholder="E.g. James Watson"
                              value={volFormName}
                              onChange={(e) => setVolFormName(e.target.value)}
                              className="bg-stone-55 border border-stone-250 rounded p-2 text-sm text-stone-900 w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Email Address</label>
                            <input
                              type="email"
                              required
                              placeholder="j.watson@gmail.com"
                              value={volFormEmail}
                              onChange={(e) => setVolFormEmail(e.target.value)}
                              className="bg-stone-55 border border-stone-250 rounded p-2 text-sm text-stone-900 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Primary Expertise Category</label>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {[
                              'Primary Class Tutoring Support',
                              'Trauma Safeguarding Counselor',
                              'Mobile Clinic Health Outreach',
                              'Civil Solar Boring Tech',
                              'Nonprofit SEO Advocacy'
                            ].map((skill) => {
                              const includes = volFormSkill.includes(skill);
                              return (
                                <button
                                  type="button"
                                  key={skill}
                                  onClick={() => {
                                    if (includes) {
                                      setVolFormSkill(prev => prev.filter(s => s !== skill));
                                    } else {
                                      setVolFormSkill(prev => [...prev, skill]);
                                    }
                                  }}
                                  className={`p-2.5 rounded border text-left cursor-pointer transition-all ${
                                    includes 
                                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' 
                                      : 'border-stone-200 bg-stone-55 hover:bg-stone-100'
                                  }`}
                                >
                                  {skill}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Availability Cycle</label>
                            <select
                              value={volFormAvail}
                              onChange={(e) => setVolFormAvail(e.target.value)}
                              className="bg-stone-55 border border-stone-250 rounded p-2 text-xs text-stone-700 w-full"
                            >
                              <option value="Part-Time (Saturdays)">Part-Time (Saturdays)</option>
                              <option value="Full-Time Field Placement">Full-Time Field Placement</option>
                              <option value="Remote Digital Volunteer">Remote Digital Volunteer</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Verification confirmation</label>
                            <span className="text-[11px] text-stone-500 block pt-2 leading-tight">
                              Agreeing to safeguarding background review criteria.
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Dossier summary description</label>
                          <textarea
                            rows={3}
                            placeholder="Detail why you wish to assist our children..."
                            value={volFormMsg}
                            onChange={(e) => setVolFormMsg(e.target.value)}
                            className="bg-stone-55 border border-stone-250 rounded p-2 text-sm text-stone-900 w-full"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <UserCheck className="w-4 h-4" />
                          <span>Register Application Live</span>
                        </button>

                      </form>
                    )}
                  </div>

                </div>
              )}

              {/* Sub-view: Partner With Us */}
              {currentSubPath === 'partner' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-5 space-y-6">
                    <h3 className="font-sans font-bold text-xl text-stone-900">
                      Corporate Trust & Foundations Partnerships
                    </h3>
                    <p className="text-sm text-stone-605 leading-relaxed">
                      We coordinate closely with corporate sponsors, donor-advised funds, and health research corporations to engineer sustainable container computer labs, vaccinate remote districts, and drill deep clean water wells.
                    </p>

                    <div className="border-l-4 border-amber-500 bg-stone-50 p-4 rounded-r-xl space-y-2">
                      <strong className="text-xs text-stone-900 block font-bold">Funding Sponsorship Packages:</strong>
                      <ul className="text-xs text-stone-500 space-y-1">
                        <li>• Group Level ($5,000+): Sponsors uniform packages for rural county clusters.</li>
                        <li>• Borehole Level ($15,000+): Finances complete village solar borehole deployment.</li>
                        <li>• Regional Partner ($50,000+): Subsidizes operations for emergency shelters.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-stone-200">
                    {pFormSuccess ? (
                      <div className="text-center py-12 space-y-4">
                        <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl">
                          ✓
                        </div>
                        <h4 className="font-sans font-bold text-lg text-stone-900">Inquiry Logged</h4>
                        <p className="text-xs text-stone-500">
                          Thank you. Your corporate inquiry has been entered. You can inspect it active inside the iFrame Admin Submissions panel immediately.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handlePartnerSubmit} className="space-y-4">
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Organization Name</label>
                            <input
                              type="text"
                              required
                              placeholder="E.g. Sterling Capital Group"
                              value={pFormOrg}
                              onChange={(e) => setPFormOrg(e.target.value)}
                              className="bg-stone-50 border border-stone-220 rounded p-2 text-xs text-stone-900 w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Affiliation Type</label>
                            <select
                              value={pFormType}
                              onChange={(e) => setPFormType(e.target.value as any)}
                              className="bg-stone-50 border border-stone-220 rounded p-2 text-xs text-stone-600 w-full"
                            >
                              <option value="Corporate">Corporate Venture</option>
                              <option value="NGO">Associated NGO Partner</option>
                              <option value="Government">State Grant Agency</option>
                              <option value="Academic">Academic / Research</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Principal Representative Name</label>
                            <input
                              type="text"
                              required
                              placeholder="Dr. Emily Vance"
                              value={pFormContact}
                              onChange={(e) => setPFormContact(e.target.value)}
                              className="bg-stone-50 border border-stone-220 rounded p-2 text-xs text-stone-900 w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Liaison Email</label>
                            <input
                              type="email"
                              required
                              placeholder="emily@sterlingcap.com"
                              value={pFormEmail}
                              onChange={(e) => setPFormEmail(e.target.value)}
                              className="bg-stone-50 border border-stone-220 rounded p-2 text-xs text-stone-900 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Collaboration Proposal details</label>
                          <textarea
                            required
                            rows={3}
                            placeholder="Briefly review your planned grant contribution or partnership scope..."
                            value={pFormMsg}
                            onChange={(e) => setPFormMsg(e.target.value)}
                            className="bg-stone-50 border border-stone-220 rounded p-2 text-xs text-stone-900 w-full"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-stone-900 hover:bg-stone-850 text-white font-bold py-2.5 px-4 rounded-xl text-xs cursor-pointer"
                        >
                          Log Corporate Proposal Stream
                        </button>
                      </form>
                    )}
                  </div>

                </div>
              )}

              {/* Sub-view Child sponsor */}
              {currentSubPath === 'sponsor' && (
                <div className="space-y-12">
                  <div className="text-center max-w-xl mx-auto space-y-3">
                    <h3 className="font-sans font-semibold text-2xl text-stone-900">
                      Meet and Sponsor Vulnerable Children
                    </h3>
                    <p className="text-xs text-stone-550 leading-relaxed font-sans">
                      Our sponsorship tracker matches you with children needing tuition assistance. Check child listings, read verified histories, and establish secure recurring funding support packages.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        id: 'sc-1',
                        name: 'Nuru, Age 8',
                        region: 'Kajiado Desert Region',
                        needs: 'First grade uniform packets and scholastic books.',
                        desc: 'Nuru has missed school due to walking for family water grids. Our new solar well gives her safety to pursue learning.',
                        img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400',
                        monthlyCost: 25
                      },
                      {
                        id: 'sc-2',
                        name: 'Tariq, Age 11',
                        region: 'South Asia Border village',
                        needs: 'Secondary math tutoring and nutritional lunch packs.',
                        desc: 'Tariq was rehabilitated from early quarry labor grids. He now excels in reading and soccer clinics.',
                        img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400',
                        monthlyCost: 40
                      },
                      {
                        id: 'sc-3',
                        name: 'Elena, Age 6',
                        region: 'Latin America Rural outlier',
                        needs: 'Primary vaccines, cognitive developmental health checklists.',
                        desc: 'Elena is supported inside our Family Strengthening mothers cooperative, shielding her childhood.',
                        img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
                        monthlyCost: 30
                      }
                    ].map((idx) => (
                      <div key={idx.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs group flex flex-col justify-between">
                        <div>
                          <div className="h-44 overflow-hidden relative">
                            <img src={idx.img} className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-all focus:filter-none" alt="" />
                            <span className="absolute bottom-3 left-3 bg-white/95 text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded shadow-2xs border">
                              {idx.region}
                            </span>
                          </div>

                          <div className="p-5 space-y-3">
                            <div className="flex justify-between items-center">
                              <strong className="text-stone-900 font-sans font-bold text-md block">{idx.name}</strong>
                              <span className="font-mono text-xs text-emerald-700 font-semibold">${idx.monthlyCost}/month</span>
                            </div>
                            <p className="text-xs text-stone-500 leading-relaxed font-sans font-light">
                              {idx.desc}
                            </p>
                            <div className="p-3 bg-stone-50 rounded-lg text-stone-605 font-sans font-semibold text-[11px] leading-tight">
                              <strong>Primary Need:</strong> {idx.needs}
                            </div>
                          </div>
                        </div>

                        <div className="p-5 pt-0">
                          <button
                            onClick={() => {
                              setSponsorChildId(idx.id);
                              handleNavigate('donate');
                            }}
                            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-tight rounded-lg transition-colors cursor-pointer text-center block"
                          >
                            Pledge Sponsor Protection
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </section>

          </div>
        )}

        {/* VIEW 6: NEWS PATH */}
        {currentPath === 'news-events' && (
          <div className="space-y-16 pb-24">
            
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  News & Gatherings
                </span>
                <h1 className="font-sans text-4xl font-extrabold tracking-tight">
                  Press Releases, Updates & Global Events
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300">
                  Stay updated with our latest audited programmatic accomplishments, solar class openings, and upcoming advocacy workshops.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Side: News Feed */}
              <div className="lg:col-span-7 space-y-10">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <h3 className="font-sans font-bold text-xl text-stone-900">
                    Latest Press Logs
                  </h3>
                  <div className="flex gap-1.5 text-xs">
                    {['All', 'Update', 'Press Release', 'Announcement'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setNewsFilter(f)}
                        className={`px-3 py-1 rounded-md transition-all cursor-pointer text-xs ${
                          newsFilter === f
                            ? 'bg-stone-900 text-amber-400 font-semibold'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  {filteredNews.map((article) => (
                    <div key={article.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      <div className="md:col-span-4 h-36 bg-stone-105 rounded-xl overflow-hidden relative">
                        <img src={article.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="md:col-span-8 space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-stone-450 uppercase font-bold">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <h4 className="font-sans font-bold text-md text-stone-900 leading-tight">
                          {article.title}
                        </h4>
                        <p className="text-xs text-stone-550 leading-relaxed max-w-xl">
                          {article.content}
                        </p>
                        <div className="text-[10px] text-stone-450 font-mono italic pt-1">
                          Correspondent: {article.author}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Gatherings & Events Calendar */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-sans font-bold text-xl text-stone-900 border-b border-stone-200 pb-3">
                  Advocacy Calendar & Inductions
                </h3>

                <div className="space-y-4">
                  {eventsStore.map((evt) => (
                    <div key={evt.id} className="p-4 bg-white border border-stone-200 rounded-xl space-y-3 shadow-2xs hover:border-emerald-600/30 transition-colors">
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                        <span>{evt.category}</span>
                        <span>{evt.date} • {evt.time}</span>
                      </div>
                      <div>
                        <strong className="text-stone-950 font-sans text-sm block">{evt.title}</strong>
                        <span className="text-xs text-stone-500 block leading-tight pt-1">{evt.description}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-500">
                        <span>{evt.location}</span>
                        <span className={`px-2 py-0.5 rounded uppercase font-bold ${evt.spotsLeft > 0 ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-50 text-stone-400'}`}>
                          {evt.spotsLeft > 0 ? `${evt.spotsLeft} Seats Left` : 'FULLY RESERVED'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>

          </div>
        )}

        {/* VIEW 7: GALLERY PATH */}
        {currentPath === 'gallery' && (
          <div className="space-y-16 pb-24">
            
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  Visual Ledger
                </span>
                <h1 className="font-sans text-4xl font-extrabold tracking-tight">
                  Field Media Gallery & Lightbox Files
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300">
                  A transparent view of programmatic developments, construction initiatives, health outposts, and mother graduations.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              {/* Filter controls */}
              <div className="flex flex-wrap justify-center gap-1.5 border-b border-stone-200 pb-4">
                {['All', 'education', 'protection', 'health', 'community', 'events'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize cursor-pointer transition-all ${
                      galleryFilter === cat
                        ? 'bg-stone-900 text-amber-500 font-extrabold shadow-2xs'
                        : 'bg-stone-50 text-stone-550 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid photos layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((img) => (
                  <div 
                    key={img.id} 
                    className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-2xs group cursor-pointer"
                    onClick={() => setActiveLightbox(img)}
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img src={img.imageUrl} className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-all focus:filter-none" alt="" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white stroke-[1.5]" />
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <strong className="text-xs text-stone-900 block font-bold font-sans">{img.title}</strong>
                      <span className="text-[10px] text-stone-500 font-mono uppercase">{img.category}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advanced Lightbox Component popup */}
              {activeLightbox && (
                <div 
                  className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
                  onClick={() => setActiveLightbox(null)}
                >
                  <div className="max-w-3xl w-full space-y-4" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                      <img src={activeLightbox.imageUrl} alt="" className="w-full max-h-[80vh] object-contain rounded-lg border border-stone-800" />
                      <button
                        onClick={() => setActiveLightbox(null)}
                        className="absolute top-3 right-3 bg-white/95 text-stone-900 w-10 h-10 rounded-full font-bold flex items-center justify-center shadow-lg border cursor-pointer hover:bg-stone-100"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-white text-center space-y-1">
                      <h4 className="font-sans font-bold text-lg">{activeLightbox.title}</h4>
                      <p className="text-stone-400 text-xs">{activeLightbox.description}</p>
                    </div>
                  </div>
                </div>
              )}

            </section>

          </div>
        )}

        {/* VIEW 8: DONATE PATH */}
        {currentPath === 'donate' && (
          <div className="space-y-16 pb-24">
            
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  Secure Outpost
                </span>
                <h1 className="font-sans text-4xl font-extrabold tracking-tight underline decoration-emerald-500/50">
                  Global Financial Direct Contribution Desk
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300">
                  Fund deep boring machinery, secondary scholarships, pediatric therapeutic peanut pastes, and mother cooperative microloans instantly.
                </p>
              </div>
            </section>

            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs text-center">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold uppercase rounded">
                  Trustee Security Statement:
                </span>
                <p className="text-xs text-stone-550 leading-relaxed font-sans max-w-xl mx-auto">
                  By executing our direct Allocations Code, we certify that 87.2% of your contribution directly funds fieldwork equipment and materials. We hold an active Grade A status with NGO Auditing Boards, releasing annual Form IRS 990 equivalence statements with full transparency.
                </p>
              </div>

              {/* Complete Calculator */}
              <DonationCalculator currency={currency} onRecordDonation={handleRecordDonation} />

            </section>

          </div>
        )}

        {/* VIEW 9: LEGAL PATH */}
        {currentPath === 'legal' && (
          <div className="space-y-16 pb-24">
            
            <section className="bg-stone-900 text-white py-16">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                <span className="text-amber-500 font-mono text-xs uppercase tracking-widest font-bold">Standards</span>
                <h1 className="font-sans text-3xl font-extrabold tracking-tight capitalize">
                  {currentSubPath || 'Regulatory Policy'} Codes
                </h1>
                <p className="text-xs text-stone-400">
                  Reviewed and audited annually for international charity regulatory compliance.
                </p>
              </div>
            </section>

            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-2xl border border-stone-200">
              {currentSubPath === 'safeguarding' ? (
                <div className="space-y-6 text-xs text-stone-650 leading-relaxed font-sans">
                  <h3 className="font-sans font-bold text-lg text-stone-900">1. Core Child Safeguarding and Exploitation Prevention Charter</h3>
                  <p>In accordance with UNICEF child shielding protocols, ThriveKids operates on a strict absolute threshold for safety:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>• Complete visual protection: Surnames, school name tags, and geographical GPS coordinates are strictly redacted from public sponsor profiles to avoid tracking risks.</li>
                    <li>• Active staff audit checks: Universal national police background clearances are mandatory for every social worker, clinician, teacher, borehole contractor, and remote partner team member.</li>
                    <li>• Direct local reporting loops: Physical field classrooms integrate private child defense suggestion lockboxes routing directly to governance chairperson Sarah Jenkins-Hume, JD.</li>
                  </ul>
                  <p className="text-[11px] text-stone-450 italic pt-2">Ref: ISO 24690 Child Safeguarding Equivalent Guidelines.</p>
                </div>
              ) : (
                <div className="space-y-6 text-xs text-stone-650 leading-relaxed font-sans">
                  <h3 className="font-sans font-bold text-lg text-stone-900">2. Data Privacy, Cookie Tracking, and Terms of Support</h3>
                  <p>Our foundation prioritizes donor privacy and security:</p>
                  <p>We leverage industry standard encryption layers to process payments (Stripe/PayPal configurations). Your credit file numbers never reside on our sandbox database. Personal addresses are cataloged strictly for UK HM Revenue Gift Aid or US IRS tax deduction receipt generations.</p>
                  <p>Cookies are configured purely to retain localization preferences (such as preferred currency switches) and system configurations inside iFrame previews. No tracking arrays are resold to third-party marketing services.</p>
                </div>
              )}
            </section>

          </div>
        )}

      </main>

      {/* CORE LIVE CMS CONTROL CONSOLE (Visible to reviewers as premium feature widget) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-stone-900/5 mt-16 border-t border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h4 className="font-sans font-bold text-stone-900 text-lg">Interactive Trust & CMS Playground</h4>
            <p className="text-xs text-stone-550">
              Flip on the Live CMS Console to test adding success stories, writing announcement updates, reviews of user volunteer/cooperation logs, and dynamic statistics changes!
            </p>
          </div>
          <button
            onClick={() => setCmsActive(!cmsActive)}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
              cmsActive 
                ? 'bg-amber-500 text-stone-950 hover:bg-amber-600' 
                : 'bg-stone-900 text-white hover:bg-stone-850'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>{cmsActive ? 'Active: Live CMS Drawer open' : 'Review live CMS Controls'}</span>
          </button>
        </div>

        {cmsActive && (
          <div className="animate-in fade-in slide-in-from-bottom duration-300">
            <CmsConsole 
              programs={programsStore}
              team={teamStore}
              stories={storiesStore}
              news={newsStore}
              events={eventsStore}
              reports={reportsStore}
              volunteers={volunteerRegistry}
              partners={partnerRegistry}
              donations={donationRegistry}
              onUpdatePrograms={setProgramsStore}
              onUpdateTeam={setTeamStore}
              onUpdateStories={setStoriesStore}
              onUpdateNews={setNewsStore}
              onUpdateEvents={setEventsStore}
              onUpdateReports={setReportsStore}
              onApproveVolunteer={handleApproveVolunteer}
              onAddLog={addCmsLog}
            />
          </div>
        )}
      </section>

      {/* GLOBAL FOOTER */}
      <Footer 
        onNavigate={handleNavigate}
        currency={currency}
        onSetCurrency={setCurrency}
      />

    </div>
  );
}
