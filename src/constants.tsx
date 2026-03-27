import { Share2, Users, Zap, Heart, Clock, Layout, PenTool, Monitor, Printer, Globe, Video, Image, Layers } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Ananthula Thanvi",
  initials: "AT",
  title: "communication design student",
  email: "thanvianathula0@gmail.com", 
  socials: {
    linkedin: "https://www.linkedin.com/in/thanvi-ananthula-206570323",
    behance: "https://www.behance.net/thanviananthula1"
  }
};

export const SKILLS = {
  soft: [
    { name: "Communication", icon: Share2 },
    { name: "Leadership", icon: Users },
    { name: "Teamwork & Collaboration", icon: Users },
    { name: "Adaptability", icon: Zap },
    { name: "Empathy", icon: Heart },
    { name: "Time Management", icon: Clock }
  ],
  technical: [
    { name: "Graphic Design", icon: PenTool },
    { name: "Branding Design", icon: Layout },
    { name: "Print Design", icon: Printer },
    { name: "Web Design", icon: Globe }
  ],
  software: [
    { name: "Adobe Illustrator", icon: PenTool },
    { name: "Adobe Photoshop", icon: Image },
    { name: "Adobe Premiere Pro", icon: Video },
    { name: "Adobe After Effects", icon: Layers },
    { name: "Adobe InDesign", icon: Layout },
    { name: "Adobe Express", icon: Zap }
  ]
};

export const PROJECTS = [
  {
    id: 'typography',
    title: "Typography",
    category: "Typography",
    description: "Exploration of typefaces and font development.",
    image: "https://i.ibb.co/V0BSccGM/Screenshot-5.png",
    overview: "The Thanvi typeface is a contemporary sans-serif font family designed and developed using FontLab. Created as a personal typographic exploration, the font reflects clarity, versatility, and structural precision. The family includes multiple weights and styles—Extra Light, Light, Regular, Bold, Black, Italic, Bold Italic, Condensed, and Expanded—making it adaptable across print and digital applications. The design emphasizes legibility while maintaining a clean, modern aesthetic suitable for branding and editorial contexts.",
    concept: "The concept behind Thanvi was to design a typeface that balances minimalism with flexibility. Inspired by modern geometric forms and systematic typography, the letterforms are constructed with consistent stroke modulation and balanced proportions. The variations in width (Condensed and Expanded) and weight allow the typeface to function as a complete visual communication system rather than a single style. Naming the font after myself transforms it into an extension of my design identity—strong, adaptable, and structured yet expressive.",
    processImages: [
      "https://i.ibb.co/bjmrQp0K/Screenshot-2026-03-03-094027.png",
      "https://i.ibb.co/20rD2rhW/Screenshot-2026-03-03-094202.png",
      "https://i.ibb.co/WN5QChbP/Screenshot-2025-11-11-225908.png",
    ],
    outcomeText: "The final outcome is a cohesive and functional font family that demonstrates technical understanding of typography, weight distribution, spacing, and stylistic variation. The typeface performs effectively across different weights without losing its character, ensuring readability and visual harmony. This project strengthened my knowledge of type anatomy, kerning, and font production workflows in FontLab. Thanvi stands as both a personal branding element and a professional exploration into type design within communication design practice.",
    outcomeImage:"https://i.ibb.co/cSwKfXrq/Screenshot-2026-03-03-141241.png",
    tools: ['Illustrator', 'Photoshop', 'InDesign']
  },
  {
    id: 'kutch-weaving',
    title: "Kutch Weaving: The Art of Threads",
    category: "Typography",
    description: "Documentation and exploration of traditional handloom craft.",
    image: "https://i.ibb.co/tMVncJGT/Screenshot-2026-02-24-000821.png",
    overview: "This document is an exploration of Kutch weaving, a traditional handloom craft that has flourished in the arid yet culturally vibrant region of Kutch, Gujarat. It is celebrated for its complex patterns, vivid colors, and symbolic motifs.",
    concept: "Kutch weaving is not merely a textile art; it is a narrative of heritage, passed down through skilled hands and keen eyes. Each piece is a testament to the weaver’s mastery, patience, and deep connection to tradition.",
    processImages: [
      "https://i.ibb.co/jksvwKnT/Whats-App-Image-2026-02-24-at-12-12-16-AM.jpg",
      "https://i.ibb.co/60s1vYbw/Whats-App-Image-2026-03-03-at-3-08-07-PM.jpg" ,
      "https://i.ibb.co/rGHMK9VX/Whats-App-Image-2026-03-03-at-3-08-07-PM-1.jpg",
    ],
    outcomeText: "The project resulted in a coordinated set consisting of a table runner and four matching table mats, showcasing attention to detail, design harmony, and functional aesthetics. The final outcome also included a thoughtfully designed book documenting the entire process, concept development, material exploration, and final execution, presenting the work in a comprehensive and professionally curated format.",
    flipbookIframe: "https://online.anyflip.com/knrak/tplk/index.html",
    tools: ['Handloom', 'Charkha', 'Bobbin winder', 'Shuttle']
  },
  {
    id: 'louise-fili',
    title: "Louise Fili: Golden Glyphs",
    category: "Typography",
    description: "Pioneering graphic design and typography exploration.",
    image: "https://i.ibb.co/1JJqTwBz/Chat-GPT-Image-Mar-5-2026-08-23-59-AM.png",
    overview: "Louise Fili is a pioneering American graphic designer, typographer, and art director celebrated for her sophisticated use of type and timeless visual style. Her work blends modernist principles with European Art Deco and Italian influences, creating a visual language that feels both nostalgic and contemporary.",
    concept: "Specializing in restaurant identities, food packaging, and branding, Fili emphasizes that typography is more than decoration—it is the foundation of a brand’s personality and tone. Her studio, Louise Fili Ltd., has created memorable branding for internationally recognized companies.",
    processImages: [
      "https://i.ibb.co/Rpvswbg0/Louise-fili2.png",
      "https://i.ibb.co/RW6zYcH/upscaled-open-magazine-mockup-on-textured-surface-for-elegant-print-design-presentation-0566-1.png",
      "https://i.ibb.co/PZGf185k/Louise-fili4.png",
    ],
    outcomeText: "Fili has designed nearly 2,000 book covers and authored over twenty books, including Elegantissima and Graphique de la Rue. She also developed iconic typefaces like Montecatini, Mardell, and Marseille, blending historic techniques with modern design.",
    flipbookImages: [
      "https://i.ibb.co/1JJqTwBz/Chat-GPT-Image-Mar-5-2026-08-23-59-AM.png", // Page 1: Cover
      "https://i.ibb.co/Rpvswbg0/Louise-fili2.png", // Page 3: About
      "https://i.ibb.co/PZGf185k/Louise-fili4.png", // Page 4: Typefaces
      "https://i.ibb.co/RW6zYcH/upscaled-open-magazine-mockup-on-textured-surface-for-elegant-print-design-presentation-0566-1.png", // Page 5: Logos/Packaging
      "https://i.ibb.co/9kR1wXSJ/blank-magazine-mockup-on-soft-texture-background-for-design-presentation-purposes-0659.jpg" // Page 8: Back Cover
    ],
    flipbookIframe: "https://online.anyflip.com/knrak/ysbr/index.html",
    tools: ['Lettering', 'Typography', 'Branding', 'Book Design']
  },
  {
    id: 'god-of-small-things',
    title: "The God of Small Things",
    category: "Typography",
    description: "Book cover and editorial illustration project.",
    image: "https://i.ibb.co/23SyfGWX/1000017284.png" ,
    overview: "This project involves a redesign of Arundhati Roy's Booker Prize-winning novel 'The God of Small Things'. The brief required bringing the story alive in two formats: an editorial interpretation of a real-world article and a redesign of the fiction title, linked by a unified headline.",
    concept: "The concept focuses on creating a cohesive visual narrative that bridges editorial illustration and book cover design. By using abstract and symbolic imagery, the design aims to capture the essence of the novel's themes while maintaining a consistent typographic identity across both formats.",
    processImages: [
      "https://i.ibb.co/23sQTkth/Untitled45.png",
      "https://i.ibb.co/23SyfGWX/1000017284.png" ,
      "https://i.ibb.co/HyZZP2j/cover-page-tgost.png",
    ],
    outcomeText: "The final outcome is a unified visual identity that successfully links the editorial and book cover components. The illustrations use a rich, symbolic palette to evoke the atmosphere of the story, creating an engaging and emotionally resonant experience for the reader.",
    outcomeImage: "https://i.ibb.co/gLVv7TX7/Chat-GPT-Image-Mar-5-2026-08-51-10-AM.png",
    tools: ['Illustration', 'Typography', 'Editorial Design', 'Book Design']
  },
  {
    id: 'valli-the-vines',
    title: "Valli: The Vines",
    category: "Typography",
    description: "Freehand Telugu font family inspired by grape vines.",
    image: "https://i.ibb.co/tw4WhBw7/Screenshot-2026-02-23-235245.png",
    overview: "This project involved creating a freehand alphabet/font family with characteristics from nature, specifically inspired by a grape vine. The brief required studying the form and characteristics of the vine—stem, root, fruit, flower, bud, tendrils, leaf, and branch—to create a type family that adapts and emotes a specific theme.",
    concept: "The font was created in Telugu script, inspired by the physical characteristics of a grape vine. The Telugu script was chosen because its letters are both curved and structured, mirroring the organic yet defined growth of a vine.",
    processImages: [
      "https://i.ibb.co/S49y7b9q/Screenshot-2026-02-23-235052.png",
      "https://i.ibb.co/WNpYthkv/Screenshot-2026-02-23-235109.png",
      "https://i.ibb.co/MkFGmqD1/Screenshot-2026-02-23-235131.png",
    ],
    outcomeText: "The result is a unique Telugu font family that captures the essence of the grape vine. Each character reflects the organic curves and structural integrity of the plant, creating a harmonious blend of nature and typography.",
    outcomeImage: "https://i.ibb.co/bMPfkX8X/Screenshot-2026-03-06-021408.png",
    tools: ['Typography', 'Lettering', 'Telugu Script', 'Illustration']
  },
  {
    id: 'scripts-emotions',
    title: "Scripts & Emotions",
    category: "Research",
    description: "Generational interpretation of multilingual scripts.",
    image: "https://i.ibb.co/QtMWL0y/AS-1.png",
    overview: "Typography plays a crucial role in multilingual communication. This research addresses the limited understanding of how different age groups emotionally perceive script variations. The study aims to identify generational differences in script perception to support inclusive typographic design.",
    concept: "The research questions the emotional impact of script variations. It explores how visual cues like rhythm, symmetry, and spacing shape emotional interpretation, noting that younger audiences derive symbolic meaning while older groups rely on perceptual frameworks.",
    processImages: [
     "https://i.ibb.co/MDNVQxnw/poster-01.png",
      "https://i.ibb.co/KxFrHRVn/Screenshot-2026-02-23-235500.png",
      "https://i.ibb.co/KxdWGTbY/DR-Page-12-Image-0001.jpg",
    ],
    outcomeText: "Younger audiences (18-25) showed high emotional engagement and a preference for symbolism. Middle-aged groups (26-45) had mixed engagement, while older adults (46+) preferred clarity and structure. The study recommends integrating multiple scripts and ensuring readability for older viewers.",
    outcomeImage: "https://i.ibb.co/QtMWL0y/AS-1.png",
    tools: ['Surveys', 'Data Analysis', 'Typography']
  },
  {
    id: 'sleepy-owl-motion',
    title: "Sleepy Owl: Kinetic Branding",
    category: "Motion Design",
    description: "Logo and poster animation for Sleepy Owl Coffee.",
    image: "https://i.ibb.co/qMxBQkcL/AI-Image.png" ,
    overview: "This project explores the intersection of character animation and brand identity. By bringing the 'Sleepy Owl' mascot to life, the animation communicates the brand's core message of energy and alertness through coffee.",
    concept: "The concept focuses on a narrative transition from 'sleepy' to 'awake'. Using smooth vector animations and character-driven storytelling, the motion piece enhances the brand's personality and makes it more relatable to the audience.",
    processImages: [
      "https://i.ibb.co/RT3nx1hB/Screenshot-2026-02-15-155056.png",
      "https://i.ibb.co/STzc2S9/Chat-GPT-Image-Feb-15-2026-04-46-49-PM.png",
      "https://i.ibb.co/8DcM8hbz/Chat-GPT-Image-Feb-15-2026-05-39-01-PM.png",
    ],
    outcomeText: "The final motion graphics piece includes a character-led narrative and a sophisticated logo reveal. It serves as a versatile asset for social media marketing and digital brand presence, effectively capturing the viewer's attention within seconds.",
    outcomeImage: "https://picsum.photos/seed/sleepy-owl-outcome/600/400",
    video: "https://player.vimeo.com/video/1173576415?badge=0&autopause=0&player_id=0&app_id=58479",
    tools: ['After Effects', 'Illustrator', 'Motion Graphics']
  },
];
