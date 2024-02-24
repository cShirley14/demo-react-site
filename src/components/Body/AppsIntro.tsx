import { SectionIntro } from "./SectionIntro";
import { appsSection } from "../../schemas/profileConstants";

export const AppsIntro = () => (
  <>
    {appsSection.map((s) => (
      <SectionIntro
        key={s.title}
        id="my-projects"
        child={s.child}
        title={s.title}
        description={s.description}
      />
    ))}
  </>
);
