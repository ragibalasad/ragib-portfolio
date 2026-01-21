import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaCode,
  FaTerminal,
  FaPencilRuler,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFlask,
  SiFastapi,
  SiSqlalchemy,
  SiExpress,
  SiJsonwebtokens,
  SiPrisma,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiC,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbServer, TbBrandReactNative } from "react-icons/tb";

export const iconMap: Record<string, React.ElementType> = {
  // Frontend
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "JavaScript": FaJs,
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "UI/UX Design": FaPencilRuler,
  "SSR": TbServer,
  
  // Backend
  "Python": FaPython,
  "Flask": SiFlask,
  "Fast API": SiFastapi,
  "SQL Alchemy": SiSqlalchemy, // Check if exists, else fallback
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "JWT/OAUTH": SiJsonwebtokens,
  "PRISMA ORM": SiPrisma,
  "SQL": FaDatabase,
  "POSTGRESQL": SiPostgresql,
  "SQLITE": SiSqlite,
  "MongoDB": SiMongodb,

  // Tools
  "C": SiC,
  "Shell": FaTerminal,
  "TypeScript": SiTypescript,
  "React Native": TbBrandReactNative,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Linux": FaLinux,
  "Bash": FaTerminal,
  "Vercel": SiVercel,
  "Figma": FaFigma,
  "VS Code": SiVisualstudiocode,
  
  // Default fallback
  "default": FaCode
};
