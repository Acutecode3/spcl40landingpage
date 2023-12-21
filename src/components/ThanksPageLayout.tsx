import Footer from "@/modules/Footer/Footer";
import Navbar from "@/modules/Navbar/Navbar";
import { ChildrenProps } from "@/types/common.types";

const ThanksPageLayout = (props: ChildrenProps) => {
  return (
    <>
      <Navbar page="thank-you" />
      <main className="main_page">{props.children}</main>
      <Footer />
    </>
  );
};

export default ThanksPageLayout;
