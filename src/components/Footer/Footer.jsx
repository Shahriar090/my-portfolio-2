import Container from "../../shared/Container";
import { links } from "./SocialLinksSm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-[#111111] border-t-4 border-[#333]">
      <Container>
        <footer>
          <aside className="flex justify-center flex-col">
            {/* social links */}
            <div className="socials text-[#707070] flex  justify-center  space-x-6 lg:hidden">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.child}</a>
                </li>
              ))}
            </div>
            {/* bar div */}
            <div className="w-28 h-1 rounded-md bg-[#333] mx-auto my-10 lg:hidden"></div>
            {/* copyright */}
            <div className="flex flex-col text-center text-[#707070] text-lg gap-1">
              <p>&copy; {currentYear}</p>
              <p>All Rights Reserved By Mohammad Shahriar Hossain</p>
              <p>
                Design Inspiration From{" "}
                <a href="https://awaikenthemes.com/" target="_blank">
                  <span className="font-semibold"> Awaiken Themes</span>
                </a>
              </p>
            </div>
          </aside>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
