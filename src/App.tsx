/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
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
import CeoProfileSection from './components/CeoProfileSection';
import CommunityAssetsGallery from './components/CommunityAssetsGallery';
import FadeInSection from './components/FadeInSection';
import UrgentCampaign from './components/UrgentCampaign';
import ProgramIdentities from './components/ProgramIdentities';
import TransparencyCalculator from './components/TransparencyCalculator';
import MilestoneTimeline from './components/MilestoneTimeline';
import TrustReports from './components/TrustReports';
import InteractiveMap from './components/InteractiveMap';
import ParallaxStory from './components/ParallaxStory';
import ImpactMarquee from './components/ImpactMarquee';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StoryWall from './components/StoryWall';
import NarrativeJourney from './components/NarrativeJourney';
import SuccessFeatures from './components/SuccessFeatures';
import ToastContainer, { ToastMessage } from './components/Toast';
import AnimatedHeader from './components/AnimatedHeader';
import { safeGetItem, safeSetItem, safeParseJson } from './utils/storage';

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

  const triggerToast = useCallback((type: 'success' | 'warning' | 'info' | 'error', title: string, message: string) => {
    const id = `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);
  }, []);

  const handleRemoveToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Preferred Currency
  const [currency, setCurrency] = useState<string>('USD');

  // Local Storage and Runtime Database Store
  const [programsStore] = useState<Program[]>(INITIAL_PROGRAMS);

  const [teamStore] = useState<TeamMember[]>(() => {
    return safeParseJson<TeamMember[]>(safeGetItem('tk_db_team'), INITIAL_TEAM);
  });

  const [storiesStore] = useState<SuccessStory[]>(() => {
    return safeParseJson<SuccessStory[]>(safeGetItem('tk_db_stories'), INITIAL_SUCCESS_STORIES);
  });

  const [newsStore] = useState<NewsArticle[]>(() => {
    return safeParseJson<NewsArticle[]>(safeGetItem('tk_db_news'), INITIAL_NEWS);
  });

  const [eventsStore] = useState<FoundationEvent[]>(() => {
    return safeParseJson<FoundationEvent[]>(safeGetItem('tk_db_events'), INITIAL_EVENTS);
  });

  const [reportsStore] = useState<NonprofitReport[]>(() => {
    return safeParseJson<NonprofitReport[]>(safeGetItem('tk_db_reports'), INITIAL_REPORTS);
  });

  // User submitted records list
  const [volunteerRegistry, setVolunteerRegistry] = useState<VolunteerApplication[]>(() => {
    return safeParseJson<VolunteerApplication[]>(safeGetItem('tk_db_volunteers'), [
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
    ]);
  });

  const [partnerRegistry, setPartnerRegistry] = useState<PartnerInquiry[]>(() => {
    return safeParseJson<PartnerInquiry[]>(safeGetItem('tk_db_partners'), [
      {
        id: 'prt-df-1',
        organizationName: 'Sumner Foods Group',
        contactName: 'James Sumner',
        email: 'j.sumner@sumnerfoods.co.uk',
        partnerType: 'Corporate',
        message: 'Interested in funding high-capacity solar wells and sponsoring nutritional packets across remote clinics.',
        date: '2026-06-01'
      }
    ]);
  });

  const [donationRegistry, setDonationRegistry] = useState<DonationRecord[]>(() => {
    return safeParseJson<DonationRecord[]>(safeGetItem('tk_db_donations'), [
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
    ]);
  });

  // State synchronization
  useEffect(() => {
    safeSetItem('tk_db_volunteers', JSON.stringify(volunteerRegistry));
  }, [volunteerRegistry]);

  useEffect(() => {
    safeSetItem('tk_db_partners', JSON.stringify(partnerRegistry));
  }, [partnerRegistry]);

  useEffect(() => {
    safeSetItem('tk_db_donations', JSON.stringify(donationRegistry));
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

    handlePledgeGeneral(finalVal, `General Fund (${donateFreq.toUpperCase()}): ${donateSector.toUpperCase()} allocation`);
    setDonateSuccess(true);
    setTimeout(() => {
      setDonateSuccess(false);
      setDonateCustom('');
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] dark:bg-[#0c0a09] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white antialiased transition-colors duration-300">
      
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
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa] dark:bg-[#0c0a09] transition-colors duration-300">
            
            {/* Ambient Background Blur Blobs */}
            <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[30%] right-[5%] w-[40rem] h-[40rem] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[50%] left-[8%] w-[30rem] h-[30rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute top-[75%] right-[10%] w-[38rem] h-[38rem] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-[5%] left-[10%] w-[32rem] h-[32rem] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* HERO BANNER */}
            <FadeInSection id="hero" className="relative z-10" direction="none">
              <HeroSection 
                onExplore={() => {
                  const el = document.getElementById('community-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
              />
            </FadeInSection>

            {/* COMMUNITY ASSETS SHOWCASE */}
            <FadeInSection id="community-gallery" className="relative z-10" delayMs={50}>
              <CommunityAssetsGallery />
            </FadeInSection>

            {/* CEO LEADERSHIP */}
            <FadeInSection id="ceo-story" className="relative z-10" delayMs={100}>
              <CeoProfileSection 
                onExplorePrograms={() => handleNavigate('programs')}
              />
            </FadeInSection>

            {/* INTERACTIVE ANIMATED GLOBAL IMPACT MAP */}
            <FadeInSection id="impact-map" className="relative z-10">
              <InteractiveMap />
            </FadeInSection>

            {/* MARQUEE METRICS TICKER */}
            <FadeInSection id="marquee" className="relative z-10" delayMs={100}>
              <ImpactMarquee />
            </FadeInSection>

            {/* TRANSPARENCY & ALLOCATION ACCORDION FAQ */}
            <FadeInSection id="faq" className="relative z-10" delayMs={100}>
              <FaqSection />
            </FadeInSection>

          </div>
        )}

        {/* VIEW 2: DEDICATED PROGRAMS & FOCUS SECTORS */}
        {currentPath === 'programs' && (
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa] dark:bg-[#0c0a09] transition-colors duration-300">
            <FadeInSection>
              <ProgramIdentities programs={programsStore} />
            </FadeInSection>
            <FadeInSection delayMs={100}>
              <SuccessFeatures stories={storiesStore} />
            </FadeInSection>
          </div>
        )}

        {/* VIEW 3: DEDICATED TRANSPARENCY CALCULATOR */}
        {currentPath === 'calculator' && (
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa] dark:bg-[#0c0a09] transition-colors duration-300">
            <FadeInSection>
              <TransparencyCalculator onPledge={handlePledgeGeneral} currency={currency} />
            </FadeInSection>
            <FadeInSection delayMs={100}>
              <FaqSection />
            </FadeInSection>
          </div>
        )}

        {/* VIEW 4: DEDICATED 15-YEAR TIMELINE & CHRONICLE */}
        {currentPath === 'timeline' && (
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa] dark:bg-[#0c0a09] transition-colors duration-300">
            <FadeInSection>
              <MilestoneTimeline />
            </FadeInSection>
            <FadeInSection delayMs={100}>
              <NarrativeJourney />
            </FadeInSection>
          </div>
        )}

        {/* VIEW 5: GET INVOLVED & PARTNERSHIPS */}
        {currentPath === 'sponsor' && (
          <div className="py-16 sm:py-24 px-6 lg:px-12 max-w-6xl mx-auto space-y-16">
            <FadeInSection>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                  COMMUNITY ALLIANCE &amp; SERVICE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                  Join Our Grassroots Movement
                </h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light">
                  Whether offering professional skills on the ground or establishing a strategic institutional partnership, your dedication directly shields vulnerable youth.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Volunteer Registration Card */}
              <FadeInSection delayMs={50}>
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      INDIVIDUAL ADVOCACY
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                      Volunteer Application
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      Join our field mentors, teachers, and medical support volunteers.
                    </p>
                  </div>

                  <form onSubmit={handleRegisterVolunteerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={volFormName}
                        onChange={(e) => setVolFormName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={volFormEmail}
                        onChange={(e) => setVolFormEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Availability
                      </label>
                      <select
                        value={volFormAvail}
                        onChange={(e) => setVolFormAvail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Part-Time">Part-Time (Weekends / Evenings)</option>
                        <option value="Full-Time">Full-Time (Field Residency)</option>
                        <option value="Remote">Remote Skill Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Message or Skills
                      </label>
                      <textarea
                        rows={3}
                        value={volFormMsg}
                        onChange={(e) => setVolFormMsg(e.target.value)}
                        placeholder="Tell us about your background or motivation..."
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {volFormSuccess ? 'Application Submitted!' : 'Submit Volunteer Application'}
                    </button>
                  </form>
                </div>
              </FadeInSection>

              {/* Partner Inquiry Card */}
              <FadeInSection delayMs={100}>
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      STRATEGIC ALLIANCE
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                      Corporate &amp; NGO Partnership
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      Co-develop certified community impact initiatives and CSR programs.
                    </p>
                  </div>

                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        required
                        value={pFormOrg}
                        onChange={(e) => setPFormOrg(e.target.value)}
                        placeholder="e.g. Global Tech Foundation"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        required
                        value={pFormContact}
                        onChange={(e) => setPFormContact(e.target.value)}
                        placeholder="e.g. David Sterling"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Official Email
                      </label>
                      <input
                        type="email"
                        required
                        value={pFormEmail}
                        onChange={(e) => setPFormEmail(e.target.value)}
                        placeholder="partnerships@organization.org"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Proposal Scope
                      </label>
                      <textarea
                        rows={3}
                        value={pFormMsg}
                        onChange={(e) => setPFormMsg(e.target.value)}
                        placeholder="Brief summary of proposed collaboration or grant..."
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-stone-900 dark:bg-amber-600 hover:bg-stone-800 dark:hover:bg-amber-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {pFormSuccess ? 'Inquiry Docketed!' : 'Submit Partnership Proposal'}
                    </button>
                  </form>
                </div>
              </FadeInSection>
            </div>
          </div>
        )}

        {/* VIEW 6: REPORTS & TRANSPARENCY ARCHIVE */}
        {currentPath === 'reports' && (
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa] dark:bg-[#0c0a09] transition-colors duration-300">
            <FadeInSection>
              <TrustReports reports={reportsStore} onDownload={handleReportDownload} />
            </FadeInSection>
          </div>
        )}

        {/* VIEW 7: UPDATES, NEWS & GLOBAL GATHERINGS */}
        {currentPath === 'news-events' && (
          <div className="py-16 sm:py-24 px-6 lg:px-12 max-w-6xl mx-auto space-y-12">
            <FadeInSection>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                  CHRONICLES &amp; FIELD BULLETINS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                  News &amp; Community Gatherings
                </h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light">
                  Direct updates from active school sites, mobile clinic schedules, and community assemblies.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsStore.map((item, idx) => (
                <div key={item.id}>
                  <FadeInSection delayMs={idx * 50}>
                    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm space-y-3 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                          <span>{item.category}</span>
                          <span className="text-stone-400">{item.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-stone-900 dark:text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3">
                          {item.summary}
                        </p>
                      </div>
                      <div className="pt-2 text-xs font-mono font-bold text-stone-500 dark:text-stone-400">
                        Author: {item.author}
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 8: GALLERY & MEDIA */}
        {currentPath === 'gallery' && (
          <div className="space-y-0 relative overflow-hidden bg-[#fcfbfa] dark:bg-[#0c0a09] transition-colors duration-300">
            <FadeInSection>
              <CommunityAssetsGallery />
            </FadeInSection>
            <FadeInSection delayMs={100}>
              <StoryWall stories={storiesStore} />
            </FadeInSection>
          </div>
        )}

        {/* VIEW 9: DEDICATED DONATION & PLEDGE PORTAL */}
        {currentPath === 'donate' && (
          <div className="py-16 sm:py-24 px-6 lg:px-12 max-w-4xl mx-auto space-y-12">
            <FadeInSection>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                  DIRECT DONOR GIVING STATION
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                  Support Children in Vulnerable Communities
                </h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light">
                  87.2% of your contribution directly funds grassroots education, nutrition, medical care, and child safeguarding.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delayMs={50}>
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
                
                {/* Frequency Switcher */}
                <div className="flex justify-center">
                  <div className="inline-flex p-1 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <button
                      type="button"
                      onClick={() => setDonateFreq('monthly')}
                      className={`px-6 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                        donateFreq === 'monthly'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                      }`}
                    >
                      Monthly Giving
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonateFreq('one-time')}
                      className={`px-6 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                        donateFreq === 'one-time'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                      }`}
                    >
                      One-Time Contribution
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-stone-600 dark:text-stone-400 uppercase text-center">
                    Select Contribution Amount ({currency})
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                    {[25, 50, 100, 250, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setDonateAmount(amt);
                          setDonateCustom('');
                        }}
                        className={`py-3 rounded-xl font-mono font-bold text-sm transition-all cursor-pointer ${
                          donateAmount === amt && !donateCustom
                            ? 'bg-stone-900 dark:bg-emerald-600 text-white shadow-sm'
                            : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <input
                      type="number"
                      placeholder="Or enter custom amount in USD..."
                      value={donateCustom}
                      onChange={(e) => setDonateCustom(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Allocation Note */}
                <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 text-center space-y-1">
                  <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                    87.2% Direct Program Ratio
                  </span>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    A donation of ${donateCustom || donateAmount} directly delivers nutritious meals, education supplies, and medical checkups.
                  </p>
                </div>

                {/* Action Submit */}
                <form onSubmit={handleDedicatedDonateSubmit}>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {donateSuccess ? 'Pledge Processed Successfully!' : `Confirm ${currency} $${donateCustom || donateAmount} Pledge`}
                  </button>
                </form>

              </div>
            </FadeInSection>
          </div>
        )}

        {/* VIEW 10: LEGAL & SAFEGUARDING CHARTER */}
        {currentPath === 'legal' && (
          <div className="py-16 sm:py-24 px-6 lg:px-12 max-w-4xl mx-auto space-y-12">
            <FadeInSection>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                  REGULATORY STANDARDS &amp; SAFEGUARDING
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                  Legal &amp; Child Protection Charter
                </h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light">
                  Our comprehensive policies governing child protection, public auditing, and ethical non-profit governance.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delayMs={50}>
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white font-mono">
                    1. Child Safeguarding Protocol
                  </h3>
                  <p>
                    Thrive Kids Foundation adheres strictly to international child protection benchmarks. We enforce zero tolerance for exploitation, withhold personal identifying coordinates from public media, and require comprehensive background checks for all field officers.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white font-mono">
                    2. Independent CPA Auditing
                  </h3>
                  <p>
                    Our financial ledgers undergo quarterly independent audits by certified public accountants. All disclosures, tax returns, and program allocations are accessible on our public trust ledger.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white font-mono">
                    3. Donor Privacy &amp; Data Security
                  </h3>
                  <p>
                    We never sell, trade, or share donor contact records or banking information with third-party telemarketers or commercial data brokers.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        )}

      </main>

      {/* CLEAN AUTO-REARRANGING FOOTER (BORDERLESS) */}
      <Footer onNavigate={handleNavigate} />

      {/* TOAST NOTIFICATION CONTAINER */}
      <ToastContainer toasts={toasts} onRemove={handleRemoveToast} />

    </div>
  );
}
