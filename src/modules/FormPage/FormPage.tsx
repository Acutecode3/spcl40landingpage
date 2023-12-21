import styles from "./form.module.sass";
import LeftSide from "./components/LeftSide";
import SubmitForm from "./components/SubmitForm";
import SectionLayouts from "@/components/SectionLayouts";

const FormPage = () => {
  return (
    <SectionLayouts className={styles.section} id="form" providePadding>
      <div className={styles.shade}></div>
      <LeftSide />
      <SubmitForm />
    </SectionLayouts>
  );
};

export default FormPage;
