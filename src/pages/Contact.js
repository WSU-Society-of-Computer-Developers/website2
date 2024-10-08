import React from "react";
import { Box, FormField, Button, TextArea, Form } from "grommet";
import { socials } from "../data";

export default function Contact() {
    const initialState = { input: "" }
    const [value, setValue] = React.useState(initialState);
    const handleSubmit = () => {
        if (!value.input) return alert("Please enter a message.")
        window.open(`${socials.Email}?body=${encodeURIComponent(value.input)}`, "_blank")
    }

    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" align="center" gap="small" pad="small" style={{ color: "whitesmoke" }}>

            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => { setValue(initialState) }}
                style={{ background: "#0a0a0a", padding: 25, borderRadius: 10 }}
                onSubmit={handleSubmit}
            >
                <FormField name="name" htmlFor="text-input-id" label="Contact Form">
                    <TextArea id="text-input-id" name="input" placeholder="Enter questions here..." value={value.input} />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Send" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </Box>
    );
}