import { SectionIntro } from "./SectionIntro";

import { skillsSection } from "../../schemas/profileConstants";

export const SkillsIntro = () => (
  <>
    {skillsSection.map((s) => (
      <SectionIntro
        key={s.title}
        id="skills-and-technologies"
        child={s.child}
        title={s.title}
        description={s.description}
      />
    ))}
  </>
);
