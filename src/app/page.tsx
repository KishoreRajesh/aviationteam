import Header from "@/Components/Header";
import PhotoSection from "@/Components/MainPhoto";
import Facecard from "@/Components/Facecard";
import Text from "@/Components/Text";
import Image from "next/image";
import TextGrid from "@/Components/TextGrid";
import TrainingCenters from "@/Components/TrainingCenter";
import AdmissionSteps from "@/Components/Admission";
import LoginPage from "@/Components/Apply"
import { FooterDemo } from "@/Components/Foot";



export default function Home() {
  return (
    <main className="flex-grow">
      <Header />
      <PhotoSection />
        <Text>Why Our Academy ?</Text>
        <Facecard />
        <Text>Our Training Programs</Text>
        <TextGrid />
        <Text>Training Centers</Text>
        <TrainingCenters />
        <Text>Admission Process</Text>
        <AdmissionSteps />
        <Text>Apply Here!</Text>
        <LoginPage />
        <FooterDemo />
    </main>
  );
}
