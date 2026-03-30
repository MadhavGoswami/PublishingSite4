import Hero from "./components/educational/Hero";
import ResearchPublications from "./components/educational/ReasearchPublication";
import EducationalResources from "./components/educational/EducationalResources";
import InstitutionalPartnerships from "./components/educational/InstitutionalPartnerships";
import InstitutionReviews from "./components/educational/InstitutionReviews";
import TeacherResources from "./components/educational/TeacherResources";

export default function Home() {
  return (
    <main>
      <Hero />
      <ResearchPublications />
      <EducationalResources />
      <InstitutionalPartnerships />
      <InstitutionReviews />
      <TeacherResources />
    </main>
  );
}