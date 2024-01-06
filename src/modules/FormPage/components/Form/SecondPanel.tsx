import styles from "../../form.module.sass";
import cn from "@/lib/cn";
import { useState } from "react";
import { getDistricts } from "../../helpers/getDistricts";
import { states } from "@/lib/states";
import { EducationLevels } from "@/lib/data/form";
import { useFormContext } from "../../FormContext";

const SecondPanel = () => {
  const { form2Data, setForm2Data } = useFormContext();
  const [districts, setDistricts] = useState([]);
  const onStateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistricts([]);
    const state = e.target.value;
    setForm2Data({ ...form2Data, state });
    const districts = await getDistricts(state);
    setDistricts(districts);
  };

  const handleGN = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm2Data({ ...form2Data, guardian_name: e.target.value });

  const handleGP = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm2Data({ ...form2Data, guardian_phone: e.target.value });

  const handleDistrict = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setForm2Data({ ...form2Data, district: e.target.value });

  const handleEducation = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setForm2Data({ ...form2Data, education_level: e.target.value });

  return (
    <div className={cn(styles.forms)}>
      <div className={styles.form_section}>
        <label htmlFor="guardian_name">Guardian{"'"}s Name*</label>
        <input
          type="text"
          id="guardian_name"
          onChange={handleGN}
          value={form2Data.guardian_name}
        />
      </div>
      <div className={styles.form_section}>
        <label htmlFor="guardian_phone">Guardian{"'"}s Phone Number*</label>
        <input
          type="text"
          id="guardian_phone"
          inputMode="numeric"
          placeholder="+91 "
          onChange={handleGP}
          value={form2Data.guardian_phone}
        />
      </div>
      <div className={styles.row_container}>
        <div className={styles.form_section}>
          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            onChange={onStateChange}
            value={form2Data.state}
          >
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
          <select
            name="district"
            id="district"
            onChange={handleDistrict}
            value={form2Data.district}
          >
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
        <select
          name="education_level"
          id="education_level"
          onChange={handleEducation}
          value={form2Data.education_level}
        >
          <option value="">Please chose your education level</option>
          {EducationLevels &&
            EducationLevels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SecondPanel;
