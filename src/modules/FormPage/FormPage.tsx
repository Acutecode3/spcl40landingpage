import cn from "@/lib/cn";
import styles from "./form.module.sass";
import LeftSide from "./components/LeftSide";
import SubmitForm from "./components/SubmitForm";
import SectionLayouts from "@/components/SectionLayouts";
import { FormProvider } from "./FormContext";

const FormPage = () => {
  return (
    <SectionLayouts
      className={cn(styles.section, styles.applyNow)}
      id="form"
      providePadding
    >
      <div className={styles.shade}></div>
      <LeftSide />
      <FormProvider>
        <SubmitForm />
      </FormProvider>
    </SectionLayouts>
  );
};

export default FormPage;
