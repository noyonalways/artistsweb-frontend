import Footer from "@/shared/footer";
import Navbar from "@/shared/navbar";

interface IProps {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
