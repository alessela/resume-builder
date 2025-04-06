"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "react-bootstrap";

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        summary: ""
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
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                              name="title"
                              value={formData.title}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
                <Form.Control as="textarea"
                              rows={3}
                              name="summary"
                              value={formData.summary}
                              onChange={handleChange}
                              required>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default ResumeForm;