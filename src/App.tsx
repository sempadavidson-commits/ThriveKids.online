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
import CeoProfileSection from './components/CeoProfileSection';
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
            <div id="hero" className="relative z-10">
              <HeroSection 
                onExplore={() => {
                  const el = document.getElementById('ceo-story');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
              />
            </div>

            {/* CEO LEADERSHIP & PROVEN INFLUENCE */}
            <div id="ceo-story" className="relative z-10">
              <CeoProfileSection 
                onExplorePrograms={() => handleNavigate('programs')}
              />
            </div>

            {/* MARQUEE METRICS TICKER */}
            <div id="marquee" className="relative z-10">
              <ImpactMarquee />
            </div>

            {/* TRANSPARENCY & ALLOCATION ACCORDION FAQ */}
            <div id="faq" className="relative z-10">
              <FaqSection />
            </div>

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

      {/* CLEAN AUTO-REARRANGING FOOTER (BORDERLESS) */}
      <Footer onNavigate={handleNavigate} />

      {/* TOAST NOTIFICATION CONTAINER */}
      <ToastContainer toasts={toasts} onRemove={handleRemoveToast} />

    </div>
  );
}
