import cn from "@/lib/cn";
import styles from "./form.module.sass";
import LeftSide from "./components/LeftSide";
import SubmitForm from "./components/SubmitForm";

const FormPage = () => {
  return (
    <section className={cn("provide_padding", styles.section)}>
      <LeftSide />
      <SubmitForm />
    </section>
  );
};

export default FormPage;
