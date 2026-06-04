import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Authoritative Context Base representation
const STRUCTURAL_KNOWLEDGE_BASE = `
You are the official Compliance Auditor and Philanthropy Advisor for ThriveKids Global Foundation.
ThriveKids Global Foundation is a highly respected, internationally registered 501(c)(3) nonprofit digital platform supporting children and vulnerable families.
Your tone should be highly professional, objective, objective yet deeply compassionate, non-commercial, and elite. Keep your responses structured with clean Markdown.

Authoritative Database Resources:
1. Programs:
- Education Support: Provides tuition scholarships, school supplies, tutoring circles, and solar container libraries. Over 1,420 scholarships funded in the latest cycle. 94.2% completion rate.
- Child Protection: Rescues children from abuse, hazardous labor (weaving mills, stone breaking), trafficking, child marriage. Runs emergency sanctuary shelters. Enforces birth registrations.
- Family Strengthening: Reverse poverty through microgrants for mothers, agribusiness start kits (livestock, seeds), savings groups, parent network. Helps 560+ rural businesses.
- Health & Nutrition: Treats malnourishment (severe acute/marasmus) using peanut-paste (RUTF). Delivers school dinners, mobile clinics, solar water pumps/boreholes. Treated 18.2k toddlers.
- Community Development: Solar drilling of 110 clean water wells, village youth centers, training mechanics in pump repair.

2. Governance & Leadership:
- Dr. Helen Vance, PhD: Executive Director & Co-Founder. 25-yr advocate, former Save the Children director, Oxford Hon. Doctorate.
- Marcus Reynolds, CPA: Chief Program & Financial Officer. Ex-Deloitte auditor, guarantees that a remarkable 87.2% of all expenses flow directly to direct program expenditures.
- Sarah Jenkins-Hume, JD: Chair of Governance & Safeguarding Policy. Authors UNICEF-validated Child Safeguarding Frameworks.
- Dr. Kwame Mensah, MD: Senior Pediatric Advisor. Supervises nutrition/clinical-grade treatments.
- Laila Al-Jamil: Director of Education Programs. Ed.M. in Curriculum Design.

3. Audits and Financial transparency:
- 87.2% of all expenses go directly to field projects (uniforms, teachers, well drillings, shelter assets, food packs).
- Under 10% on operation overheads and professional compliance audits.
- Under 3% on fundraising/publicity.
- Direct reporting channels route suggestions/concerns directly to legal representative Sarah Jenkins-Hume, JD, bypassing local site staff.

Always limit your answers to what is described in this profile of ThriveKids, and gracefully decline to answer questions completely unrelated to charity, children support, or the foundation. Give specific numbers when requested (e.g. 87.2% efficiency, 1,420 scholarships, 110 wells, 18.2K toddlers).
`;

// AI Advisor endpoint
app.post('/api/advisor', async (req, res) => {
  try {
    const { message, chatHistory } = req.body;
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const contents = [];
    
    // Convert incoming history structure into Gemini Content structure if present
    if (chatHistory && Array.isArray(chatHistory)) {
      chatHistory.forEach(item => {
        contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.content }]
        });
      });
    }
    
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents,
      config: {
        systemInstruction: STRUCTURAL_KNOWLEDGE_BASE,
        temperature: 0.2,
      },
    });

    const generatedText = response.text || "Compliance advisor holds no further clearance on this specific record.";
    res.json({ text: generatedText });
  } catch (error: any) {
    console.error('Advisor API Exception:', error);
    res.status(500).json({ error: error.message || 'Auditing pipeline error' });
  }
});

// Serve static assets in production or mount Vite middleware in development
const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  }).then((vite) => {
    app.use(vite.middlewares);
  });
} else {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const serverInstance = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Compliance platform online on host 0.0.0.0 port ${PORT}`);
});
