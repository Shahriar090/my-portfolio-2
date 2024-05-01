// refactor icons
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
export const links = [
  {
    id: 1,
    child: <FaLinkedinIn className="text-2xl" />,
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
    child: <MdAlternateEmail className="text-2xl" />,

    href: "mailto:person@gmail.com",
  },
  {
    id: 5,
    child: <IoNewspaperOutline className="text-2xl" />,

    href: "",

    download: true,
  },
];
