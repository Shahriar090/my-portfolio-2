import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import BlogsCard from "./BlogsCard";
import Marquee from "react-fast-marquee";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://dashboard-server-ruddy.vercel.app/api/v1/blogs"
        );
        if (!res.ok) {
          throw new Error("Failed To Load Blogs");
        }
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error(error, "Error Fetching Blogs Data", error);
        setLoading(false);
        //  TODO: add toast to show the error message to user
      }
    };
    fetchData();
  }, []);
  return (
    <section id="blogs" className="bg-[#111111]">
      <Container>
        {/* marquee start */}
        <div className="marquee w-9/12 mx-auto overflow-hidden border border-zinc-700 mb-4 p-2 rounded-md">
          <Marquee className="text-gray-300" speed={50} pauseOnClick={true}>
            The blogs section is currently under development. The blogs you see
            are demo versions.
          </Marquee>
        </div>
        {/* marquee end */}
        <SectionTitle heading="Blogs" subHeading="My Personal Blogs" />

        <section>
          {loading ? (
            <div className="flex items-center justify-center">
              {" "}
              <p>Loading....</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogs?.data?.map((project) => (
                <BlogsCard key={project.id} data={project} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </section>
  );
};

export default Blogs;
