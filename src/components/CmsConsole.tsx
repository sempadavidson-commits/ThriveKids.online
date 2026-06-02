/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Database,
  Lock,
  Plus,
  Trash2,
  Edit,
  Check,
  FileText,
  Users,
  Briefcase,
  Layers,
  Calendar,
  DollarSign,
  UserCheck,
  Building,
  Eye,
  Settings
} from 'lucide-react';
import { 
  Program, 
  TeamMember, 
  SuccessStory, 
  NewsArticle, 
  FoundationEvent,
  NonprofitReport,
  VolunteerApplication,
  PartnerInquiry,
  DonationRecord
} from '../types';

interface CmsConsoleProps {
  programs: Program[];
  team: TeamMember[];
  stories: SuccessStory[];
  news: NewsArticle[];
  events: FoundationEvent[];
  reports: NonprofitReport[];
  volunteers: VolunteerApplication[];
  partners: PartnerInquiry[];
  donations: DonationRecord[];
  
  onUpdatePrograms: (p: Program[]) => void;
  onUpdateTeam: (t: TeamMember[]) => void;
  onUpdateStories: (s: SuccessStory[]) => void;
  onUpdateNews: (n: NewsArticle[]) => void;
  onUpdateEvents: (e: FoundationEvent[]) => void;
  onUpdateReports: (r: NonprofitReport[]) => void;
  onApproveVolunteer: (id: string, status: 'Approved' | 'Declined') => void;
  onAddLog: (log: string) => void;
}

export default function CmsConsole({
  programs,
  team,
  stories,
  news,
  events,
  reports,
  volunteers,
  partners,
  donations,
  onUpdatePrograms,
  onUpdateTeam,
  onUpdateStories,
  onUpdateNews,
  onUpdateEvents,
  onUpdateReports,
  onApproveVolunteer,
  onAddLog
}: CmsConsoleProps) {
  const [activeTab, setActiveTab] = useState<'programs' | 'stories' | 'news' | 'events' | 'submissions' | 'donations'>('submissions');
  
  // News form states
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState<'Update' | 'Press Release' | 'Announcement' | 'Community Story'>('Update');
  
  // Stories state
  const [newStoryTitle, setNewStoryTitle] = useState('');
  const [newStoryChildName, setNewStoryChildName] = useState('');
  const [newStoryChallenge, setNewStoryChallenge] = useState('');
  const [newStoryIntervention, setNewStoryIntervention] = useState('');
  const [newStoryOutcome, setNewStoryOutcome] = useState('');
  const [newStoryProgram, setNewStoryProgram] = useState('education');

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent || !newAuthor) return;

    const added: NewsArticle = {
      id: `news-custom-${Date.now()}`,
      title: newTitle,
      content: newContent,
      author: newAuthor,
      category: newCategory,
      date: new Date().toISOString().split('T')[0],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
      tags: ['CMS Added', newCategory]
    };

    onUpdateNews([added, ...news]);
    onAddLog(`CMS: Published news article matching: "${newTitle}"`);
    setNewTitle('');
    setNewContent('');
    setSelectedStoryText('');
  };

  const [selectedStoryText, setSelectedStoryText] = useState('');

  const handleAddStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStoryTitle || !newStoryChildName || !newStoryChallenge) return;

    const added: SuccessStory = {
      id: `story-custom-${Date.now()}`,
      title: newStoryTitle,
      childOrFamilyName: newStoryChildName,
      challenge: newStoryChallenge,
      intervention: newStoryIntervention,
      outcome: newStoryOutcome,
      coverImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600',
      relatedProgramId: newStoryProgram,
      date: new Date().toISOString().split('T')[0],
      readsCount: 0
    };

    onUpdateStories([added, ...stories]);
    onAddLog(`CMS: Created new success story for "${newStoryChildName}"`);
    setNewStoryTitle('');
    setNewStoryChildName('');
    setNewStoryChallenge('');
    setNewStoryIntervention('');
    setNewStoryOutcome('');
  };

  const handleDeleteStory = (id: string) => {
    const filt = stories.filter(s => s.id !== id);
    onUpdateStories(filt);
    onAddLog('CMS: Deleted success story ID: ' + id);
  };

  const handleDeleteNews = (id: string) => {
    const filt = news.filter(n => n.id !== id);
    onUpdateNews(filt);
    onAddLog('CMS: Deleted news article ID: ' + id);
  };

  const handleEditProgramShortDesc = (id: string, text: string) => {
    const updated = programs.map(p => {
      if (p.id === id) {
        return { ...p, shortDescription: text };
      }
      return p;
    });
    onUpdatePrograms(updated);
    onAddLog(`CMS: Updated short description for Program: ${id}`);
  };

  return (
    <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-3xl p-6 shadow-2xl space-y-6">
      
      {/* CMS Header logo */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-800 pb-5 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500 text-stone-950 font-black shadow-md flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-sans font-bold text-lg text-white">ThriveKids CMS Console</h2>
              <span className="bg-amber-500/10 text-amber-500 text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded">
                Read/Write Sandboxed Database
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Review visitor records, edit program scopes, release articles, and calibrate funding metrics instantly.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-stone-950 border border-stone-800 rounded-xl px-4 py-2 font-mono text-xs text-stone-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>CMS State: <strong>ONLINE & CONNECTED</strong></span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-stone-800 pb-1">
        {[
          { id: 'submissions', label: 'User Submissions', count: volunteers.length + partners.length, icon: <Users className="w-3.5 h-3.5" /> },
          { id: 'donations', label: 'Received Donations', count: donations.length, icon: <DollarSign className="w-3.5 h-3.5" /> },
          { id: 'programs', label: 'Manage Programs', count: programs.length, icon: <Layers className="w-3.5 h-3.5" /> },
          { id: 'stories', label: 'Write Stories', count: stories.length, icon: <FileText className="w-3.5 h-3.5" /> },
          { id: 'news', label: 'Publish News', count: news.length, icon: <Calendar className="w-3.5 h-3.5" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-stone-800 text-white border-b-2 border-amber-500 font-bold'
                : 'text-stone-400 hover:text-white hover:bg-stone-800/40'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            <span className="bg-stone-950 text-stone-400 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="min-h-[350px]">
        
        {/* Tab 1: Submissions */}
        {activeTab === 'submissions' && (
          <div className="space-y-6">
            
            {/* Volunteer Applications list (Forms integration) */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-sm flex items-center gap-1.5 uppercase font-mono tracking-wider text-amber-500">
                <UserCheck className="w-4 h-4" />
                <span>Active Volunteer Applications</span>
              </h3>
              {volunteers.length === 0 ? (
                <div className="text-center py-8 bg-stone-950/40 border border-stone-800 rounded-lg text-xs text-stone-550">
                  No applications received yet. Fill out the form in "Get Involved &gt; Volunteer" to see it register here live!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-stone-400 border border-stone-800">
                    <thead className="bg-stone-950 text-stone-300 font-mono text-[10px] uppercase">
                      <tr>
                        <th className="p-3 border-b border-stone-800">Applicant</th>
                        <th className="p-3 border-b border-stone-800">Assigned Skills</th>
                        <th className="p-3 border-b border-stone-800">Availability</th>
                        <th className="p-3 border-b border-stone-800">Message Summary</th>
                        <th className="p-3 border-b border-stone-800">Status</th>
                        <th className="p-3 border-b border-stone-800">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      {volunteers.map((vol) => (
                        <tr key={vol.id} className="hover:bg-stone-800/20">
                          <td className="p-3">
                            <strong className="text-white font-semibold">{vol.name}</strong>
                            <div className="text-[10px] text-stone-500 font-mono">{vol.email}</div>
                          </td>
                          <td className="p-3">
                            <div className="flex flex-wrap gap-1">
                              {vol.skills.map((s, i) => (
                                <span key={i} className="px-1 text-[9px] font-mono bg-stone-800 rounded text-stone-350">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="p-3 font-mono text-stone-300">{vol.availability}</td>
                          <td className="p-3 max-w-xs truncate" title={vol.message}>{vol.message}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                              vol.status === 'Approved' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20' :
                              vol.status === 'Declined' ? 'bg-red-950/80 text-red-400 border border-red-500/20' :
                              'bg-amber-950/80 text-amber-500 border border-amber-500/20'
                            }`}>
                              {vol.status}
                            </span>
                          </td>
                          <td className="p-3">
                            {vol.status === 'Pending' && (
                              <div className="flex gap-1.5">
                                <button
                                  onClick={() => onApproveVolunteer(vol.id, 'Approved')}
                                  className="p-1 rounded bg-emerald-700 hover:bg-emerald-600 text-white cursor-pointer"
                                  title="Approve"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => onApproveVolunteer(vol.id, 'Declined')}
                                  className="p-1 rounded bg-red-700 hover:bg-red-650 text-white cursor-pointer"
                                  title="Decline"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Partner Inquiries */}
            <div className="space-y-3 pt-4 border-t border-stone-850">
              <h3 className="font-semibold text-white text-sm flex items-center gap-1.5 uppercase font-mono tracking-wider text-amber-500">
                <Building className="w-4 h-4" />
                <span>Corporate & NGO Partnership Inquiries</span>
              </h3>
              {partners.length === 0 ? (
                <div className="text-center py-8 bg-stone-950/40 border border-stone-800 rounded-lg text-xs text-stone-550">
                  No corporate partnership inquiries received. Submit a form in "Get Involved &gt; Partner with us" to see results.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-stone-400 border border-stone-800">
                    <thead className="bg-stone-950 text-stone-300 font-mono text-[10px] uppercase">
                      <tr>
                        <th className="p-3 border-b border-stone-800">Organization Name</th>
                        <th className="p-3 border-b border-stone-800">Primary Contact</th>
                        <th className="p-3 border-b border-stone-800">Affiliation Type</th>
                        <th className="p-3 border-b border-stone-800">Message Content</th>
                        <th className="p-3 border-b border-stone-800">Date Received</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      {partners.map((prt) => (
                        <tr key={prt.id} className="hover:bg-stone-800/20">
                          <td className="p-3">
                            <strong className="text-white font-bold">{prt.organizationName}</strong>
                          </td>
                          <td className="p-3">
                            <div>{prt.contactName}</div>
                            <div className="text-[10px] text-stone-500 font-mono">{prt.email}</div>
                          </td>
                          <td className="p-3 font-mono text-stone-300">{prt.partnerType}</td>
                          <td className="p-3 max-w-xs text-stone-350">{prt.message}</td>
                          <td className="p-3 font-mono">{prt.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Tab 2: Donations List */}
        {activeTab === 'donations' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm flex items-center gap-1.5 uppercase font-mono tracking-wider text-amber-500">
              <DollarSign className="w-4 h-4" />
              <span>Real-Time Donation Stream Audit Ledger</span>
            </h3>
            {donations.length === 0 ? (
              <div className="text-center py-8 bg-stone-950/40 border border-stone-800 rounded-lg text-xs text-stone-550">
                No mock donations completed yet. Submit a payment on the "Donate/Sponsor" screens to see transaction tracks logged live!
              </div>
            ) : (
              <div className="overflow-x-auto border border-stone-800 rounded-lg">
                <table className="w-full text-left text-xs text-stone-400">
                  <thead className="bg-stone-950 text-stone-300 font-mono text-[10px] uppercase">
                    <tr>
                      <th className="p-3">Donor Persona</th>
                      <th className="p-3">Tax Deduction email</th>
                      <th className="p-3">Assigned Program Target</th>
                      <th className="p-3">Filing frequency</th>
                      <th className="p-3 text-right">Audit Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 font-sans">
                    {donations.map((dn) => (
                      <tr key={dn.id} className="hover:bg-stone-800/20">
                        <td className="p-3">
                          <strong className="text-emerald-450 font-bold">
                            {dn.isAnonymous ? 'Anonymous Philanthropist 👤' : dn.donorName}
                          </strong>
                        </td>
                        <td className="p-3 font-mono">{dn.isAnonymous ? 'Restricted Policy' : dn.email}</td>
                        <td className="p-3 font-sans capitalize text-amber-500">{dn.programId === 'general' ? 'General Pool' : dn.programId}</td>
                        <td className="p-3 uppercase font-mono text-[10px] text-stone-400">{dn.frequency}</td>
                        <td className="p-3 text-right text-white font-mono font-bold">${dn.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Program descriptions edit */}
        {activeTab === 'programs' && (
          <div className="space-y-4">
            <div className="p-4 bg-stone-950/50 rounded-xl border border-stone-800/60 mb-4 text-xs text-stone-400">
              👑 <strong>CMS Power:</strong> Edit any program's description below, and see updates instantly populate the corresponding Programs view and featured homepage cards in active preview.
            </div>

            <div className="space-y-4">
              {programs.map((prog) => (
                <div key={prog.id} className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <strong className="text-white font-sans text-md">{prog.title}</strong>
                    <span className="font-mono text-xs text-amber-500 font-bold uppercase">{prog.id}</span>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-stone-500 uppercase font-bold mb-1">
                      Short Card Summary Description
                    </label>
                    <textarea
                      rows={2}
                      defaultValue={prog.shortDescription}
                      onBlur={(e) => handleEditProgramShortDesc(prog.id, e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-stone-300 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Writing Success Stories */}
        {activeTab === 'stories' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form onSubmit={handleAddStory} className="space-y-4 bg-stone-950 p-5 border border-stone-800 rounded-xl">
              <h4 className="font-semibold text-white text-xs font-mono uppercase tracking-wider text-amber-550 border-b border-stone-800 pb-2">
                Draft New Success Case Study
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Story Header Title</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Maria's New Bakery Shop"
                    value={newStoryTitle}
                    onChange={(e) => setNewStoryTitle(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Primary Beneficiary Persona</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Maria & Her 3 Foster Kids"
                    value={newStoryChildName}
                    onChange={(e) => setNewStoryChildName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Initial Adversities / Challenge</label>
                <textarea
                  required
                  rows={2}
                  placeholder="The challenge she faced..."
                  value={newStoryChallenge}
                  onChange={(e) => setNewStoryChallenge(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Foundation Intervention</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="How we stepped in..."
                    value={newStoryIntervention}
                    onChange={(e) => setNewStoryIntervention(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1 font-bold">Tangible Outcome / Lift</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="The resulting impact achievements..."
                    value={newStoryOutcome}
                    onChange={(e) => setNewStoryOutcome(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 items-center">
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Associated Program</label>
                  <select
                    value={newStoryProgram}
                    onChange={(e) => setNewStoryProgram(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-stone-400"
                  >
                    {programs.map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-2.5 px-4 rounded-lg text-xs mt-4 cursor-pointer"
                >
                  Publish Story Live
                </button>
              </div>
            </form>

            <div className="space-y-3">
              <h4 className="font-semibold text-stone-400 text-xs font-mono uppercase tracking-wider">
                Existing Stories database ({stories.length})
              </h4>
              <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                {stories.map(st => (
                  <div key={st.id} className="p-3 bg-stone-950 border border-stone-800 rounded-lg flex justify-between items-start text-xs">
                    <div>
                      <strong className="text-white font-sans">{st.title}</strong>
                      <div className="text-[10px] text-stone-500 font-mono mt-0.5">
                        Author Flag: {st.childOrFamilyName} | Related: {st.relatedProgramId}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteStory(st.id)}
                      className="p-1 px-1.5 bg-stone-905 hover:bg-red-950 hover:text-red-400 rounded-md border border-stone-800 cursor-pointer text-stone-500 text-[10px]"
                      title="Delete Story"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Publishing News */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form onSubmit={handleAddNews} className="space-y-4 bg-stone-950 p-5 border border-stone-800 rounded-xl">
              <h4 className="font-semibold text-white text-xs font-mono uppercase tracking-wider text-amber-550 border-b border-stone-800 pb-2">
                Draft New Institutional Announcement
              </h4>

              <div>
                <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Headline Title</label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Deloitte Completes 2026 Audit Evaluation"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white placeholder-stone-550"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Article Content text</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type the full body details here..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white placeholder-stone-550"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pb-2">
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Author Name / Role</label>
                  <input
                    type="text"
                    required
                    placeholder="Chief of Staff"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-white mr-2"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">Category Type</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-xs text-stone-400"
                  >
                    <option value="Update">Update</option>
                    <option value="Press Release">Press Release</option>
                    <option value="Announcement">Announcement</option>
                    <option value="Community Story">Community Story</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg text-xs cursor-pointer"
              >
                Publish Article to Newsroom
              </button>
            </form>

            <div className="space-y-3">
              <h3 className="font-semibold text-stone-400 text-xs font-mono uppercase tracking-wider">
                News Articles Registry ({news.length})
              </h3>
              <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                {news.map(art => (
                  <div key={art.id} className="p-3 bg-stone-950 border border-stone-800 rounded-lg flex justify-between items-center text-xs">
                    <div>
                      <strong className="text-white font-sans">{art.title}</strong>
                      <div className="text-[10px] text-stone-550 font-mono mt-0.5">
                        Author: {art.author} | Category: {art.category} | Created: {art.date}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteNews(art.id)}
                      className="p-1 px-2 text-stone-450 hover:bg-red-950 hover:text-red-400 rounded-md border border-stone-850 cursor-pointer text-[10px]"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
