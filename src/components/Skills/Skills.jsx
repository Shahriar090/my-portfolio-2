import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import SkillBar from "react-skillbars";

const Skills = () => {
  // Separate skills into different categories
  const frontEndSkills = [
    { type: "HTML", level: 85 },
    { type: "CSS", level: 80 },
    { type: "TailwindCSS", level: 80 },
    { type: "Bootstrap", level: 80 },
    { type: "JavaScript", level: 75 },
    { type: "TypeScript", level: 60 },
    { type: "React Js", level: 80 },
    { type: "Redux", level: 60 },
  ];

  const backEndSkills = [
    { type: "Node Js", level: 60 },
    { type: "Express js", level: 60 },
    { type: "MongoDB", level: 60 },
  ];

  const versionControlSkills = [{ type: "Github", level: 70 }];

  return (
    <section id="skills" className="bg-[#111111]">
      <Container>
        <SectionTitle
          heading="My Skills"
          subHeading="Technologies I Worked With"
        />

        <section className="all-skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Front-end skills */}
          <div className="p-5 bg-[#222222] rounded-sm">
            <h2 className="text-xl font-medium text-white pb-3">Front-end</h2>
            <SkillBar
              skills={frontEndSkills}
              colors={{
                bar: "#111111",
                title: { text: "#707070", background: "#111111" },
              }}
              height={"25px"}
            />
          </div>

          {/* Back-end skills */}
          <div className="p-5 bg-[#222222] rounded-sm">
            <h2 className="text-xl font-medium text-white pb-3">Back-end</h2>
            <SkillBar
              skills={backEndSkills}
              colors={{
                bar: "#111111",
                title: { text: "#707070", background: "#111111" },
              }}
              height={"25px"}
            />
          </div>

          {/* Version control skills */}
          <div className="p-5 bg-[#222222] rounded-sm">
            <h2 className="text-xl font-medium text-white pb-3">
              Version Control
            </h2>
            <SkillBar
              skills={versionControlSkills}
              colors={{
                bar: "#111111",
                title: { text: "#707070", background: "#111111" },
              }}
              height={"25px"}
            />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Skills;
