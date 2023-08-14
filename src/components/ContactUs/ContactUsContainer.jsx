import { styled } from '@mui/system';
import { Container } from "@mui/material";
import React from 'react';
import { ThemeProvider } from '@mui/styles';
import theme from '../../theme';

const StyledContactUsContainer = styled("div")(({ theme }) => ({
    width: "100%",
    padding: '20px',
    textAlign: 'center',
    margin: 'auto',
    fontFamily: 'komet, sans-serif',
    color: theme.palette.white,
    backgroundColor: theme.palette.main,
    [theme.breakpoints.up('md')]: {
        padding: '50px',
    },
}))

export default function ContactUsContainer() {
    return (
            <StyledContactUsContainer>

                Contianer
            </StyledContactUsContainer>
    )
}
