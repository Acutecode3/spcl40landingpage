import FormPageLayout from "@/components/FormPageLayout";
import FormPage from "@/modules/FormPage/FormPage";
import HomeHero from "@/modules/HomeHero/HomeHero";
import MeetTheMentors from "@/modules/MeetTheMentors/MeetTheMentors";
import ApplicationProcess from "@/modules/ApplicationProcess/ApplicationProcess";
import FAQ from "@/modules/FAQ/FAQ";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <FormPageLayout>
      <Toaster position="top-right" reverseOrder={false} />
      <FormPage />
      <HomeHero showCards />
      <MeetTheMentors />
      <ApplicationProcess />
      <FAQ />
    </FormPageLayout>
  );
}
