/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  slug: string;
  iconName: string; // lucide icon name
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  keyOutcomes: string[];
  targetBeneficiaries: string;
  image: string;
  stats: { label: string; value: string }[];
  impactStory: string;
}

export type TeamCategory = 'leadership' | 'board' | 'advisor' | 'manager';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamCategory;
  biography: string;
  image: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface SuccessStory {
  id: string;
  title: string;
  coverImage: string;
  childOrFamilyName: string;
  challenge: string;
  intervention: string;
  outcome: string;
  relatedProgramId: string;
  date: string;
  readsCount: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: 'Update' | 'Press Release' | 'Announcement' | 'Community Story';
  tags: string[];
}

export interface FoundationEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'Fundraiser' | 'Community' | 'Volunteer' | 'Workshop';
  spotsLeft: number;
}

export interface PartnerInquiry {
  id: string;
  organizationName: string;
  contactName: string;
  email: string;
  partnerType: 'Corporate' | 'NGO' | 'Government' | 'Academic';
  message: string;
  date: string;
}

export interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  skills: string[];
  availability: string;
  message: string;
  status: 'Pending' | 'Reviewed' | 'Approved' | 'Declined';
  date: string;
}

export interface DonationRecord {
  id: string;
  donorName: string;
  email: string;
  amount: number;
  frequency: 'one-time' | 'monthly' | 'annual';
  programId: string; // 'general' or specific program ID
  isAnonymous: boolean;
  date: string;
}

export interface NonprofitReport {
  id: string;
  title: string;
  year: number;
  category: 'annual' | 'financial' | 'safeguarding' | 'research';
  fileSize: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'education' | 'protection' | 'health' | 'community' | 'events';
  imageUrl: string;
}
