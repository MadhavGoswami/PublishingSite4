import Navbar from "./components/educational/navbar";
import Hero from "./components/educational/Hero";
import ResearchPublications from "./components/educational/ReasearchPublication";
import EducationalResources from "./components/educational/EducationalResources";
import InstitutionalPartnerships from "./components/educational/InstitutionalPartnerships";
import InstitutionReviews from "./components/educational/InstitutionReviews";
import TeacherResources from "./components/educational/TeacherResources";

export default function Home() {
  return (
    <main className="bg-[#fbf8f2]">
      <Navbar />
      <Hero />
      <ResearchPublications />
      <EducationalResources />
      <InstitutionalPartnerships />
      <InstitutionReviews />
      <TeacherResources />
    </main>
  );
}