import DetailedProgramCard from "../studyPrograms/detailedCard";
import Header from "../studyPrograms/sectionHeader";
import SimpleProgramCard from "../studyPrograms/simpleCard";

export default function StudyPrograms() {
  return (
    <section className="bg-white w-full py-16 md:py-20 lg:py-[112px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-[112px] flex flex-col items-center gap-12 lg:gap-[80px]">

        <Header />

        <div className="w-full space-y-12 lg:space-y-16">
          
          {/* card */}
          <SimpleProgramCard
            title="Media Production"
            subtitle="120 ETC / 2 Years Studies"
            modules={[
              "3D Animation",
              "Audio Production",
              "Graphic Design",
              "Photography",
              "Video Production",
              "Web Production",
            ]}
          />

          <DetailedProgramCard
  title="220 ETC study"
  subtitle="programmes/4 years Studies"
  duration="4 years (Bachelor)"
  description="Students will gain a deep understanding of economic theory, quantitative methods, and practical applications in various economic sectors."
  leftColumnItems={[
    "English Philology",
    "Foreign Languages and Cultures: Italian Studies and Romance Languages, German Language and Communication",
    "International Politics and Development Studies",
    "World Politics and Economy",
    "Business Administration",
    "Economics and Finance",
    "Biology and Genetics",
    "Biotechnology",
    "Environmental Science and Protection",
    "Informatics Systems",
    
  ]}
  rightColumnItems={[
    "Multimedia and Internet Technologies",
    "Performing Arts",
    "Music Production",
    "Sociology and Anthropology",
    "Logistics and Commerce",
    "Accounting and Finance / Учет и Финансы (in Russian/English)",
    "Pedagogy of Primary Education and Early Foreign Language Teaching (in Vilnius)",
    "Sustainable Engineering",
    "Sustainable Bio-Business Management",
  ]}
  newItems={[
    "World Politics and Economy",
    "Sustainable Bio-Business Management",
    "Sustainable Engineering",
    "Environmental Science and Protection"
  ]}
/>

<DetailedProgramCard
  title="180 ETC Study Programmes"
  subtitle="3 years Studies"
  duration="3 years"
  description="This program prepares students for leadership roles in business and management, focusing on entrepreneurship, finance, marketing, and strategic planning."
  leftColumnItems={[
    "Business Development and Entrepreneurship",
    "Digital Business",
    "International Hospitality Management",
    "Beauty and Wellness Business",
  ]}
  rightColumnItems={[
    "Business Management and Marketing",
    "Programming and Internet Technologies",
    "Academic English Preparatory Programme",
  ]}
  newItems={[
    "Business Development and Entrepreneurship",
    "International Hospitality Management",
    "Beauty and Wellness Business",
  ]}
/>

<DetailedProgramCard
  title="Master degree Study Programs"
  subtitle="120 ETC / 2 years studies"
  duration="2 years (Master)"
  description="This program explores global politics, international law, and diplomacy, preparing students for careers in international organizations and government agencies."
  leftColumnItems={[
    "Sociolinguistics and Multilingualism",
    "Applied English Linguistics",
    "Diplomacy and International Relations",
    "Future Media and Journalism",
    "Marketing and International Commerce",
    "Sports Business MBA",
    "Molecular Biology and Biotechnology",
    "Biotechnology and Pharmaceutical Analysis",
    "Applied Informatics",
    "Social Anthropology",
    "Educational Management",
  ]}
  rightColumnItems={[
    "Performing Arts",
    "Business Logistics",
    "Customs Process Management (online)",
    "Applied Mathematics",
    "Social Work in Contexts of Global Crises",
    "Physical Training and Sport (in Vilnius)",
    "Music Education (in Vilnius)",
    "Agronomy",
    "Ecology and Climate Change",
    "Hydraulic Engineering",
  ]}
  newItems={[
    "Applied Mathematics",
    "Social Work in Contexts of Global Crises",
    "Physical Training and Sport (in Vilnius)",
    "Music Education (in Vilnius)",
    "Agronomy",
    "Ecology and Climate Change",
    "Hydraulic Engineering",
  ]}
/>



        </div>
      </div>
    </section>
  );
}