import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <section className="bg-[#111111]">
      <Container>
        <SectionTitle
          heading="My Skills"
          subHeading="Technologies I Worked With"
        />

        {/* main content start */}
        <section></section>
      </Container>
    </section>
  );
};

export default Skills;
