import { Share2, Users, Zap, Heart, Clock, Layout, PenTool, Monitor, Printer, Globe, Video, Image, Layers } from 'lucide-react';

const shortFilmCover = "https://i.ibb.co/fVYP7S9F/Poster.png";
const filmIdeation = "https://i.ibb.co/RTScW2X8/Untitled.png";
const filmPrototyping = "https://i.ibb.co/YFgJtx3D/Screenshot-2026-02-05-105112.png";
const filmEditing = "https://i.ibb.co/v4VMzNwG/Screenshot-2026-02-05-120626.png";
const filmConceptRef = "https://i.ibb.co/DfD63QcB/IMG-1488-JPG.jpg";

const goldenGlyphsDevelopment = "https://i.ibb.co/gMtqd6h7/Layout-explo.png";

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
    id: 'louise-fili',
    title: "Golden Glyphs",
    date: "July 2025",
    category: "Editorial & Publication Design",
    description: "Golden Glyphs is an editorial publication that explores the life, work, and typographic philosophy of Louise Fili.",
    image: "https://i.ibb.co/1JJqTwBz/Chat-GPT-Image-Mar-5-2026-08-23-59-AM.png",
    overview: "Golden Glyphs is an editorial publication that explores the life, work, and typographic philosophy of Louise Fili, one of the most influential graphic designers in contemporary typography and branding. The project combines research, editorial design, typography, and visual hierarchy to present her journey, design principles, and iconic works in an engaging publication.",
    problemStatement: "Designing an editorial publication requires balancing large amounts of information with visual clarity. The challenge was to transform extensive research on Louise Fili into a publication that is engaging, easy to navigate, and visually reflects her timeless typographic style while maintaining readability and consistency.",
    objectives: [
      "Design a cohesive editorial publication.",
      "Communicate information through a strong visual hierarchy.",
      "Apply typography as the primary design element.",
      "Create layouts that balance text and imagery.",
      "Develop a publication inspired by Louise Fili's design philosophy."
    ],
    brief: "Create an editorial publication documenting the life, work, and influence of Louise Fili. The publication should present researched content using typography, grids, imagery, and publication design principles while maintaining a consistent visual identity throughout the book.",
    targetAudience: [
      "Graphic Design Students",
      "Typography Enthusiasts",
      "Editorial Designers",
      "Design Educators",
      "Creative Professionals"
    ],
    researchInsights: "The project began with researching Louise Fili's career, design philosophy, typography, branding projects, book covers, and contributions to graphic design. This research helped identify recurring characteristics in her work, including elegant typography, historical influences, refined layouts, and strong visual storytelling. These insights informed the visual direction and editorial structure of the publication.",
    ideationExploration: "The publication was developed through multiple stages of exploration.",
    ideationPoints: [
      "Collected reference material about Louise Fili's work.",
      "Studied editorial publications and typography-focused books.",
      "Created moodboards inspired by Art Deco and Italian design influences.",
      "Explored multiple cover concepts.",
      "Experimented with different grid systems.",
      "Tested typography pairings and page compositions.",
      "Planned information hierarchy before designing the final layouts."
    ],
    designDecisions: {
      intro: "Several design decisions helped shape the publication.",
      items: [
        {
          title: "Typography",
          description: "Typography became the primary visual element, reflecting Louise Fili's identity as a typographer while establishing hierarchy and rhythm across the publication."
        },
        {
          title: "Grid System",
          description: "A consistent editorial grid was used to organize content, improve readability, and create visual consistency throughout the publication."
        },
        {
          title: "Colour Palette",
          description: "A restrained colour palette was chosen to maintain focus on typography while complementing the historical and elegant nature of the subject."
        },
        {
          title: "Imagery",
          description: "Images of Louise Fili's work were carefully integrated with text to support the narrative without overwhelming the layouts."
        },
        {
          title: "Information Hierarchy",
          description: "Headings, subheadings, pull quotes, captions, and body text were organised to guide readers naturally through each section."
        }
      ]
    },
    prototyping: "The publication evolved through multiple iterations.",
    prototypingPoints: [
      "Thumbnail sketches",
      "Cover exploration",
      "Low-fidelity layouts",
      "Typography testing",
      "Grid refinement",
      "Final page compositions"
    ],
    testingRefinement: "The publication was refined through repeated evaluation of typography, spacing, alignment, and content hierarchy.",
    testingPoints: [
      "Improving page balance.",
      "Adjusting margins and whitespace.",
      "Refining typography hierarchy.",
      "Reorganising content for smoother reading flow.",
      "Maintaining consistency across all spreads."
    ],
    ideationImage: "https://i.ibb.co/Rpvswbg0/Louise-fili2.png",
    designDecisionsImage: "https://i.ibb.co/PZGf185k/Louise-fili4.png",
    ideaImages: [
      "https://i.ibb.co/1Y1tKtVM/lf.jpg",
      "https://i.ibb.co/gZcmtsHX/images.jpg",
      "https://i.ibb.co/j9FjsFFk/elegantissima.webp",
      "https://i.ibb.co/4wrXc02y/Ambessa.webp",
      "https://i.ibb.co/JWLh79cq/Pisellino-Featured-Thumbnail-01.webp",
      "https://i.ibb.co/fVPF6hfX/louise-fili-la-grafica-della-trada-1.jpg"
    ],
    prototypingImage: "https://i.ibb.co/RW6zYcH/upscaled-open-magazine-mockup-on-textured-surface-for-elegant-print-design-presentation-0566-1.png",
    developmentImage: goldenGlyphsDevelopment,
    testingImage: "https://i.ibb.co/1JJqTwBz/Chat-GPT-Image-Mar-5-2026-08-23-59-AM.png",
    concept: "The design concept merges Art Deco and Italian aesthetic influences with a modern grid system to celebrate Louise Fili's enduring typographic craftsmanship.",
    outcomeText: "The final outcome is an editorial publication that presents Louise Fili's life and work through a clean and typography-driven visual language. The publication successfully combines research with editorial design principles, resulting in an informative and visually engaging reading experience.",
    reflectionLearning: "This project strengthened my understanding of editorial design beyond arranging text and images. I learned how typography, grid systems, and information hierarchy work together to shape a reader's experience. It also deepened my appreciation for designing with consistency, restraint, and purpose while translating research into a cohesive visual narrative.",
    flipbookImages: [
      "https://i.ibb.co/1JJqTwBz/Chat-GPT-Image-Mar-5-2026-08-23-59-AM.png",
      "https://i.ibb.co/Rpvswbg0/Louise-fili2.png",
      "https://i.ibb.co/PZGf185k/Louise-fili4.png",
      "https://i.ibb.co/RW6zYcH/upscaled-open-magazine-mockup-on-textured-surface-for-elegant-print-design-presentation-0566-1.png",
      "https://i.ibb.co/9kR1wXSJ/blank-magazine-mockup-on-soft-texture-background-for-design-presentation-purposes-0659.jpg"
    ],
    flipbookIframe: "https://online.anyflip.com/knrak/ysbr/index.html",
    tools: ['Editorial Design', 'Grid Systems', 'Typography', 'InDesign', 'Publication Design']
  },
  {
    id: 'god-of-small-things',
    title: "The God of Small Things",
    date: "August 2025",
    category: "Typography",
    description: "Book cover and editorial illustration project.",
    image: "https://i.ibb.co/23SyfGWX/1000017284.png" ,
    overview: "This redesigned cover for The God of Small Things draws from the novel’s quiet, introspective tone and its deep connection to place. Using a soft, painterly illustration of a lush riverside landscape, the design evokes a sense of memory, stillness, and emotional depth. The muted, earthy color palette and gentle composition reflect the subtle yet complex nature of the story, while the flowing typography mirrors the organic rhythm of the narrative. Overall, the cover aims to capture the beauty of small, fleeting moments that define the essence of the book.",
    concept: "The concept of this cover is centered around capturing the quiet significance of everyday moments, reflecting the core idea of The God of Small Things. The serene riverside scene symbolizes memory, time, and emotional depth, while the lone figure in the boat represents introspection and solitude. The soft, painterly style and muted tones are used to evoke a sense of nostalgia and stillness, visually expressing how seemingly small, fleeting experiences hold profound meaning within the narrative.",
    processImages: [
      "https://i.ibb.co/23sQTkth/Untitled45.png",
      "https://i.ibb.co/23SyfGWX/1000017284.png" ,
      "https://i.ibb.co/HyZZP2j/cover-page-tgost.png",
    ],
    outcomeText: "The outcome is a visually cohesive and immersive cover that brings together illustration, color, and typography to create a unified narrative. The design successfully establishes a strong sense of place and mood, drawing the viewer into a tranquil yet emotionally layered environment. By balancing simplicity with detail, the cover feels refined and intentional, making it suitable for a contemporary literary audience while still preserving the depth and sensitivity of The God of Small Things.",
    outcomeImage: "https://i.ibb.co/gLVv7TX7/Chat-GPT-Image-Mar-5-2026-08-51-10-AM.png",
    tools: ['Illustration', 'Typography', 'Editorial Design', 'Book Design']
  },
  {
    id: 'sleepy-owl-motion',
    title: "Sleepy Owl: Kinetic Branding",
    date: "Feb 2026",
    category: "Motion Design",
    description: "Logo and poster animation for Sleepy Owl Coffee.",
    image: "https://i.ibb.co/0yqvrDsj/images.png",
    overview: "This project explores the intersection of character animation and brand identity. By bringing the 'Sleepy Owl' mascot to life, the animation communicates the brand's core message of energy and alertness through coffee.",
    concept: "The concept focuses on a narrative transition from 'sleepy' to 'awake'. Using smooth vector animations and character-driven storytelling, the motion piece enhances the brand's personality and makes it more relatable to the audience.",
    processImages: [
      "https://i.ibb.co/RT3nx1hB/Screenshot-2026-02-15-155056.png",
      "https://i.ibb.co/VWJJqrMT/Screenshot-2026-03-28-120852.png",
      "https://i.ibb.co/8DcM8hbz/Chat-GPT-Image-Feb-15-2026-05-39-01-PM.png",
    ],
    outcomeText: "The final motion graphics piece includes a character-led narrative and a sophisticated logo reveal. It serves as a versatile asset for social media marketing and digital brand presence, effectively capturing the viewer's attention within seconds.",
    outcomeImage: "https://picsum.photos/seed/sleepy-owl-outcome/600/400",
    video: "https://player.vimeo.com/video/1173576415?badge=0&autopause=0&player_id=0&app_id=58479",
    tools: ['After Effects', 'Illustrator', 'Motion Graphics']
  },
  {
    id: 'is-it-that-simple',
    title: "Is It That Simple?",
    date: "Jan 2026",
    category: "Motion Design",
    description: "Short Film | Editing & Post Production",
    image: shortFilmCover,
    overview: "Is It That Simple? is a student short film that explores the conflict between personal aspirations and the invisible social restrictions that shape everyday decisions. The narrative follows Tara, a college student who is excited to be selected for her first acting role, only to realize that the biggest obstacles are not fictional but exist in her own reality. My role in the project was to edit the film, shaping its pacing, emotional rhythm, and narrative progression to strengthen the audience's connection with Tara's journey.",
    problemStatement: "The story relied on subtle emotional shifts rather than dramatic events. The challenge was to edit the film in a way that gradually transformed the audience's experience from excitement and optimism to emotional restriction and introspection. Every editing decision had to support the protagonist's internal journey while maintaining a natural narrative flow.",
    objectives: [
      "Create an emotionally engaging narrative through editing.",
      "Build a consistent rhythm that reflects the protagonist's emotional journey.",
      "Strengthen the storytelling using pacing, transitions, and visual continuity.",
      "Support the director's vision while enhancing audience engagement."
    ],
    brief: "Develop the final edit of the short film by organising scenes, refining pacing, improving continuity, and shaping the emotional progression of the narrative. The objective was to ensure that every cut contributed meaningfully to the story and reinforced the film's central theme.",
    targetAudience: [
      "Young adults",
      "College students",
      "Audiences interested in character-driven stories",
      "Film festival and academic audiences"
    ],
    researchInsights: "Before beginning the edit, I analysed the screenplay to understand the emotional progression of the story and identify how the pacing should evolve across different scenes. I also studied how silence, pauses, reaction shots, and restrained editing could communicate emotion more effectively than rapid cuts. This helped me maintain the protagonist's perspective throughout the film while allowing the audience to experience her growing emotional conflict.",
    ideationExploration: "The editing process involved experimenting with multiple versions of scenes to understand how different rhythms affected the narrative.",
    ideationPoints: [
      "Rearranging scene durations.",
      "Testing different transition styles.",
      "Experimenting with the length of pauses.",
      "Comparing different pacing structures.",
      "Refining scene order to improve emotional flow."
    ],
    ideationImage: filmIdeation,
    designDecisions: [
      "Repetitive scenes and unnecessary dialogue were trimmed to maintain narrative focus.",
      "Jump cuts were introduced during the waiting sequence to communicate Tara's growing anxiety.",
      "The pacing gradually shifted from open and energetic to slower and emotionally restrained, mirroring the protagonist's internal state.",
      "Silence and carefully timed pauses were used to build emotional tension instead of relying on dramatic visual effects.",
      "Continuity and reaction shots were prioritised to keep the audience emotionally connected with Tara."
    ],
    prototyping: "The edit evolved through multiple iterations.",
    prototypingPoints: [
      "Initial rough cut",
      "Scene restructuring",
      "Director feedback sessions",
      "Refined edit",
      "Final picture lock"
    ],
    prototypingImage: filmPrototyping,
    testingRefinement: "The final edit was refined through continuous collaboration with the director.",
    testingPoints: [
      "Adjusting the duration of pauses.",
      "Reinvolving scene transitions.",
      "Improving continuity.",
      "Balancing the overall pacing.",
      "Making small edits that strengthened emotional impact without disrupting the natural flow of the story."
    ],
    testingImage: filmEditing,
    concept: "The editing concept focuses on character-driven emotional rhythm. Through calculated restraint, pacing shifts, and intentional pauses, the edit mirrors Tara's internal struggle between outward optimism and social restrictions.",
    conceptImage: filmConceptRef,
    processImages: [
      filmIdeation,
      filmPrototyping,
      filmEditing
    ],
    outcomeText: "The completed film presents a character-driven narrative that communicates emotional change through subtle editing choices. Rather than relying on explicit exposition, the final edit encourages the audience to experience the protagonist's journey through rhythm, silence, pacing, and visual storytelling.",
    reflectionLearning: "Working on Is It That Simple? deepened my understanding of editing as a storytelling tool rather than a technical process. I learned that pacing, continuity, and restraint can significantly influence how an audience interprets a story. The project also strengthened my ability to collaborate with a director, iterate on feedback, and make intentional editing decisions that supported both the narrative and the emotional experience.",
    video: "https://www.youtube.com/embed/L2PLx36Q8Qo?si=yMOFen8XNTmXQSV9",
    tools: ['Adobe Premiere Pro', 'Film Editing', 'Color Grading', 'Post Production', 'Pacing & Continuity']
  }
];

