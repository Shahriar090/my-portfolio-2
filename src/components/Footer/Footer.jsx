import Container from "../../shared/Container";
import { links } from "./SocialLinksSm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-[#111111] border-t-4 border-[#333]">
      <Container>
        <footer>
          <aside className="flex justify-center flex-col">
            <div className="socials text-[#707070] flex  justify-center  space-x-5">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.child}</a>
                </li>
              ))}
            </div>
            {/* bar div */}
            <div className="w-28 h-1 rounded-md bg-[#707070] mx-auto my-10"></div>
            <div className="flex flex-col text-center text-[#707070] text-lg">
              <p>&copy; {currentYear}</p>
              <p>All Rights Reserved By Mohammad Shahriar Hossain</p>
            </div>
          </aside>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
