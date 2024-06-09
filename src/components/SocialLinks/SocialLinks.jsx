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
      href: "https://drive.google.com/file/d/12KoU7IxVEod0_jfFq-1aqlcVzfdaDc8P/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed z-50">
      {links.map(({ id, child, href, style, download }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-black cursor-pointer" +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full text-[#707070]"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </div>
  );
};

export default SocialLinks;
