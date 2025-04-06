import ResumeData from "@/utils/ResumeData";
import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

const ResumeForm = ({ resumeData, setResumeData } : 
    { 
        resumeData: ResumeData,
        setResumeData: (resumeData: ResumeData) => void 
    }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setResumeData({ ...resumeData, [e.target.name]: e.target.value })
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text"
                              name="firstName"
                              value={resumeData.firstName}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text"
                              name="lastName"
                              value={resumeData.lastName}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                              name="email"
                              value={resumeData.email}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                              name="title"
                              value={resumeData.title}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
                <Form.Control as="textarea"
                              rows={3}
                              name="summary"
                              value={resumeData.summary}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default ResumeForm;