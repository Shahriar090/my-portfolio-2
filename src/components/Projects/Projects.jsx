import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("projectsData.json");
        if (!res.ok) {
          throw new Error("Failed to load projects data");
        }
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.log(error, "Error fetching projects data");
        setLoading(false);
        //  TODO: add toast to show the error message to user
      }
    };
    fetchData();
  }, []);
  return (
    <section className="bg-[#151515]">
      <Container>
        <SectionTitle heading="Portfolio" subHeading="My Recent Works" />

        {/* main content */}
        <section>
          {loading ? (
            <div className="flex items-center justify-center">
              {" "}
              <p>Loading....</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.id} data={project} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </section>
  );
};

export default Projects;
