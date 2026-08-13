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
import ChildSponsorshipHub, { ChildProfile } from './components/ChildSponsorshipHub';
import TrustReports from './components/TrustReports';
import InteractiveMap from './components/InteractiveMap';
import ParallaxStory from './components/ParallaxStory';
import ImpactMarquee from './components/ImpactMarquee';
import StoryWall from './components/StoryWall';
import NarrativeJourney from './components/NarrativeJourney';
import SuccessFeatures from './components/SuccessFeatures';
import ToastContainer, { ToastMessage } from './components/Toast';

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
  const [programsStore] = useState<Program[]>(() => {
    const saved = localStorage.getItem('tk_db_programs');
    return saved ? JSON.parse(saved) : INITIAL_PROGRAMS;
  });

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

  // Child Sponsorship pledge
  const handleSponsorChild = (child: ChildProfile) => {
    handlePledgeGeneral(child.monthlyCost, `1-to-1 Child Sponsorship for ${child.name} (Monthly)`);
    triggerToast(
      'success',
      `Sponsorship Active for ${child.name}`,
      `You are now pledged to support ${child.name} in ${child.region}. Quarterly academic updates will be delivered.`
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
          <div>
            {/* HERO BANNER */}
            <div id="hero">
              <HeroSection 
                onExplore={() => handleNavigate('programs')} 
                onDonateClick={() => handleNavigate('donate')}
                onUrgentClick={() => {
                  const el = document.getElementById('urgent-appeal');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>

            {/* URGENT RELIEF CAMPAIGN */}
            <div id="urgent-appeal">
              <UrgentCampaign onPledge={handlePledgeGeneral} />
            </div>

            {/* MARQUEE METRICS TICKER */}
            <div id="marquee">
              <ImpactMarquee />
            </div>

            {/* CHILD SPONSORSHIP PREVIEW TEASER */}
            <div id="sponsorship-teaser" className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-6">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold block">
                  STAND DIRECTLY WITH A CHILD
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Over 2,400 Children Currently Awaiting Verified Sponsors
                </h2>
                <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl mx-auto">
                  For $35/month, provide complete school tuition, nutritious daily meals, and medical clinic checks.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleNavigate('sponsor')}
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Explore Children Profiles</span>
                  </button>

                  <a
                    href="https://wa.me/256746036194?text=Hello%20ThriveKids%20Foundation%2C%20I%20would%20like%20to%20learn%20more%20about%20sponsoring%20a%20child."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp: +256746036194</span>
                  </a>
                </div>

                <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-500">Contact:</span>
                    <a href="tel:+256746036194" className="text-white hover:text-emerald-400 transition-colors font-bold">+256746036194</a>
                  </div>
                  <span>•</span>
                  <a 
                    href="https://www.tiktok.com/@thrivekidsfoundation" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white text-stone-300 transition-colors"
                  >
                    TikTok Field Videos
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: DEDICATED PROGRAMS & FOCUS SECTORS */}
        {currentPath === 'programs' && (
          <div className="space-y-12 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  CORE OPERATIONAL SECTORS
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Our Five Strategic Initiatives
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  From solar computer labs to mother-led agricultural cooperatives, explore our verified programs in detail.
                </p>
              </div>
            </section>

            <ProgramIdentities programs={programsStore} />

            <div className="max-w-7xl mx-auto px-6">
              <UrgentCampaign onPledge={handlePledgeGeneral} />
            </div>
          </div>
        )}

        {/* VIEW 3: DEDICATED TRANSPARENCY CALCULATOR */}
        {currentPath === 'calculator' && (
          <div className="space-y-12 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  FIDUCIARY SIMULATOR
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Calculate Your Direct Impact
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  See mathematically how your contribution converts into real-world school scholarships, clinical visits, and clean water wells.
                </p>
              </div>
            </section>

            <TransparencyCalculator onPledge={handlePledgeGeneral} currency={currency} />
          </div>
        )}

        {/* VIEW 4: DEDICATED 15-YEAR TIMELINE & CHRONICLE */}
        {currentPath === 'timeline' && (
          <div className="space-y-12 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  FOUNDATION EVOLUTION
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  15 Years of Verifiable Progress
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  Trace our journey from the 2011 East African drought response to our current global presence across 395 districts.
                </p>
              </div>
            </section>

            <MilestoneTimeline />

            <div className="max-w-7xl mx-auto px-6">
              <NarrativeJourney />
            </div>
          </div>
        )}

        {/* VIEW 5: CHILD SPONSORSHIP & GET INVOLVED */}
        {currentPath === 'sponsor' && (
          <div className="space-y-16 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                  1-TO-1 HUMAN CONNECTION
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Sponsor a Child &amp; Get Involved
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  Choose a vulnerable child to sponsor, apply as a specialist volunteer, or propose a corporate grant alliance.
                </p>
              </div>
            </section>

            {/* Child Sponsorship Section */}
            <ChildSponsorshipHub onSponsor={handleSponsorChild} />

            {/* Volunteer & Corporate Alliances Forms */}
            <div className="max-w-7xl mx-auto px-6 space-y-12">
              <div className="text-left border-b border-stone-200 pb-4">
                <h3 className="text-2xl font-bold text-stone-900">Volunteer &amp; Corporate Partnerships</h3>
                <p className="text-xs text-stone-500">Contribute your specialized skills or deploy company CSR funds directly.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Volunteer Application Box */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-md text-left space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase">JOIN OUR FIELD SPECIALISTS</span>
                    <h4 className="text-xl font-bold text-stone-900">Volunteer Application</h4>
                  </div>

                  {volFormSuccess ? (
                    <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                      <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                      <strong className="text-emerald-900 text-sm block">Volunteer Application Received</strong>
                      <p className="text-xs text-emerald-700">Thank you. Our safeguarding officer will review your dossier within 3 business days.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterVolunteerSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Sarah Jenkins"
                          value={volFormName}
                          onChange={(e) => setVolFormName(e.target.value)}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Email Address</label>
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
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Availability Cycle</label>
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

                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Background Summary &amp; Motivation</label>
                        <textarea
                          rows={3}
                          placeholder="Detail your clinical, teaching, or engineering background..."
                          value={volFormMsg}
                          onChange={(e) => setVolFormMsg(e.target.value)}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
                      >
                        Submit Volunteer Dossier
                      </button>
                    </form>
                  )}
                </div>

                {/* Corporate Alliance Box */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-md text-left space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-amber-700 uppercase">INSTITUTIONAL &amp; CSR GRANTS</span>
                    <h4 className="text-xl font-bold text-stone-900">Corporate &amp; NGO Collaboration</h4>
                  </div>

                  {pFormSuccess ? (
                    <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-center space-y-2">
                      <Check className="w-8 h-8 text-amber-600 mx-auto" />
                      <strong className="text-amber-900 text-sm block">Cooperation Proposal Logged</strong>
                      <p className="text-xs text-amber-700">Thank you. Our partnership director will contact your liaison representative shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handlePartnerSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Company / Organization Name</label>
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
                          <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Contact Name</label>
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
                          <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Liaison Email</label>
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
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Partnership Type</label>
                        <select
                          value={pFormType}
                          onChange={(e) => setPFormType(e.target.value as any)}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                        >
                          <option value="Corporate">Corporate Venture / CSR Grant</option>
                          <option value="NGO">Non-Governmental Organization</option>
                          <option value="Government">State Grant Agency</option>
                          <option value="Academic">Academic &amp; Research Institute</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Collaboration Proposal Scope</label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your proposed grant allocation or sponsorship plan..."
                          value={pFormMsg}
                          onChange={(e) => setPFormMsg(e.target.value)}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
                      >
                        Submit Partnership Proposal
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>
        )}

        {/* VIEW 6: REPORTS & TRANSPARENCY ARCHIVE */}
        {currentPath === 'reports' && (
          <div className="space-y-12 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  AUDITED FIDUCIARY PORTAL
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Public Audits &amp; Annual Reports
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  Inspect certified IRS Form 990 filings, external auditor balances, and child safeguarding manuals.
                </p>
              </div>
            </section>

            <TrustReports reports={reportsStore} onDownload={handleReportDownload} />
          </div>
        )}

        {/* VIEW 7: UPDATES, NEWS & GLOBAL GATHERINGS */}
        {currentPath === 'news-events' && (
          <div className="space-y-16 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  LATEST DISPATCHES
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Press Logs &amp; Global Gatherings
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  Fieldwork progress reports, new solar classroom openings, and upcoming global advocacy webinars.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
              {/* Left Side: News List */}
              <div className="lg:col-span-7 space-y-8">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <h3 className="font-bold text-xl text-stone-900">Latest Field Articles</h3>
                  <div className="flex gap-1.5 text-xs">
                    {['All', 'Update', 'Press Release', 'Announcement'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setNewsFilter(f)}
                        className={`px-3 py-1 rounded-md transition-all cursor-pointer text-xs font-semibold ${
                          newsFilter === f
                            ? 'bg-stone-900 text-amber-400'
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
                      <div className="md:col-span-4 h-36 bg-stone-900 rounded-xl overflow-hidden relative">
                        <img src={article.image} className="w-full h-full object-cover" alt={article.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="md:col-span-8 space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-stone-400 uppercase font-bold">
                          <span className="text-emerald-700">{article.category}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <h4 className="font-bold text-base text-stone-900 leading-snug">
                          {article.title}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {article.content}
                        </p>
                        <div className="text-[10px] text-stone-400 font-mono pt-1">
                          By {article.author}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Gatherings & Events */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-bold text-xl text-stone-900 border-b border-stone-200 pb-3">
                  Advocacy Calendar &amp; Webinars
                </h3>

                <div className="space-y-4">
                  {eventsStore.map((evt) => (
                    <div key={evt.id} className="p-4 bg-white border border-stone-200 rounded-xl space-y-3 shadow-2xs hover:border-emerald-600/30 transition-all">
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                        <span>{evt.category}</span>
                        <span>{evt.date} • {evt.time}</span>
                      </div>
                      <div>
                        <strong className="text-stone-950 text-sm block">{evt.title}</strong>
                        <span className="text-xs text-stone-500 block leading-tight pt-1">{evt.description}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-500">
                        <span>{evt.location}</span>
                        <span className={`px-2 py-0.5 rounded uppercase font-bold ${evt.spotsLeft > 0 ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-100 text-stone-400'}`}>
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

        {/* VIEW 8: GALLERY & MEDIA */}
        {currentPath === 'gallery' && (
          <div className="space-y-16 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  VISUAL FIELD ARCHIVE
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Field Photo &amp; Media Gallery
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  A transparent view of solar well construction, classroom scholarships, and mobile clinic days.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-4">
                {['All', 'education', 'protection', 'health', 'community', 'events'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-4 py-2 text-xs font-bold rounded-lg capitalize cursor-pointer transition-all ${
                      galleryFilter === cat
                        ? 'bg-stone-900 text-amber-400 shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {filteredGallery.map((img) => (
                  <div 
                    key={img.id} 
                    className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs group cursor-pointer hover:shadow-md transition-all"
                    onClick={() => setActiveLightbox(img)}
                  >
                    <div className="h-56 overflow-hidden relative bg-stone-900">
                      <img src={img.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={img.title} referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <strong className="text-xs text-stone-900 block font-bold">{img.title}</strong>
                      <span className="text-[10px] text-stone-500 font-mono uppercase">{img.category}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox Modal */}
              {activeLightbox && (
                <div 
                  className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
                  onClick={() => setActiveLightbox(null)}
                >
                  <div className="max-w-3xl w-full space-y-4" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                      <img src={activeLightbox.imageUrl} alt={activeLightbox.title} className="w-full max-h-[80vh] object-contain rounded-xl border border-stone-800" referrerPolicy="no-referrer" />
                      <button
                        type="button"
                        onClick={() => setActiveLightbox(null)}
                        className="absolute top-3 right-3 bg-white/95 text-stone-900 w-9 h-9 rounded-full font-bold flex items-center justify-center shadow-lg cursor-pointer hover:bg-stone-100"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-white text-center space-y-1">
                      <h4 className="font-bold text-lg">{activeLightbox.title}</h4>
                      <p className="text-stone-400 text-xs">{activeLightbox.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {/* VIEW 9: DEDICATED DONATION & PLEDGE PORTAL */}
        {currentPath === 'donate' && (
          <div className="space-y-16 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold">
                  DIRECT FIDUCIARY GIVING
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Support ThriveKids Global
                </h1>
                <p className="max-w-xl mx-auto text-sm text-stone-300 font-light">
                  87.2% of all resources flow directly into frontline field operations. 100% tax-deductible worldwide.
                </p>
              </div>
            </section>

            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white border border-stone-200 rounded-2xl shadow-xl p-6 sm:p-10 space-y-8 text-left">
                
                {donateSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">Thank You For Your Sustaining Support</h3>
                    <p className="text-sm text-stone-600 max-w-md mx-auto">
                      Your contribution has been logged in our secure ledger. An official tax receipt has been generated for your records.
                    </p>
                    <button
                      type="button"
                      onClick={() => handleNavigate('home')}
                      className="px-6 py-2.5 bg-stone-900 text-white font-bold text-xs uppercase rounded-xl"
                    >
                      Return to Homepage
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleDedicatedDonateSubmit} className="space-y-8">
                    
                    {/* Frequency selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Giving Frequency</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setDonateFreq('monthly')}
                          className={`py-3.5 px-4 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer text-center ${
                            donateFreq === 'monthly'
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-600'
                              : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                          }`}
                        >
                          Monthly Sustainer (Highest Impact)
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonateFreq('one-time')}
                          className={`py-3.5 px-4 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer text-center ${
                            donateFreq === 'one-time'
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-600'
                              : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                          }`}
                        >
                          One-Time Contribution
                        </button>
                      </div>
                    </div>

                    {/* Amount selector */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Select Gift Amount</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[25, 50, 100, 250].map((amt) => {
                          const isSelected = donateAmount === amt && !donateCustom;
                          return (
                            <button
                              key={amt}
                              type="button"
                              onClick={() => {
                                setDonateAmount(amt);
                                setDonateCustom('');
                              }}
                              className={`p-4 rounded-xl border-2 font-mono font-bold text-lg transition-all cursor-pointer text-center ${
                                isSelected
                                  ? 'border-stone-900 bg-stone-900 text-white shadow-sm'
                                  : 'border-stone-200 bg-stone-50 text-stone-800 hover:bg-stone-100'
                              }`}
                            >
                              ${amt}
                              {donateFreq === 'monthly' && <span className="text-xs font-sans font-normal block text-stone-400">/month</span>}
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 block">Or Custom Amount ($USD)</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-stone-400">$</span>
                          <input
                            type="number"
                            min="5"
                            placeholder="Other amount"
                            value={donateCustom}
                            onChange={(e) => setDonateCustom(e.target.value)}
                            className="w-full pl-8 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold text-stone-900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Program Sector Designation */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Direct Fund Toward Specific Program</label>
                      <select
                        value={donateSector}
                        onChange={(e) => setDonateSector(e.target.value)}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium text-stone-800"
                      >
                        <option value="general">Where Needed Most (Emergency Relief &amp; Operations)</option>
                        <option value="education">Education &amp; Solar Computer Classrooms</option>
                        <option value="health">Pediatric Health, Nutrition &amp; Mobile Clinics</option>
                        <option value="water">Clean Water Solar Boreholes</option>
                        <option value="family">Mother-Led Microfinance Cooperatives</option>
                      </select>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      <span>Confirm ${donateCustom || donateAmount} {donateFreq === 'monthly' ? '/ Month' : 'Contribution'}</span>
                    </button>

                    <div className="border-t border-stone-100 pt-4 flex flex-wrap justify-between items-center text-xs text-stone-400 gap-2">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Secure 256-Bit SSL Encryption</span>
                      </div>
                      <span>501(c)(3) / UK Charity Tax Receipts Generated</span>
                    </div>

                  </form>
                )}

              </div>
            </div>
          </div>
        )}

        {/* VIEW 10: LEGAL & SAFEGUARDING CHARTER */}
        {currentPath === 'legal' && (
          <div className="space-y-16 pb-24">
            <section className="bg-stone-900 text-white py-16 px-6 text-center">
              <div className="max-w-3xl mx-auto space-y-3">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">STANDARDS</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight capitalize">
                  {currentSubPath || 'Regulatory Policy'} Codes
                </h1>
                <p className="text-xs text-stone-400">
                  Reviewed and audited annually for international charity regulatory compliance.
                </p>
              </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 bg-white p-8 rounded-2xl border border-stone-200 text-left">
              <div className="space-y-6 text-xs text-stone-700 leading-relaxed font-sans">
                <h3 className="font-bold text-lg text-stone-900">1. Core Child Safeguarding and Exploitation Prevention Charter</h3>
                <p>In accordance with UNICEF child shielding protocols, ThriveKids operates on a strict absolute threshold for safety:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Complete visual protection:</strong> Surnames, school name tags, and geographical GPS coordinates are strictly redacted from public sponsor profiles to avoid tracking risks.</li>
                  <li><strong>Universal background checks:</strong> Mandatory national police background clearances for every social worker, clinician, teacher, borehole contractor, and volunteer.</li>
                  <li><strong>Direct whistleblower channel:</strong> Dedicated independent safeguarding reporting line routing directly to Governance Chairperson Sarah Jenkins-Hume, JD.</li>
                </ul>
              </div>
            </section>
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
