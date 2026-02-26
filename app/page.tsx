import Hero from "./components/home/hero";
import About from "./components/home/about";
import StudyPrograms from "./components/home/studyProg";
import Pricing from "./components/home/pricing";
import StudentLife from "./components/home/studentLife";
import AdmissionProcess from "./components/home/admission";

export default function Home() {
  return (
    <main>

      <Hero />
     <About/>
     <StudyPrograms/>
     <AdmissionProcess/>
     <StudentLife/>
     <Pricing/>
     

    </main>
  );
}
