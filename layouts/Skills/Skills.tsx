import skillsData from "./skills.json";
import { iconMap } from "./iconMap";
import { FaCode, FaServer, FaTools, FaLayerGroup } from "react-icons/fa";

interface SkillSet {
  category: string;
  items: string[];
}

const skills: SkillSet[] = skillsData as SkillSet[];

const getCategoryIcon = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes("front")) return FaCode;
  if (lower.includes("back")) return FaServer;
  if (lower.includes("tool") || lower.includes("devops")) return FaTools;
  return FaLayerGroup;
};

const Skills = () => {
  return (
    <section id="skills" className="skills container relative mx-auto my-32 max-sm:px-6 max-w-7xl">
      <div className="placeHolderComponent h-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
            My Skills
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        </div>
        
        <div className="grid w-full gap-8 lg:grid-cols-3">
          {skills.map((skillSet, index) => {
            const CategoryIcon = getCategoryIcon(skillSet.category);
            
            return (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/50 dark:bg-slate-900/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <CategoryIcon />
                </div>
                
                <h3 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {skillSet.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillSet.items.map((skillName, i) => {
                    const IconComponent = iconMap[skillName] || iconMap["default"];
                    
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-900/5 transition-all duration-300 hover:bg-white hover:text-cyan-600 hover:shadow dark:bg-slate-800/50 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                      >
                        <span className="text-lg opacity-80">
                          <IconComponent />
                        </span>
                        <span>{skillName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
