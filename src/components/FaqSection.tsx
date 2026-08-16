import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck, PieChart, FileText, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Project Allocation',
    question: 'What percentage of my contribution directly funds field projects?',
    answer: 'A verified 87.2% of all donations goes directly into our frontline programs—including nutritional feeding, educational scholarships, solar school construction, medical clinics, and clean water wells. Less than 10% supports essential operations and compliance, and under 3% covers administration.',
    highlight: '87.2% Direct Field Allocation'
  },
  {
    id: 'faq-2',
    category: 'Transparency',
    question: 'How does Thrive Kids Foundation guarantee financial transparency?',
    answer: 'We maintain an open-book policy. Every program expense is tracked against strict milestone deliverables and audited quarterly by certified independent CPAs. Our comprehensive financial statements and annual tax disclosures are published openly for public verification.',
    highlight: 'Quarterly Certified CPA Audits'
  },
  {
    id: 'faq-3',
    category: 'Safeguarding',
    question: 'How do you protect the privacy and safety of supported children?',
    answer: 'We enforce a strict Child Safeguarding Policy adhering to global standards. We never release sensitive identifying data such as surnames, private contact information, or precise geolocation coordinates. All field visits, media, and interactions undergo rigorous vetting.',
    highlight: 'Strict Child Protection Protocol'
  },
  {
    id: 'faq-4',
    category: 'Project Allocation',
    question: 'How are local community projects selected and prioritized?',
    answer: 'Our field teams and grassroots leaders assess regional vulnerability through direct community engagement. Priority is given to emergency rescue of street-connected youth, high-poverty school zones without access to clean water, and marginalized rural districts with acute healthcare gaps.',
    highlight: 'Grassroots Community-Led Selection'
  },
  {
    id: 'faq-5',
    category: 'Transparency',
    question: 'Can donors track the progress and impact of funded initiatives?',
    answer: 'Yes. We share verified photographic field documentation, metric milestones, and regular progress reports directly with our donors and supporters. Donors can also reach our team via WhatsApp for direct updates on active initiatives.',
    highlight: 'Verified Milestone Updates'
  },
  {
    id: 'faq-6',
    category: 'Governance',
    question: 'Who oversees the foundation’s leadership and governance?',
    answer: 'Thrive Kids Foundation operates under the direct stewardship of our Chief Executive Officer and an independent advisory committee composed of community leaders, educators, legal counsel, and child protection specialists.',
    highlight: 'Independent Advisory Committee'
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Project Allocation', 'Transparency', 'Safeguarding', 'Governance'];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(f => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto select-none transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>TRANSPARENCY &amp; ALLOCATION FAQ</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight leading-tight transition-colors">
          Frequently Asked Questions
        </h2>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed transition-colors">
          Clear answers about how we allocate donor funds, verify project outcomes, and uphold absolute transparency across our grassroots programs.
        </p>

        {/* Category Pills */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-stone-900 dark:bg-emerald-600 text-white shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl bg-stone-100/70 dark:bg-stone-900/80 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-all gap-4"
                aria-expanded={isOpen}
              >
                <div className="space-y-1 pr-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 tracking-widest uppercase block">
                    {faq.category}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-snug block transition-colors">
                    {faq.question}
                  </span>
                </div>

                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-stone-900 dark:bg-emerald-600 text-white' : 'bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-stone-600 dark:text-stone-300 text-sm sm:text-base font-light leading-relaxed space-y-3">
                      <p>{faq.answer}</p>
                      
                      {faq.highlight && (
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 pt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{faq.highlight}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
