export type Program = {
  title: string;
  slug: string;
  href: string;
  image: string;
  teaser: string;
  about: string[];
  experienceHeading: string;
  experience: string[];
  why?: string;
  inquiry?: string;
};

export const programs: Program[] = [
  {
    title: "Field Trips",
    slug: "field-trips",
    href: "/programs/field-trips",
    image: "/images/programs/field-trips.jpg",
    teaser:
      "Hands-on STEM experiences that connect classroom learning to real-world tools, careers, and problem-solving.",
    about: [
      "Field trips at the Austin STEM Center (ASC) are immersive, hands-on learning experiences designed to help students see how what they learn in the classroom shows up in the real world. Students explore modern tools, materials, and technologies while engaging with real processes used in manufacturing, engineering, and design.",
      "Field trips are ideal for elementary, middle, and high school groups and are designed to complement classroom learning while sparking curiosity and confidence.",
    ],
    experienceHeading: "What students experience",
    experience: [
      "Guided exploration of ASC's metal shop, wood shop, maker spaces, and labs",
      "Safe interaction with industry tools and machines",
      "Exposure to careers in STEM, skilled trades, and technical fields",
      "Learning that emphasizes curiosity, problem-solving, and how things are made",
    ],
    why: "ASC offers access to tools and environments students rarely see in traditional classrooms. Our field trips are built around real equipment, real processes, and real-world relevance, helping students connect learning to future opportunities.",
    inquiry: "Interested in scheduling an experience with ASC?",
  },
  {
    title: "Summer Camps",
    slug: "summer-camps",
    href: "/programs/summer-camps",
    image: "/images/programs/summer-camps.jpg",
    teaser:
      "Hands-on camps where creativity, STEM, fun, and real-world skills come together.",
    about: [
      "Summer camps at the Austin STEM Center (ASC) are immersive, multi-day experiences that give students the time and space to explore, build, and create. Camps are designed around hands-on projects, collaboration, and experimentation, giving campers the chance to work with real tools and real materials.",
      "Camps are available for a range of age groups and interests, with programming rooted in STEM, design, and making.",
    ],
    experienceHeading: "What campers experience",
    experience: [
      "Project-based learning using real tools and materials",
      "Exposure to engineering, fabrication, design, and technology",
      "Opportunities to test ideas, iterate, and learn through doing",
      "A supportive environment that values curiosity and creativity",
    ],
  },
  {
    title: "Pre-Apprentice Program",
    slug: "pre-apprentice",
    href: "/programs/pre-apprentice",
    image: "/images/programs/pre-apprentice.jpg",
    teaser:
      "Practical, real-world training that builds confidence, capability, and connection to modern tools and processes.",
    about: [
      "The Austin STEM Center (ASC) pre-apprenticeship programs are designed for high school students and young adults eager to explore careers in robotics, automation, advanced manufacturing, and other technical fields. These programs emphasize hands-on learning, practical skill development, and exposure to the in-demand technologies shaping today's workforce.",
      "ASC pre-apprenticeships help individuals build foundational technical skills and identify the career pathways that best fit their interests and strengths.",
    ],
    experienceHeading: "What participants experience",
    experience: [
      "Hands-on training with industry-relevant equipment",
      "Exposure to real manufacturing and technical workflows",
      "Skill development aligned with workforce needs",
      "A clear bridge between education and employment",
    ],
    inquiry: "Interested in the pre-apprentice program?",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    href: "/programs/professional-development",
    image: "/images/programs/professional-development.jpg",
    teaser:
      "Hands-on learning experiences for educators, teams, and organizations.",
    about: [
      "The professional development programs at the Austin STEM Center (ASC) are designed for educators, corporate teams, and organizations looking to build practical skills, improve problem-solving, and better understand modern tools and processes. These experiences move beyond lectures and theory, focusing instead on hands-on learning and real-world application.",
    ],
    experienceHeading: "What participants experience",
    experience: [
      "Interactive workshops using real tools",
      "Training that connects theory to practice",
      "Opportunities to explore how learning, making, and innovation intersect",
      "Experiences tailored to educators, teams, or industry partners",
    ],
    inquiry: "Interested in professional development programming?",
  },
];

export const getProgram = (slug: string) =>
  programs.find((p) => p.slug === slug);
