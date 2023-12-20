import MainPageLayout from "@/components/MainPageLayout";
import HomeHero from "@/modules/HomeHero/HomeHero";
import About from "@/modules/About/About";
import WhyAscent from "@/modules/About/WhyAscent";
import CareerPathways from "@/modules/CareerPathways/CareerPathways";
import Testimonials from "@/modules/Testimonials/Testimonials";
import MeetTheMentors from "@/modules/MeetTheMentors/MeetTheMentors";
import WorkCamp from "@/modules/WorkCamp/WorkCamp";
import Curriculum from "@/modules/Curriculum/Curriculum";
import Certificate from "@/modules/Certificate/Certificate";
import FeesFinancing from "@/modules/FeesFinancing/FeesFinancing";
import ApplicationProcess from "@/modules/ApplicationProcess/ApplicationProcess";
import FAQ from "@/modules/FAQ/FAQ";

export default function Home() {
  return (
    <MainPageLayout>
      <HomeHero showCards showHero />
      <About />
      <WhyAscent />
      <CareerPathways />
      <Testimonials />
      <MeetTheMentors />
      <WorkCamp />
      <Curriculum />
      <Certificate />
      <FeesFinancing />
      <ApplicationProcess />
      <FAQ />
    </MainPageLayout>
  );
}
