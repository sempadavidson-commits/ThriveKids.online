/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Program,
  TeamMember,
  SuccessStory,
  NewsArticle,
  FoundationEvent,
  NonprofitReport,
  GalleryItem
} from './types';

// High-quality global Unsplash images with correct referrerPolicy representation
export const INITIAL_PROGRAMS: Program[] = [
  {
    id: 'education',
    title: 'Education & Scholar Grants',
    slug: 'education-scholar-grants',
    iconName: 'GraduationCap',
    shortDescription: 'Providing school fees scholarships, building eco-classrooms using recycled plastic bottles, and sponsoring exceptionally talented children.',
    fullDescription: 'Education is the ultimate equalizer and a core pillar of our strategy. In alignment with the Ruparelia Foundation model, our Education Support initiative reduces dropout rates by distributing scholarships, supporting school fees, renovating school structures, and constructing innovative eco-classrooms and sanitation blocks built entirely of recycled plastic bottles in underserved urban communities.',
    objectives: [
      'Eliminate financial dropout risks through direct scholar tuition grants and school fees support.',
      'Construct classrooms and sanitation structures using recycled plastic bottles in high-density areas.',
      'Construct and furnish community literacy hubs equipped with regional and digital curricula.',
      'Host vocational training programs to equip school-leavers with practical trades and digital skills.'
    ],
    keyOutcomes: [
      'Successfully subsidized 2,420 vulnerable students over the past calendar fiscal cycle.',
      'Constructed 4 innovative eco-classrooms using 150,000 recycled plastic bottles.',
      'Maintained a verified 95.8% school retention rate among target scholarship cohorts.',
      'Distributed uniform packages and school books to 12,500 children.'
    ],
    targetBeneficiaries: 'Socioeconomically vulnerable youth, outstanding young scholars, and children in slum communities (Ages 5-18).',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Scholarships Funded', value: '2,420+' },
      { label: 'Eco-Structures Built', value: '6' },
      { label: 'Retention Rate', value: '95.8%' }
    ],
    impactStory: 'By securing scholar fees and building the plastic bottle library in her slum sector, we empowered Amina to become her school group\'s top scholar.'
  },
  {
    id: 'protection',
    title: 'Child Protection',
    slug: 'child-protection',
    iconName: 'ShieldAlert',
    shortDescription: 'Rescuing and shielding children from abuse, hazardous labor, trafficking, and child-marriage through hotlines, shelters, and advocacy.',
    fullDescription: 'Every child possesses the inalienable right to grow up safe from violence, exploitation, and abuse. Our Child Protection initiative coordinates with country courts, social staff, and local youth councils to run temporary crisis shelter homes, operate child safeguarding advice hotlines, offer trauma-responsive psycho-education, and register births to prevent exploitation.',
    objectives: [
      'Run emergency shelter operations offering professional social counseling and nutritional rehabilitation.',
      'Strengthen school child protection advocacy circles to identify and flag high-risk situations.',
      'Run a rapid-response emergency child hotline in partner districts.',
      'Promote global policy reform on early marriage, legal child age protection, and domestic abuse courts.'
    ],
    keyOutcomes: [
      'Rescued and rehabilitated 345 children from hazardous industrial factory environments.',
      'Trained 12,000 community advocates to run child safety committees.',
      'Assisted 820 judicial hearings with comprehensive social advocacy, resulting in immediate protection.',
      'Secured legal identity registrations for 8,500 previously undocumented children.'
    ],
    targetBeneficiaries: 'Children escaping violent situations, industrial labor traps, or child marriage threats.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Rescued from Risk', value: '345' },
      { label: 'Advocates Active', value: '12K' },
      { label: 'Undocumented Registered', value: '8.5K' }
    ],
    impactStory: 'Our rapid rescue program saved Daniel from illegal factory labor, returning him to safe public schooling and therapeutic trauma care.'
  },
  {
    id: 'family',
    title: 'Family Strengthening',
    slug: 'family-strengthening',
    iconName: 'HeartHandshake',
    shortDescription: 'Empowering households with small-business microgrants, goat-rearing start packages, nutritional guidance, and mental health aid.',
    fullDescription: 'The most effective way to shelter a child is to anchor their home. Our Family Strengthening programs reverse hereditary indigence by empowering mothers and guardians. We combine active psychological family consultations with dynamic micro-business startup grants, agricultural tools, and local savings groups, preventing family separation and fostering long-term resilience.',
    objectives: [
      'Fund direct micro-lending programs enabling female guardians to establish food kiosks or sewing services.',
      'Provide emergency nutrition parcels, medical expense support, and psychological care.',
      'Facilitate structured positive-parenting networks for high-risk single-parent households.',
      'Distribute sustainable home-raising agricultural starter packets (e.g., livestock, weatherproof seeds).'
    ],
    keyOutcomes: [
      'Helped 560 rural mothers build independently profitable small businesses.',
      'Achieved a 91% drop in child separation rates among targeted emergency families.',
      'Facilitated self-directed banking and micro-savings for 35 regional cooperative circles.',
      'Supplied climate-resilient farming seeds to over 1,900 farming single mothers.'
    ],
    targetBeneficiaries: 'Ultra-poor marginalized families, vulnerable single guardians, and high-poverty environments.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Firms Funded', value: '560' },
      { label: 'Family Reunion Rate', value: '91%' },
      { label: 'Agri Starter Kits', value: '1.9K' }
    ],
    impactStory: 'By providing an initial baking micro-grant and parenting training, single mother Maria transformed her family’s financial future.'
  },
  {
    id: 'health',
    title: 'Healthcare & Mobile Medical Camps',
    slug: 'healthcare-mobile-medical-camps',
    iconName: 'Activity',
    shortDescription: 'Running free healthcare camps (cataract surgery, eye screenings, spectacles), contributing to medical bills, and donating prosthetic legs.',
    fullDescription: 'Good health is foundational for developmental growth and prosperous communities. Drawing inspiration from the Ruparelia Foundation, we organize free neighborhood health camps featuring eye screenings, free glasses distribution, and cataract surgeries. Additionally, we renovate local medical wards, contribute toward crucial hospital equipment, and distribute custom prosthetic legs to restore mobility to disabled community members.',
    objectives: [
      'Organize comprehensive community health camps providing cataract operations, eye care, and glasses.',
      'Support families with emergency financial aid to settle outstanding intensive medical bills.',
      'Partner with hospital units to support pediatric ward renovations and donate medical equipment.',
      'Procure and distribute prosthetic legs and mobility aids to disabled youth and adults.'
    ],
    keyOutcomes: [
      'Conducted 8 free health camps, providing eye screenings and free spectacles to 8,400 patients.',
      'Directly sponsored 125 successful sight-restoring cataract surgeries.',
      'Donated custom prosthetic limbs to 42 children and adults, restoring their mobility.',
      'Contributed equipment and supplies to renovate 3 major regional pediatric clinics.'
    ],
    targetBeneficiaries: 'Disabled individuals, impoverished patients requiring sight surgeries, and marginalized communities without healthcare access.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Eye Patients Screened', value: '8,400+' },
      { label: 'Cataract Surgeries', value: '125' },
      { label: 'Prosthetic Limbs Donated', value: '42' }
    ],
    impactStory: 'Following our free community medical camp, elderly Jajja received sight-restoring cataract surgery, enabling her to safely care for her school-age grandchildren.'
  },
  {
    id: 'community',
    title: 'Community Development',
    slug: 'community-development',
    iconName: 'Building2',
    shortDescription: 'Constructing robust community halls, drilling deep bores, and co-creating local child-welfare councils for self-governance.',
    fullDescription: 'Nonprofit initiatives must leave behind self-sustaining infrastructure. Through Community Development, we cooperatively construct multi-purpose youth community structures, engineer deep solar-powered boreholes, and establish parent-teacher governance. This ensures community-led project development operates independently after our direct support concludes.',
    objectives: [
      'Drill modern, solar-pumped village boreholes to secure safe drinking water pools.',
      'Construct multi-functional centers that serve as schools, evening clinics, and crisis community hubs.',
      'Establish community-led Child Protection boards of parents, village elders, and local teachers.',
      'Train neighborhood young leaders in vocational skills, clean energy maintenance, and leadership.'
    ],
    keyOutcomes: [
      'Drilled 110 clean drinking water bores, securing hydration for 60,000 families.',
      'Built 22 multi-purpose regional meeting centers.',
      'Helped local safety boards achieve total administrative independence in 48 districts.',
      'Graduated 450 local youth from professional water-pump maintenance vocational schools.'
    ],
    targetBeneficiaries: 'Underdeveloped remote neighborhoods and villages needing water and civic infrastructure.',
    image: 'https://images.unsplash.com/photo-1541976590-7139414bc57d?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Solar Wells', value: '110' },
      { label: 'Center Hubs Open', value: '22' },
      { label: 'Trained Mechanics', value: '450' }
    ],
    impactStory: 'Drilling the solar well saved girls from walking 8 miles for water daily, immediately raising girls\' school attendance by 93%.'
  },
  {
    id: 'conservation',
    title: 'Wildlife & Environment Conservation',
    slug: 'wildlife-environment-conservation',
    iconName: 'Leaf',
    shortDescription: 'Preserving natural habitats, collaborating with chimpanzee sanctuaries (Ngamba Island), funding animal feeds, and acquiring habitat land.',
    fullDescription: 'Our environment and natural heritage are directly linked to community livelihoods. In alignment with the Ruparelia Foundation model, we partner with specialized wildlife sanctuaries (including the Ngamba Island Chimpanzee Sanctuary) to fund veterinary operations, secure wildlife corridors via strategic land acquisitions, feed rescued chimpanzees, and drive reforestation projects.',
    objectives: [
      'Provide core funding for chimpanzee feeding, nutrition, and rehabilitation in protected sanctuaries.',
      'Sponsor community-led tree planting campaigns to restore native high-altitude rainforest borders.',
      'Coordinate with regional wildlife authorities to protect endangered species and natural habitats.',
      'Equip school-age youth clubs with conservation knowledge through guided sanctuary field programs.'
    ],
    keyOutcomes: [
      'Directly funded chimpanzee nutrition and medical care for 52 rescued primates at Ngamba Island.',
      'Acquired and legally designated 120 acres of high-biodiversity corridor woodland.',
      'Planted 85,000 indigenous trees across degraded water catchment buffer areas.',
      'Engaged 6,400 students in active outdoor conservation learning networks.'
    ],
    targetBeneficiaries: 'Endangered animal species, protected conservation sanctuaries, and communities bordering wilderness zones.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Primates Cared For', value: '52' },
      { label: 'Habitat Acres Secured', value: '120' },
      { label: 'Trees Planted', value: '85K' }
    ],
    impactStory: 'Secured veterinary critical care and food supplies for orphaned chimps, safeguarding vital East African primate biodiversity.'
  },
  {
    id: 'sports',
    title: 'Sports & Youth Talents',
    slug: 'sports-youth-talents',
    iconName: 'Trophy',
    shortDescription: 'Supporting and organizing community sports initiatives, soccer tournaments, annual charity marathons, and coaching pathways.',
    fullDescription: 'Sports serve as a powerful catalyst for teamwork, self-discipline, and community mobilization. Our Sports & Youth Talents sector sponsors region-wide charity marathons, establishes local soccer academies, supplies equipment to underserved schools, and hosts soccer tournaments to foster youth leadership and drive positive development.',
    objectives: [
      'Organize and host annual community-wide charity marathons to raise development awareness.',
      'Establish school sports leagues and equip vulnerable rural schools with complete sporting gear.',
      'Sponsor coaching pathways for high-potential players to qualify for professional leagues.',
      'Build localized sports courts and recreational structures in high-density urban areas.'
    ],
    keyOutcomes: [
      'Facilitated 12 major youth football tournaments with over 4,800 active competitors.',
      'Distributed professional-grade athletic kits to 75 underserved regional schools.',
      'Enrolled 310 high-potential adolescent athletes in elite skill mentoring programs.',
      'Sponsored 4 annual fundraising marathons, raising critical local social project funds.'
    ],
    targetBeneficiaries: 'Adolescent youth, village community sports clubs, and school athletic initiatives.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Tournament Players', value: '4.8K+' },
      { label: 'Schools Equipped', value: '75' },
      { label: 'Charity Marathons', value: '4' }
    ],
    impactStory: 'Our annual football tournament provided a clear constructive pathway for local youth, fostering district pride and reducing neighborhood dropouts.'
  },
  {
    id: 'creative',
    title: 'Creative Arts & Youth Startups',
    slug: 'creative-arts-youth-startups',
    iconName: 'Music',
    shortDescription: 'Nurturing young artistic talents, establishing community music recording studios, and fueling innovative startup micro-grants.',
    fullDescription: 'Underprivileged youth possess incredible untapped creative and entrepreneurial potential. Our Creative Arts & Youth Startups program provides equipment, coaching, and a professional-grade music recording studio for talented youth. Combined with startup incubation resources, seed grants, and digital skill bootcamps, we support young creators and tech-driven builders in turning talent into sustainable livelihoods.',
    objectives: [
      'Run a free-to-use neighborhood recording studio with mixing consoles for young musicians.',
      'Host artistic showcases and talent search events to connect youth with professional managers.',
      'Sponsor startup incubation bootcamps focusing on practical digital marketing and e-commerce.',
      'Distribute creative startup seed grants to help young artists establish independent studios.'
    ],
    keyOutcomes: [
      'Produced and mastered original tracks for 145 emerging local youth artists.',
      'Awarded 62 startup seed micro-grants to youth-led digital and craft ventures.',
      'Facilitated professional arts and audio engineering internships for 80 young creators.',
      'Maintained an active community talent hub supporting digital and practical design projects.'
    ],
    targetBeneficiaries: 'Underprivileged young musicians, digital artists, local craftsmen, and youth entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
    stats: [
      { label: 'Artists Recorded', value: '145' },
      { label: 'Startup Grants', value: '62' },
      { label: 'Vocational Interns', value: '80' }
    ],
    impactStory: 'Through our free studio access and recording mentorship, young artist Ronnie produced his debut track, gaining local radio exposure and a creative career.'
  }
];

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'exec-1',
    name: 'Dr. Helen Vance, PhD',
    role: 'Executive Director & Co-Founder',
    category: 'leadership',
    biography: 'Dr. Vance has dedicated her entire 25-year professional life to leading child advocacy programs. She previously directed international operations at Save the Children East Africa and holds an Honorary Doctorate in International Human Rights and Development from Oxford University. Her vision guides our global mission of strategic development, board transparency, and local empowerment.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    email: 'h.vance@thrivekidsglobal.org',
    socialLinks: { linkedin: 'https://linkedin.com/in/helenvance-thrivekids', twitter: 'https://twitter.com/helen_v_kids' }
  },
  {
    id: 'exec-2',
    name: 'Marcus Reynolds, CPA',
    role: 'Chief Program & Financial Officer',
    category: 'leadership',
    biography: 'Marcus is a dual-qualified financial expert and certified public accountant with 18 years of executive non-profit administration. He spent a decade auditing global humanitarian finances with Deloitte and oversees all finance transparency, ensuring 87% of all received funds flow directly to child support operations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    email: 'm.reynolds@thrivekidsglobal.org',
    socialLinks: { linkedin: 'https://linkedin.com/in/mreynolds-cpa' }
  },
  {
    id: 'board-1',
    name: 'Ambassador Daniel K. Choi',
    role: 'Chairperson of the Board',
    category: 'board',
    biography: 'Ambassador Choi has spent 30 years in diplomatic service with the UN Advisory Council and served as special envoy for children’s welfare in South Asia. He guarantees our operations remain accountable to state regulatory systems and align with UNICEF’s core sustainable objectives.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    email: 'd.choi@thrivekidsglobal.org',
    socialLinks: { linkedin: 'https://linkedin.com/in/dchoi-un' }
  },
  {
    id: 'board-2',
    name: 'Sarah Jenkins-Hume, JD',
    role: 'Chair of Governance & Safeguarding Policy',
    category: 'board',
    biography: 'Sarah is an expert child defense attorney and human rights scholar. She serves as legal advisor to our board, authoring our Child Safeguarding and anti-exploitation frameworks which are studied by global non-profits.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    email: 's.hume@thrivekidsglobal.org',
    socialLinks: { linkedin: 'https://linkedin.com/in/sarahjhume' }
  },
  {
    id: 'advisor-1',
    name: 'Dr. Kwame Mensah, MD',
    role: 'Senior Pediatric Advisor',
    category: 'advisor',
    biography: 'Dr. Mensah directs global pediatric nutrition research at Accra Medical Center. He supervises our severe acute malnourishment programs, designing clinical-grade recipes and immunization guides for remote populations.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    email: 'k.mensah@thrivekidsglobal.org',
    socialLinks: { twitter: 'https://twitter.com/kwamepediatrics' }
  },
  {
    id: 'manager-1',
    name: 'Laila Al-Jamil',
    role: 'Director of Education Programs',
    category: 'manager',
    biography: 'Laila has 12 years of hands-on program management in refugee education camps. She holds an Ed.M. in Curriculum Design and translates educational funds into actual literacy labs, tutoring networks, and modern schools.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=400',
    email: 'l.jamil@thrivekidsglobal.org',
    socialLinks: { linkedin: 'https://linkedin.com/in/laila-jamil-edu' }
  }
];

export const INITIAL_SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    title: 'Amina\'s Horizon: From Forced Labor to Village Scholar',
    coverImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600',
    childOrFamilyName: 'Amina & the Diallo Family',
    challenge: 'Amina was forced to quit school at age 11 to break stones in a local quarry to support her mother. Her father had passed, and the family’s daily income was under US$1.20, leaving them facing severe acute starvation and child marriage pressure.',
    intervention: 'Our staff enrolled Amina in our Education Support database, providing a full tuition scholarship and school uniforms. We concurrently registered her mother in the Family Strengthening program, funding a micro-grant to establish a rural food kiosk and livestock ownership.',
    outcome: 'Amina completed high school at the top of her class and became her community\'s first female university applicant. She is studying medicine. Her mother’s shop is thriving, securing three full daily meals for everyone.',
    relatedProgramId: 'education',
    date: '2026-04-12',
    readsCount: 2450
  },
  {
    id: 'story-2',
    title: 'Daniel\'s Safety: Escaping Hazard to Find Safe Haven',
    coverImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
    childOrFamilyName: 'Daniel, Age 9',
    challenge: 'Daniel was smuggled into a hazardous weaving factory where he worked 14-hour shifts in hot, unventilated rooms for nominal pay, sustaining numerous chronic respiratory infections and untreated burn scars.',
    intervention: 'Our local Child Protection council raided the illegal site with police help and brought Daniel to our Hope Shelter. Here, he received medical care, psychological counseling, and nutrition. We located his grandmother and helped secure formal custody papers and guardianship support.',
    outcome: 'Daniel was enrolled in full schooling and has spent two years living safely with his grandmother. He is healthy and participates in community sports programs, with school fees fully covered by our sponsor program.',
    relatedProgramId: 'protection',
    date: '2026-02-15',
    readsCount: 1820
  },
  {
    id: 'story-3',
    title: 'Nourishing Joy: Overcoming Severe Malnourishment',
    coverImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600',
    childOrFamilyName: 'The Mwangi Twins (Liam & Noah)',
    challenge: 'At just 14 months old, twins Liam and Noah suffered from acute muscle-wasting malnutrition (marasmus) due to localized drought. Their mother had search-walked miles every day with no success in finding clean food or water.',
    intervention: 'A ThriveKids mobile clinic identified the family, and the twins were received into our intense Health & Nutrition inpatient ward. Here, they were stabilized with clinical electrolytes and fed therapeutic peanut formulas. We concurrently drilled a deep solar well in their home village.',
    outcome: 'Within five months, the twins returned to healthy weight and development. Their village now enjoys robust water, which allows their parents to grow vegetables to sustain their kids through droughts.',
    relatedProgramId: 'health',
    date: '2026-05-01',
    readsCount: 3110
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Global Audit Verifies ThriveKids Achieved 87% Direct Impact Efficiency',
    content: 'We are incredibly proud to share that our recent global financial audits verified that 87.2% of all donor contributions went directly into operational programs for vulnerable children and families last year. This puts our foundation among the top tier of transparent international nonprofits, receiving superior ratings for administrative efficiency and board governance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    date: '2026-05-24',
    author: 'Chief Financial Officer Marcus Reynolds',
    category: 'Update',
    tags: ['Transparency', 'Audit', 'Governance']
  },
  {
    id: 'news-2',
    title: 'ThriveKids Partners with Global Tech Consortium for Girls Code Initiatives',
    content: 'We have secured a landmark capital partner coalition with major technology providers to construct and launch 15 solar-powered tech classrooms across semi-arid African schools. This program aims to teach 10,000 teenage girls coding, systems design, and digital entrepreneurship by 2030.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    date: '2026-05-18',
    author: 'Laila Al-Jamil',
    category: 'Press Release',
    tags: ['Education', 'Partnership', 'Solar Classrooms']
  },
  {
    id: 'news-3',
    title: 'Safeguarding Framework Awarded International Best Practices Seal',
    content: 'Our comprehensive Child Safeguarding and Protection Policy, which enforces strict screening for all staff and volunteers, was selected as a global masterclass model by the International NGO Advisory Forum. We are making our complete legal charter downloadable to support other charities in protecting kids.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600',
    date: '2026-04-30',
    author: 'Sarah Jenkins-Hume, JD',
    category: 'Announcement',
    tags: ['Safeguarding', 'Ethics', 'Policy']
  }
];

export const INITIAL_EVENTS: FoundationEvent[] = [
  {
    id: 'event-1',
    title: 'Annual Gala for Hope & Resilience 2026',
    description: 'Join corporate sponsors, civic leaders, and special guest speakers in London or online. All ticket sales fund child rescue centers.',
    date: '2026-09-15',
    time: '18:00 BST',
    location: 'Park Lane Hilton Hall, London & Online Broadcast',
    category: 'Fundraiser',
    spotsLeft: 45
  },
  {
    id: 'event-2',
    title: 'Volunteer Induction & Safeguarding Certification Workshop',
    description: 'An interactive seminar for all newly registered volunteers. Includes legal background validation training and safeguarding standards.',
    date: '2026-06-25',
    time: '14:00 UTC',
    location: 'Interactive Digital Hub Zoom Meeting Room',
    category: 'Workshop',
    spotsLeft: 120
  },
  {
    id: 'event-3',
    title: 'Community Borehole Construction Launch Event',
    description: 'Celebrate with our engineering staff as we switch on the new solar borehole pump system, delivering clean water to 800 children.',
    date: '2026-07-04',
    time: '10:00 LocalTime',
    location: 'Ngong District Well site',
    category: 'Community',
    spotsLeft: 0
  }
];

export const INITIAL_REPORTS: NonprofitReport[] = [
  {
    id: 'rep-1',
    title: '2025 Annual Impact Reflection & Accomplishment Assessment',
    year: 2025,
    category: 'annual',
    fileSize: '4.8 MB PDF',
    description: 'Independent program evaluations, key metric tables, and country performance reviews.'
  },
  {
    id: 'rep-2',
    title: 'Audited Financial Statement & IRS 990 Equivalence Sheet',
    year: 2025,
    category: 'financial',
    fileSize: '3.2 MB PDF',
    description: 'Detailed analysis of incoming direct donations, corporate sponsorship, global grants, and programmatic spending.'
  },
  {
    id: 'rep-3',
    title: 'Child Safeguarding and Anti-Violence Ethical Conduct Policy',
    year: 2026,
    category: 'safeguarding',
    fileSize: '1.2 MB PDF',
    description: 'Mandatory background verification protocols, school counseling standards, and incident management pathways.'
  },
  {
    id: 'rep-4',
    title: 'Rural Micro-Business and Livelihood Resilience Longitudinal Review',
    year: 2025,
    category: 'research',
    fileSize: '5.4 MB PDF',
    description: 'A five-year tracking study showing how women-led micro-business loans affect children’s health and education outcomes.'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Literacy Hour inside Our Solar Container Library',
    description: 'First-graders reading educational books in a safe, fully illuminated evening community room.',
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gal-2',
    title: 'Rapid Medical Health Examination',
    description: 'Pediatric staff evaluating infants and administering vaccines at the temporary Nairobi mobile health clinic.',
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gal-3',
    title: 'Drilling the Clean Solar Pump water array',
    description: 'Our civil engineers together with locals completing installation of the solar-powered community borehole.',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1541976590-7139414bc57d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gal-4',
    title: 'Emergency Safeguarding Counsel Circles',
    description: 'Providing a safe space, counseling support, and legally safeguarding youth in the district.',
    category: 'protection',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gal-5',
    title: 'Cooperative Baking Loan graduation day',
    description: 'Single mothers celebrating completion of their commercial culinary skill training programs.',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gal-6',
    title: 'Annual Youth Science & Innovation Fair',
    description: 'Scholarship children sharing clean energy windmill designs inside the local community science competition.',
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400'
  }
];

export const INITIAL_PARTNERS = [
  { name: 'Global Health Coalition', logo: '🏥' },
  { name: 'Meridian Capital Group', logo: '💳' },
  { name: 'Unilever Aid Platform', logo: '🌱' },
  { name: 'Horizon Solar Solutions', logo: '⚡' },
  { name: 'British Aid Council', logo: '🇬🇧' },
  { name: 'Nairobi Health Board', logo: '🇰🇪' }
];

export const GEOGRAPHIC_IMPACT = [
  {
    id: 'sub_saharan',
    region: 'Sub-Saharan Africa',
    schoolsSupported: 120,
    childrenSupported: '112,000+',
    boreholesBuilt: 82,
    clatitude: 45, // visual svg coordinates
    clongitude: 55,
    mainFocus: 'Nutrition, Water Access, Primary Education & Safeguarding Policy.'
  },
  {
    id: 'south_asia',
    region: 'South Asia',
    schoolsSupported: 85,
    childrenSupported: '74,000+',
    boreholesBuilt: 28,
    clatitude: 40,
    clongitude: 72,
    mainFocus: 'Girls Literacy, Legal Birth Document Registrations & Child-Marriage Deflection.'
  },
  {
    id: 'latin_america',
    region: 'Latin America & Caribbean',
    schoolsSupported: 42,
    childrenSupported: '38,000+',
    boreholesBuilt: 0, // rural farming kits
    clatitude: 65,
    clongitude: 28,
    mainFocus: 'Mothers Micro-Loans, Psychological Counseling & Emergency Storm Haven services.'
  }
];

export const FAQS = [
  {
    question: 'How does ThriveKids Global secure the privacy and security of sponsored children?',
    answer: 'We maintain strict compliance with our UNICEF-validated Child Safeguarding Policy. We never publish child surnames, specific geolocation coordinates, or personal school locations publically. Our messages and letter systems are managed internally in our legal portal to shield youths from online exploitation.'
  },
  {
    question: 'What portion of my financial contribution directly finances field projects?',
    answer: 'A remarkable 87.2% of all expenses go directly to core fields (nutritional feeding, teacher pay, building boreholes, crisis shelters, and medical packs). Under 10% supports critical operations and compliance audits, with under 3% funding public outreach and donation platforms.'
  },
  {
    question: 'How frequently does your foundation publish audited financial reports?',
    answer: 'We publish full accredited financial statements and IRS declarations online within 90 days of the fiscal year’s close (by April 30th annually). These reports are prepared by independent certified external trustees.'
  },
  {
    question: 'Can I apply for a professional role or field volunteering in remote centers?',
    answer: 'Absolutely. We review skills-based applications quarterly. All program staff, physical volunteers, and partner consultants must pass background checks, complete child protection screening, and agree to our absolute Code of Ethics.'
  }
];
