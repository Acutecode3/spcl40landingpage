import styles from "../../form.module.sass";
import cn from "@/lib/cn";
import { useState } from "react";
import { getDistricts } from "../../helpers/getDistricts";
import { states } from "@/lib/states";
import { EducationLevels } from "@/lib/data/form";

const SecondPanel = () => {
  const [districts, setDistricts] = useState([]);
  const onStateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistricts([]);
    const state = e.target.value;
    const districts = await getDistricts(state);
    setDistricts(districts);
  };
  return (
    <form className={cn(styles.forms)}>
      <div className={styles.form_section}>
        <label htmlFor="guardian_name">Guardian{"'"}s Name*</label>
        <input type="text" id="guardian_name" />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="guardian_phone">Guardian{"'"}s Phone Number*</label>
        <input
          type="text"
          id="guardian_phone"
          inputMode="numeric"
          defaultValue="+91 "
        />
      </div>
      <div className={styles.row_container}>
        <div className={styles.form_section}>
          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={onStateChange}>
            <option value="">Select your state</option>
            {states &&
              states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.form_section}>
          <label htmlFor="district">District</label>
          <select name="district" id="district">
            <option value="">Chose district</option>
            {districts &&
              districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className={styles.form_section}>
        <label htmlFor="education_level">Education</label>
        <select name="education_level" id="education_level">
          <option value="">Please chose your education level</option>
          {EducationLevels &&
            EducationLevels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default SecondPanel;
