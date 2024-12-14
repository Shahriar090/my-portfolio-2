import { useEffect } from "react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import BlogsCard from "./BlogsCard";
import Marquee from "react-fast-marquee";
import { useFetch } from "../../hooks/useFetch";
import { toast } from "react-toastify";
const Blogs = () => {
  // using useFetch hook to fetch blogs data
  const {
    data: blogsData,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_SERVER_URL}/blogs`);
  // handling error
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <section id="blogs" className="bg-[#111111]">
      <Container>
        {/* Marquee start */}
        <div className="marquee w-9/12 mx-auto overflow-hidden border border-zinc-700 mb-4 p-2 rounded-md">
          <Marquee className="text-gray-300" speed={50} pauseOnClick={true}>
            The blogs section is currently under development. The blogs you see
            are demo versions.
          </Marquee>
        </div>
        {/* Marquee end */}
        <SectionTitle heading="Blogs" subHeading="My Personal Blogs" />

        <section>
          {loading ? (
            <div className="flex items-center justify-center">
              <p className="text-[#FF5D56] text-lg font-semibold">
                Loading....
              </p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center">
              <p className="text-red-500">
                Failed to load blogs. Please try again.
              </p>
            </div>
          ) : blogsData?.data?.length === 0 ? (
            <div className="text-gray-400 text-center">
              <p>No blogs available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {blogsData?.data?.map((project) => (
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
