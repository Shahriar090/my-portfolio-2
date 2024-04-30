import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";

export const links = [
  {
    id: 1,
    child: <FaLinkedin className="text-2xl" />,
    href: "https://www.linkedin.com/in/shahriar-hossain-890baa280/",
  },
  {
    id: 2,
    child: <FaFacebookF className="text-2xl" />,

    href: "https://www.facebook.com/Md.shahriarhossainsiyam",
  },
  {
    id: 3,
    child: <FaGithub className="text-2xl" />,

    href: "https://github.com/Shahriar090",
  },
  {
    id: 4,
    child: <IoIosMail className="text-2xl" />,

    href: "mailto:person@gmail.com",
  },
  {
    id: 5,
    child: <SiGoogledocs className="text-2xl" />,

    href: "",

    download: true,
  },
];
