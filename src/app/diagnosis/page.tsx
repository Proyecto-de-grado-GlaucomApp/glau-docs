import Navbar from "@/components/navbar";
import { FC } from "react";
import DiagnosisContent from "./components/diagnosisContent";

const DiagnosisPage: FC = () => {
  return (
    <>
    <Navbar />
    <DiagnosisContent />
    </>
     
  );
};

export default DiagnosisPage;