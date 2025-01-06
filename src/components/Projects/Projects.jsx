import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ProjectCard from "./ProjectCard";
import Filtering from "./Filtering";
import { toast } from "react-toastify";
import { useFetch } from "../../hooks/useFetch";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // using custom hook to fetch data
  const {
    data: projects,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_SERVER_URL}/projects`);

  useEffect(() => {
    if (projects) {
      if (selectedCategory === "ALL") {
        setFilteredProjects(projects?.data);
      } else {
        const filtered = projects?.data?.filter(
          (project) => project.category === selectedCategory
        );
        setFilteredProjects(filtered);
      }
    }
  }, [projects, selectedCategory]);

  // handling error
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <section id="projects" className="bg-[#151515]">
      <Container>
        <SectionTitle heading="Portfolio" subHeading="My Recent Works" />

        {/* main content */}
        <section>
          <Filtering onFilterChange={setSelectedCategory} />
          {loading ? (
            <div className="flex items-center justify-center">
              {" "}
              <p className="text-[#FF5D56] text-lg font-semibold">
                Loading....
              </p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-[#FF5D56] text-lg font-semibold">
                No Projects Available!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProjects?.map((project) => (
                <ProjectCard key={project._id} data={project} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </section>
  );
};

export default Projects;
