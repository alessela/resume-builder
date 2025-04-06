import ResumeData from "@/utils/ResumeData";

const Resume = ({ resumeData }: { resumeData: ResumeData }) => {
    return (
        <div>
            <p> { resumeData.firstName + ' ' + resumeData.lastName } </p>
            <p> { resumeData.email } </p>
            <p> { resumeData.title } </p>
        </div>
    )
}

export default Resume;