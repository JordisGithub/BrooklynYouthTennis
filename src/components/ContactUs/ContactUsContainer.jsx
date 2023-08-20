import { styled } from '@mui/system';
import { Container } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../theme';
import { Mail, Phone } from '../../images';
import CustomButton from '../customButton/CustomButton';

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
        transform: "translateY(-70px)"
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
        flexDirection: "column",
        gap: "2rem",
        justifyContent: 'space-around',
        [theme.breakpoints.up('md')]: {
            flexDirection: "row"
        }
    },

    '& .svg-icon-container': {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70px",
        margin: "auto",
        padding: "2rem",
        borderRadius: "50%",
        backgroundColor: theme.palette.highlight,
    },
}));

export default function ContactUsContainer() {
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
                        <p>1-718-789-5084</p>
                        <p>Mon-Sun (8am - 10pm)</p>
                        <CustomButton text="Call Now" />
                    </div>
                    <div>
                        <div className="svg-icon-container">
                            <Mail />
                        </div>
                        <h3>By Email</h3>
                        <p>brooklynyouthtennis@gmail.com</p>
                        <CustomButton text="Send Message" />
                    </div>
                </div>
            </div>
        </StyledContactUsContainer>
    );
}
