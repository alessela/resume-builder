"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "react-bootstrap";

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required>
                </Form.Control>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default ResumeForm;