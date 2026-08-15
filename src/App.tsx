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
  ChevronDown,
  ShieldCheck,
  MapPin,
  Check
} from 'lucide-react';

// Modular Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UrgentCampaign from './components/UrgentCampaign';
import ProgramIdentities from './components/ProgramIdentities';
import TransparencyCalculator from './components/TransparencyCalculator';
import MilestoneTimeline from './components/MilestoneTimeline';
import TrustReports from './components/TrustReports';
import InteractiveMap from './components/InteractiveMap';
import ParallaxStory from './components/ParallaxStory';
import ImpactMarquee from './components/ImpactMarquee';
import StoryWall from './components/StoryWall';
import NarrativeJourney from './components/NarrativeJourney';
import SuccessFeatures from './components/SuccessFeatures';
import ToastContainer, { ToastMessage } from './components/Toast';
import AnimatedHeader from './components/AnimatedHeader';

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
  // Virtual Router Paths: 'home' | 'programs' | 'calculator' | 'timeline' | 'sponsor' | 'reports' | 'news-events' | 'gallery' | 'donate' | 'legal'
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [currentSubPath, setCurrentSubPath] = useState<string | undefined>(undefined);

  // In-app alert notification pipeline
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const triggerToast = (type: 'success' | 'warning' | 'info' | 'error', title: string, message: string) => {
    const id = `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);
  };

  const handleRemoveToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Preferred Currency
  const [currency, setCurrency] = useState<string>('USD');

  // Local Storage and Runtime Database Store
  const [programsStore] = useState<Program[]>(INITIAL_PROGRAMS);

  const [teamStore] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('tk_db_team');
    return saved ? JSON.parse(saved) : INITIAL_TEAM;
  });

  const [storiesStore] = useState<SuccessStory[]>(() => {
    const saved = localStorage.getItem('tk_db_stories');
    return saved ? JSON.parse(saved) : INITIAL_SUCCESS_STORIES;
  });

  const [newsStore] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('tk_db_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS;
  });

  const [eventsStore] = useState<FoundationEvent[]>(() => {
    const saved = localStorage.getItem('tk_db_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  const [reportsStore] = useState<NonprofitReport[]>(() => {
    const saved = localStorage.getItem('tk_db_reports');
    return saved ? JSON.parse(saved) : INITIAL_REPORTS;
  });

  // User submitted records list
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

  // State synchronization
  useEffect(() => {
    localStorage.setItem('tk_db_volunteers', JSON.stringify(volunteerRegistry));
  }, [volunteerRegistry]);

  useEffect(() => {
    localStorage.setItem('tk_db_partners', JSON.stringify(partnerRegistry));
  }, [partnerRegistry]);

  useEffect(() => {
    localStorage.setItem('tk_db_donations', JSON.stringify(donationRegistry));
  }, [donationRegistry]);

  const handleNavigate = (path: string, subPath?: string) => {
    setCurrentPath(path);
    setCurrentSubPath(subPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // General Pledge Handler
  const handlePledgeGeneral = (amount: number, note: string) => {
    const item: DonationRecord = {
      id: `dn-sub-${Date.now()}`,
      donorName: 'Generous Supporter',
      email: 'verified_rec@thrivekids.org',
      amount,
      frequency: note.toLowerCase().includes('monthly') ? 'monthly' : 'one-time',
      programId: 'general',
      isAnonymous: false,
      date: new Date().toISOString().split('T')[0]
    };
    setDonationRegistry(prev => [item, ...prev]);
    triggerToast(
      'success',
      'Pledge Recorded & Docketed',
      `${currency} ${amount} has been registered to ${note}. A confirmation receipt has been dispatched.`
    );
  };

  // Report Download handler
  const handleReportDownload = (title: string) => {
    triggerToast(
      'info',
      'Report Download Initiated',
      `"${title}" (Audited PDF) is loading. Certified under international non-profit transparency standards.`
    );
  };

  // Volunteer form state
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
    triggerToast('success', 'Application Registered', `Volunteer registration for ${volFormName} is successfully docketed.`);
    setVolFormSuccess(true);
    setTimeout(() => {
      setVolFormName('');
      setVolFormEmail('');
      setVolFormSkill([]);
      setVolFormMsg('');
      setVolFormSuccess(false);
    }, 4000);
  };

  // Partner form state
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
    triggerToast('success', 'Cooperation Inquiry Docketed', `Strategic alliance proposal from "${pFormOrg}" is dispatched to Trustees.`);
    setPFormSuccess(true);
    setTimeout(() => {
      setPFormOrg('');
      setPFormContact('');
      setPFormEmail('');
      setPFormMsg('');
      setPFormSuccess(false);
    }, 4000);
  };

  // News category filter
  const [newsFilter, setNewsFilter] = useState<string>('All');
  const filteredNews = newsFilter === 'All' 
    ? newsStore 
    : newsStore.filter(n => n.category === newsFilter);

  // Gallery filter & lightbox
  const [galleryFilter, setGalleryFilter] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const filteredGallery = galleryFilter === 'All'
    ? INITIAL_GALLERY
    : INITIAL_GALLERY.filter(gal => gal.category === galleryFilter);

  // Dedicated Donation Form State
  const [donateAmount, setDonateAmount] = useState<number>(50);
  const [donateCustom, setDonateCustom] = useState<string>('');
  const [donateFreq, setDonateFreq] = useState<'monthly' | 'one-time'>('monthly');
  const [donateSector, setDonateSector] = useState<string>('general');
  const [donateSuccess, setDonateSuccess] = useState(false);

  const handleDedicatedDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalVal = donateCustom ? parseFloat(donateCustom) : donateAmount;
    if (!finalVal || finalVal <= 0) return;

    handlePledgeGeneral(finalVal, `General Fund (${donateFreq.toUpperCase()}) - ${donateSector.toUpperCase()} allocation`);
    setDonateSuccess(true);
    setTimeout(() => {
      setDonateSuccess(false);
      setDonateCustom('');
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-stone-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white antialiased">
      
      {/* GLOBAL TOP NAVIGATION */}
      <Navbar 
        currentPath={currentPath}
        currentSubPath={currentSubPath}
        onNavigate={handleNavigate}
      />

      {/* MAIN VIEW CONTENT CONTAINER */}
      <main className="flex-grow">
        
        {/* VIEW 1: COMPLETE HOME PAGE WITH ALL NEW SECTIONS */}
        {currentPath === 'home' && (
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa]">
            
            {/* Ambient Background Blur Blobs */}
            <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[30%] right-[5%] w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[50%] left-[8%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute top-[75%] right-[10%] w-[38rem] h-[38rem] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-[5%] left-[10%] w-[32rem] h-[32rem] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* HERO BANNER */}
            <div id="hero" className="relative z-10">
              <HeroSection 
                onExplore={() => {
                  const el = document.getElementById('programs-preview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                onDonateClick={() => handleNavigate('donate')}
                onUrgentClick={() => {
                  const el = document.getElementById('urgent-appeal');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>

            {/* URGENT RELIEF CAMPAIGN */}
            <div id="urgent-appeal" className="relative z-10">
              <UrgentCampaign onPledge={handlePledgeGeneral} />
            </div>

            {/* MARQUEE METRICS TICKER */}
            <div id="marquee" className="relative z-10">
              <ImpactMarquee />
            </div>

            {/* SECTION 1: CORE OPERATIONAL SECTORS (PROGRAMS PREVIEW) */}
            <section id="programs-preview" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold">
                  MENU SECTION // 01 // CORE SECTORS
                </span>
                <div className="h-12 flex items-center justify-center">
                  <AnimatedHeader 
                    text="Strategic Focus Areas & Pillars" 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
                  />
                </div>
                <p className="max-w-2xl mx-auto text-sm text-stone-600 font-light">
                  From eco-classrooms built of recycled plastic bottles to chimpanzee sanctuaries, sports tournaments, and free cataract clinics.
                </p>
              </div>

              {/* Glassmorphic Container Wrapper */}
              <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 sm:p-10 rounded-2xl shadow-xl">
                <ProgramIdentities programs={programsStore} />
                
                <div className="pt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate('programs')}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Full Initiative Matrix</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 2: FIDUCIARY SIMULATOR (CALCULATOR PREVIEW) */}
            <section id="calculator-preview" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold">
                  MENU SECTION // 02 // DIRECT MATHEMATICAL IMPACT
                </span>
                <div className="h-12 flex items-center justify-center">
                  <AnimatedHeader 
                    text="Calculate Your Exact Impact" 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
                  />
                </div>
                <p className="max-w-xl mx-auto text-sm text-stone-600 font-light">
                  See mathematically how your contribution converts into real-world school scholarships, clinical visits, and clean water wells.
                </p>
              </div>

              {/* Solid base for interaction, wrapped with clean glassmorphic frame */}
              <div className="bg-white/40 backdrop-blur-md border border-white/60 p-4 sm:p-8 rounded-2xl shadow-xl">
                <TransparencyCalculator onPledge={handlePledgeGeneral} currency={currency} />
                
                <div className="pt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate('calculator')}
                    className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-750 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Open Dedicated Simulator</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 3: EVOLUTION TIMELINE (TIMELINE PREVIEW) */}
            <section id="timeline-preview" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold">
                  MENU SECTION // 03 // 15 YEARS OF CHRONICLES
                </span>
                <div className="h-12 flex items-center justify-center">
                  <AnimatedHeader 
                    text="15 Years of Verifiable Progress" 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
                  />
                </div>
                <p className="max-w-xl mx-auto text-sm text-stone-600 font-light">
                  Trace our historical footprint from 2011 East African drought response to our current presence across 395 global sectors.
                </p>
              </div>

              {/* Glassmorphic Timeline block */}
              <div className="bg-white/30 backdrop-blur-md border border-white/50 p-6 sm:p-10 rounded-2xl shadow-xl space-y-10">
                <MilestoneTimeline />
                
                <div className="border-t border-stone-200/50 pt-8 max-w-4xl mx-auto">
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-mono font-bold mb-4">DEEP DIVE READ</p>
                  <NarrativeJourney />
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate('timeline')}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Comprehensive Chronology</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 4: GET INVOLVED (PARTNERSHIPS PREVIEW) */}
            <section id="sponsor-preview" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold">
                  MENU SECTION // 04 // VOLUNTEER &amp; ALLIANCES
                </span>
                <div className="h-12 flex items-center justify-center">
                  <AnimatedHeader 
                    text="Get Involved &amp; Partner" 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
                  />
                </div>
                <p className="max-w-xl mx-auto text-sm text-stone-600 font-light">
                  Apply as a specialist field volunteer, or submit a corporate CSR grant cooperation proposal.
                </p>
              </div>

              {/* Glassmorphic Grid enclosing solid color forms */}
              <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 sm:p-10 rounded-2xl shadow-xl space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  
                  {/* Volunteer Box */}
                  <div className="bg-white/90 p-6 sm:p-8 rounded-xl border border-stone-200/80 shadow-md text-left space-y-5">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase">JOIN OUR FIELD SPECIALISTS</span>
                      <h4 className="text-lg font-bold text-stone-900">Volunteer Application</h4>
                    </div>

                    {volFormSuccess ? (
                      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                        <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                        <strong className="text-emerald-900 text-sm block">Volunteer Application Received</strong>
                        <p className="text-xs text-emerald-700">Safeguarding team is reviewing your details.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleRegisterVolunteerSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Your Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Dr. Sarah Jenkins"
                            value={volFormName}
                            onChange={(e) => setVolFormName(e.target.value)}
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Email Address</label>
                            <input
                              type="email"
                              required
                              placeholder="sarah@institution.org"
                              value={volFormEmail}
                              onChange={(e) => setVolFormEmail(e.target.value)}
                              className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Availability Cycle</label>
                            <select
                              value={volFormAvail}
                              onChange={(e) => setVolFormAvail(e.target.value)}
                              className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                            >
                              <option value="Part-Time (Weekends)">Part-Time (Weekends)</option>
                              <option value="Remote Digital Specialist">Remote Digital Specialist</option>
                              <option value="Field Outreach Placement">Field Outreach Placement</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Background Summary</label>
                          <textarea
                            rows={2}
                            placeholder="Detail clinical, teaching, or conservation skillsets..."
                            value={volFormMsg}
                            onChange={(e) => setVolFormMsg(e.target.value)}
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                        >
                          Submit Volunteer Dossier
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Corporate Alliance Box */}
                  <div className="bg-white/90 p-6 sm:p-8 rounded-xl border border-stone-200/80 shadow-md text-left space-y-5">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-amber-700 uppercase">INSTITUTIONAL &amp; CSR GRANTS</span>
                      <h4 className="text-lg font-bold text-stone-900">Corporate Collaboration</h4>
                    </div>

                    {pFormSuccess ? (
                      <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-center space-y-2">
                        <Check className="w-8 h-8 text-amber-600 mx-auto" />
                        <strong className="text-amber-900 text-sm block">Proposal Logged</strong>
                        <p className="text-xs text-amber-700">Partnership director will connect shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handlePartnerSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Company / Organization Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Global Horizons Trust"
                            value={pFormOrg}
                            onChange={(e) => setPFormOrg(e.target.value)}
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Contact Name</label>
                            <input
                              type="text"
                              required
                              placeholder="David Chen"
                              value={pFormContact}
                              onChange={(e) => setPFormContact(e.target.value)}
                              className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Liaison Email</label>
                            <input
                              type="email"
                              required
                              placeholder="d.chen@horizons.org"
                              value={pFormEmail}
                              onChange={(e) => setPFormEmail(e.target.value)}
                              className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Cooperation Scope</label>
                          <textarea
                            rows={2}
                            placeholder="Sponsorship fields, CSR targets, or material donations..."
                            value={pFormMsg}
                            onChange={(e) => setPFormMsg(e.target.value)}
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                        >
                          Submit Collaboration Proposal
                        </button>
                      </form>
                    )}
                  </div>

                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate('sponsor')}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore All Partnership Tracks</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 5: AUDITED PORTAL (REPORTS PREVIEW) */}
            <section id="reports-preview" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold">
                  MENU SECTION // 05 // TRANSPARENCY ARCHIVE
                </span>
                <div className="h-12 flex items-center justify-center">
                  <AnimatedHeader 
                    text="Audited Reports &amp; IRS Filings" 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
                  />
                </div>
                <p className="max-w-xl mx-auto text-sm text-stone-600 font-light">
                  Download and review certified audits, financial boards balances, and children safeguarding guidelines.
                </p>
              </div>

              {/* Glassmorphic Reports Panel */}
              <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 sm:p-10 rounded-2xl shadow-xl">
                <TrustReports reports={reportsStore} onDownload={handleReportDownload} />
                
                <div className="pt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate('reports')}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Complete Transparency Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 6: PRESS DISPATCHES & WEBMINARS (UPDATES PREVIEW) */}
            <section id="news-preview" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold">
                  MENU SECTION // 06 // PRESS LOGS &amp; EVENTS
                </span>
                <div className="h-12 flex items-center justify-center">
                  <AnimatedHeader 
                    text="Latest Field Dispatches" 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900"
                  />
                </div>
                <p className="max-w-xl mx-auto text-sm text-stone-600 font-light">
                  Active field updates, upcoming advocacy sessions, and new classroom openings.
                </p>
              </div>

              {/* Streamlined Side-by-side Glassmorphic Layout */}
              <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 sm:p-10 rounded-2xl shadow-xl text-left">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left Side: Dynamic Articles Preview */}
                  <div className="lg:col-span-7 space-y-6">
                    <h4 className="font-bold text-lg text-stone-900 border-b border-stone-200 pb-2">Active Press Articles</h4>
                    <div className="space-y-6">
                      {newsStore.slice(0, 3).map((article) => (
                        <div key={article.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                          <div className="sm:col-span-4 h-24 bg-stone-900 rounded-lg overflow-hidden relative">
                            <img src={article.image} className="w-full h-full object-cover" alt={article.title} referrerPolicy="no-referrer" />
                          </div>
                          <div className="sm:col-span-8 space-y-1">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-stone-400 uppercase font-bold">
                              <span className="text-emerald-700">{article.category}</span>
                              <span>•</span>
                              <span>{article.date}</span>
                            </div>
                            <h5 className="font-bold text-sm text-stone-900 leading-tight">
                              {article.title}
                            </h5>
                            <p className="text-xs text-stone-600 line-clamp-2">
                              {article.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Interactive Gatherings Preview */}
                  <div className="lg:col-span-5 space-y-6">
                    <h4 className="font-bold text-lg text-stone-900 border-b border-stone-200 pb-2">Advocacy Calendar</h4>
                    <div className="space-y-4">
                      {eventsStore.slice(0, 3).map((evt) => (
                        <div key={evt.id} className="p-3 bg-white/90 border border-stone-200/80 rounded-xl space-y-1.5 shadow-2xs">
                          <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase text-emerald-800">
                            <span>{evt.category}</span>
                            <span>{evt.date}</span>
                          </div>
                          <div>
                            <strong className="text-stone-950 text-xs block">{evt.title}</strong>
                            <span className="text-[11px] text-stone-500 block leading-tight">{evt.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleNavigate('news-events')}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read All Dispatches &amp; Calendar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* VIEW 2: DEDICATED PROGRAMS & FOCUS SECTORS */}
        {currentPath === 'programs' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 3: DEDICATED TRANSPARENCY CALCULATOR */}
        {currentPath === 'calculator' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 4: DEDICATED 15-YEAR TIMELINE & CHRONICLE */}
        {currentPath === 'timeline' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 5: GET INVOLVED & PARTNERSHIPS */}
        {currentPath === 'sponsor' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 6: REPORTS & TRANSPARENCY ARCHIVE */}
        {currentPath === 'reports' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 7: UPDATES, NEWS & GLOBAL GATHERINGS */}
        {currentPath === 'news-events' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 8: GALLERY & MEDIA */}
        {currentPath === 'gallery' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 9: DEDICATED DONATION & PLEDGE PORTAL */}
        {currentPath === 'donate' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

        {/* VIEW 10: LEGAL & SAFEGUARDING CHARTER */}
        {currentPath === 'legal' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">SECTION EMPTY</span>
            </div>
          </div>
        )}

      </main>

      {/* FLOATING QUICK CONTACT BAR (WHATSAPP & TIKTOK) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* WhatsApp Floating Pill */}
        <a
          href="https://wa.me/256746036194?text=Hello%20ThriveKids%20Foundation%2C%20I%20would%20like%20to%20get%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all transform hover:scale-105 font-mono text-xs font-bold tracking-wide cursor-pointer"
          title="Direct WhatsApp (+256746036194)"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp +256746036194</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </div>

      {/* TOAST NOTIFICATION CONTAINER */}
      <ToastContainer toasts={toasts} onRemove={handleRemoveToast} />

    </div>
  );
}
