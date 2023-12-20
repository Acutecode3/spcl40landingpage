import FormPageLayout from "@/components/FormPageLayout";
import FormPage from "@/modules/FormPage/FormPage";
import HomeHero from "@/modules/HomeHero/HomeHero";
import MeetTheMentors from "@/modules/MeetTheMentors/MeetTheMentors";
import ApplicationProcess from "@/modules/ApplicationProcess/ApplicationProcess";
import FAQ from "@/modules/FAQ/FAQ";

export default function Home() {
  return (
    <FormPageLayout>
      <FormPage />
      <HomeHero showCards />
      <MeetTheMentors />
      <ApplicationProcess />
      <FAQ />
    </FormPageLayout>
  );
}
