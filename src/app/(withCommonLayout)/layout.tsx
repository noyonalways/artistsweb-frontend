import Navbar from "@/shared/navbar";

interface IProps {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
