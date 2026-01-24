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
    <section id="skills" className="skills container relative mx-auto my-32 max-w-7xl max-xl:px-6">
      <div className="relative h-auto overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 sm:p-12 lg:p-16">
        {/* Background Decorative Element */}
        <div className="absolute -left-24 -top-24 z-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-900/10"></div>
        <div className="absolute -bottom-24 -right-24 z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-900/10"></div>

        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
               Technical <br />
               <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">Expertise.</span>
            </h2>
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Broad experience across the modern web stack, focusing on performance, scalability, and robust architectures.
            </p>
          </div>
          
          <div className="grid w-full gap-8 lg:grid-cols-3">
            {skills.map((skillSet, index) => {
              const CategoryIcon = getCategoryIcon(skillSet.category);
              
              return (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <CategoryIcon />
                  </div>
                  
                  <h3 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {skillSet.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {skillSet.items.map((skillName, i) => {
                      const IconComponent = iconMap[skillName] || iconMap["default"];
                      
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                        >
                          <span className="text-base text-cyan-600 dark:text-cyan-400 opacity-80">
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
      </div>
    </section>
  );
};

export default Skills;
