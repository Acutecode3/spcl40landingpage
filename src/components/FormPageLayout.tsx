import { ChildrenProps } from "@/types/common.types";
import Footer from "@/modules/Footer/Footer";
import Navbar from "@/modules/Navbar/Navbar";

const FormPageLayout = (props: ChildrenProps) => {
  return (
    <>
      <Navbar page="form" />
      <main className="main_page">{props.children}</main>
      <Footer />
    </>
  );
};

export default FormPageLayout;
