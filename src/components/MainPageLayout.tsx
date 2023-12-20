import { ChildrenProps } from "@/types/common.types";
import Navbar from "@/modules/Navbar/Navbar";
import Footer from "@/modules/Footer/Footer";

const MainPageLayout = (props: ChildrenProps) => {
  return (
    <>
      <Navbar page="home" />
      <main className="main_page">{props.children}</main>
      <Footer />
    </>
  );
};

export default MainPageLayout;
