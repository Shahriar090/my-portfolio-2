import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          {" "}
          LinkeDin <FaLinkedin className="text-2xl" />
        </>
      ),
      href: "https://www.linkedin.com/in/shahriar-hossain-890baa280/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          {" "}
          Facebook <FaFacebookF className="text-2xl" />
        </>
      ),
      href: "https://www.facebook.com/Md.shahriarhossainsiyam",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          {" "}
          Github <FaGithub className="text-2xl" />
        </>
      ),
      href: "https://github.com/Shahriar090",
    },
    {
      id: 4,
      child: (
        <>
          {" "}
          Mail <IoIosMail className="text-2xl" />
        </>
      ),
      href: "mailto:person@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          {" "}
          Resume <SiGoogledocs className="text-2xl" />
        </>
      ),
      href: "",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[60%] left-0 fixed">
      {links.map(({ id, child, href, style, download }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-950 cursor-pointer" +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full text-gray-300"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
      <ul></ul>
    </div>
  );
};

export default SocialLinks;

/* <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800 cursor-pointer">
          <a
            href=""
            className="flex justify-between items-center w-full text-gray-200"
          >
            <>
              LinkeDin <FaLinkedin className="text-2xl" />
            </>
          </a>
        </li> */
