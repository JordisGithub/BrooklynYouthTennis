import { styled } from '@mui/styles'
import { Button, MenuItem, Modal, Stack, TextField, TextareaAutosize, Typography } from '@mui/material';

import React, { useState } from 'react'

const ModalDialogue = styled(Modal)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    "& .box-container": {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "800px",
        backgroundColor: theme.palette.white,
        padding: "2rem",
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        "&:focus": {
            outline: "none"
        }
    },
    "& .form": {
        paddingTop: "2rem",
    },
    "& .submit-button-container": {
        alignItems: "center"
    }
    ,
    "& .submit-button": {
        padding: "0.5rem 1.5rem",
        boxShadow: "none",
        backgroundColor: theme.palette.main,
        "&:hover, &:focus": {
            backgroundColor: theme.palette.highlight,
            color: theme.palette.main,
            boxShadow: `inset 0 0 0 1px ${theme.palette.main}`
        }
    }
}))

const MessageTextArea = styled(TextareaAutosize)(({ theme }) => ({
    width: "100%",
    lineHeight: 1.5,
    padding: "0.5rem",
    fontFamily: theme.typography.fontFamily,
    resize: "none",

    "&:focus": {
        outline: "none"
    }
}))

export default function SendMessageModalDialgoue({ open, closeFunction }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        purpose: "General Inquiry",
        message: ""
    })
    console.log(formData);

    const handleSubmit = (event) => {
        event.preventDefault();
        closeFunction();
        console.log("Final Data");
        console.log(formData);
    }

    return (
        <ModalDialogue open={open} onClose={() => closeFunction()}>
            <Stack className='box-container'>
                <div >
                    <h2>Get in Touch</h2>
                    <p>We will help your questions and concerns answered as soon as possible</p>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <Stack direction="column" spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <TextField label="First Name" variant="filled" size="small" required onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                            <TextField label="Last Name" variant='filled' size="small" required onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <TextField label="Email" variant="filled" size="small" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <TextField label="Phone Number" variant="filled" size="small" required onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                        </Stack>
                        <Stack>
                            <Typography>Purpose of Contact</Typography>
                            <TextField label="Purpose" select required onChange={(e) => setFormData({ ...formData, purpose: e.target.value })} variant='filled'>
                                <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                                <MenuItem value="Improvement Report">Improvement Report</MenuItem>
                                <MenuItem value="Coaching request">Coaching request</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </TextField>
                        </Stack>
                        <Stack>
                            <Typography>Message</Typography>
                            <MessageTextArea label="Type your message here" required onChange={(e) => setFormData({ ...formData, message: e.target.value })} variant='filled' minRows={5} maxRows={5} />
                        </Stack>

                        <Stack className='submit-button-container'>
                            <Button type='submit' variant="contained" className='submit-button'>Submit</Button>
                        </Stack>
                    </Stack>
                </form>
            </Stack>
        </ModalDialogue>
    )
}
