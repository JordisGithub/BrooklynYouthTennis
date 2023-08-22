import { styled } from '@mui/system';
import React, { useState } from 'react';

//Data
import { Mail, Phone } from '../../images';
// Component
import SendMessageModalDialgoue from './SendMessageModalDialgoue';

const StyledContactUsContainer = styled('div')(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    paddingBottom: '2rem',
    fontFamily: 'komet, sans-serif',
    backgroundColor: theme.palette.main,
    '& .main-border': {
        width: '60%',
        margin: 'auto',
        backgroundColor: theme.palette.white,
        padding: '2rem',
        borderRadius: '20px',
        transform: 'translateY(-70px)',
    },
    '& .title': {
        position: 'relative',

        '&::after': {
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            height: '2px',
            width: '4rem',
            backgroundColor: theme.palette.main,
        },
    },

    '& .contact-options': {
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'space-around',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },

    '& .svg-icon-container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70px',
        margin: 'auto',
        marginBottom: '1rem',
        padding: '2rem',
        borderRadius: '50%',
        backgroundColor: theme.palette.highlight,
    },
    "& .contact-type-information": {
        fontSize: "0.8rem",
        padding: "1rem 0",
    }
}));

const ContactButton = styled("button")(({ theme }) => ({
    // reset button
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '10px 20px',
    //styling
    backgroundColor: theme.palette.main,
    borderRadius: '15px',
    fontSize: "1rem",
    color: "white",
    fontWeight: 'bold',
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    "&:hover, &:focus": {
        backgroundColor: theme.palette.highlight,
        color: theme.palette.main,
        boxShadow: `inset 0 0 0 1px ${theme.palette.main}`,

    }

}))



export default function ContactUsContainer() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <StyledContactUsContainer>
            <div className="main-border">
                <h1 className="title">Contact Us Directly</h1>
                <div className="contact-options">
                    <div>
                        <div className="svg-icon-container">
                            <Phone className="svg-icon" />
                        </div>
                        <h3>By Phone</h3>
                        <div className="contact-type-information">
                            <p style={{ fontWeight: "bold" }}>1-718-789-5084</p>
                            <p>Mon-Sun (8am - 10pm)</p>
                        </div>
                        <ContactButton>Call Now</ContactButton>
                    </div>
                    <div>
                        <div className="svg-icon-container">
                            <Mail />
                        </div>
                        <h3>By Email</h3>
                        <div className="contact-type-information">
                            <p>brooklynyouthtennis@gmail.com</p>
                        </div>
                        <ContactButton onClick={() => handleOpen()}>Send Message</ContactButton>
                    </div>
                </div>
            </div>
            {/* <SendMessageModalDialgoue open={open} closeFunction={handleClose} /> */}
        </StyledContactUsContainer>
    );
}
