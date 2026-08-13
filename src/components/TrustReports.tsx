import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, Award, ExternalLink, Search } from 'lucide-react';
import { NonprofitReport } from '../types';

interface TrustReportsProps {
  reports: NonprofitReport[];
  onDownload: (title: string) => void;
}

export default function TrustReports({ reports, onDownload }: TrustReportsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredReports = reports.filter(r => {
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="bg-white py-20 sm:py-28 px-6 lg:px-8 border-b border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header & Badges */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-stone-200 pb-8 text-left">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-600 font-bold block">
              100% PUBLIC AUDIT LEDGER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
              Financial Transparency &amp; Governance
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light max-w-2xl">
              Every financial statement, IRS Form 990, and safeguarding audit is published for open inspection.
            </p>
          </div>

          {/* Verification Badges */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-bold">
              <Award className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="block leading-tight">GuideStar Gold</span>
                <span className="text-[10px] text-emerald-700 font-normal">Transparency 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-bold">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <div>
                <span className="block leading-tight">100/100 Rating</span>
                <span className="text-[10px] text-amber-700 font-normal">Charity Navigator Equiv.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {['All', 'annual', 'financial', 'safeguarding', 'research'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border capitalize transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reports or years..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium text-stone-900 focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="p-6 bg-stone-50 border border-stone-200 rounded-2xl space-y-4 hover:border-emerald-600/50 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold uppercase text-[10px]">
                    {report.category}
                  </span>
                  <span className="text-stone-400 font-bold">{report.year}</span>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <div className="p-2.5 bg-white border border-stone-200 rounded-xl text-stone-700 shrink-0">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-stone-900 block leading-snug">
                      {report.title}
                    </strong>
                    <span className="text-[11px] text-stone-500 font-mono">{report.fileSize}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {report.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onDownload(report.title)}
                className="w-full py-2.5 px-4 bg-white hover:bg-stone-900 hover:text-white text-stone-800 border border-stone-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Audited PDF</span>
              </button>
            </div>
          ))}
        </div>

        {/* Direct Compliance Statement */}
        <div className="p-6 bg-stone-900 text-white rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">Tax Exemption</span>
            <span className="text-sm font-bold text-white block">IRS 501(c)(3) / UK Charity</span>
            <p className="text-xs text-stone-400 font-light">All contributions qualify for maximum legal tax exemptions worldwide.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold block">Independent Oversight</span>
            <span className="text-sm font-bold text-white block">Annual CPA Audit Conducted</span>
            <p className="text-xs text-stone-400 font-light">Certified external audit partners verify 100% of balance sheets quarterly.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">Whistleblower Guarantee</span>
            <span className="text-sm font-bold text-white block">Independent Legal Hotline</span>
            <p className="text-xs text-stone-400 font-light">Direct legal safeguarding reporting channel with zero-tolerance safety rules.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
