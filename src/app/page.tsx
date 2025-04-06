"use client";

import Resume from "@/components/Resume/Resume";
import ResumeForm from "@/components/ResumeForm/ResumeForm";
import ResumeData from "@/utils/ResumeData";
import { useState } from "react";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    summary: ""
}); 

  return (
    <div className="d-flex">
      <ResumeForm resumeData={resumeData} setResumeData={setResumeData}/>
      <Resume resumeData={resumeData}/>
    </div>
  );
}
