import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ProjectCard from "./ProjectCard";
import Filtering from "./Filtering";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://dashboard-server-ruddy.vercel.app/api/v1/projects"
        );
        if (!res.ok) {
          throw new Error("Failed to load projects data");
        }
        const data = await res.json();
        setProjects(data?.data);
        setFilteredProjects(data?.data);
        setLoading(false);
      } catch (error) {
        console.error(error, "Error fetching projects data");
        setLoading(false);
        //  TODO: add toast to show the error message to user
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects?.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="bg-[#151515]">
      <Container>
        <SectionTitle heading="Portfolio" subHeading="My Recent Works" />

        {/* main content */}
        <section>
          <Filtering onFilterChange={setSelectedCategory} />
          {loading ? (
            <div className="flex items-center justify-center text-[#FF5D56]">
              {" "}
              <p>Loading....</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-[#FF5D56] text-lg font-semibold">
                No Projects Available!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects?.map((project) => (
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
