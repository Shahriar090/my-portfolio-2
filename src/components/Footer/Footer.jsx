import Container from "../../shared/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-[#111111] border-t-4 border-[#333]">
      <Container>
        <footer>
          <aside className="flex justify-center">
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
