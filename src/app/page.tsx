"use client";
import { motion } from "framer-motion";
import Header from "@/Components/Header";
import PhotoSection from "@/Components/MainPhoto";
import Facecard from "@/Components/Facecard";
import Text from "@/Components/Text";
import TextGrid from "@/Components/TextGrid";
import TrainingCenters from "@/Components/TrainingCenter";
import AdmissionSteps from "@/Components/Admission";
import LoginPage from "@/Components/Apply";
import { FooterDemo } from "@/Components/Foot";

// Simple fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Slide-up animation variants
const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Header - no animation */}
      <Header />
      
      {/* Main content with animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.div variants={slideUp}>
          <PhotoSection />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <Text>Why Our Academy?</Text>
        </motion.div>
        
        <motion.div variants={slideUp}>
          <Facecard />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <Text>Our Training Programs</Text>
        </motion.div>
        
        <motion.div variants={slideUp}>
          <TextGrid />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <Text>Training Centers</Text>
        </motion.div>
        
        <motion.div variants={slideUp}>
          <TrainingCenters />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <Text>Admission Process</Text>
        </motion.div>
        
        <motion.div variants={slideUp}>
          <AdmissionSteps />
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <Text>Apply Here!</Text>
        </motion.div>
        
        <motion.div variants={slideUp}>
          <LoginPage />
        </motion.div>
        
        <motion.div variants={slideUp}>
          <FooterDemo />
        </motion.div>
      </motion.div>
    </main>
  );
}