import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    // For resetting the button style
    buttonReset: {
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '10px 20px',
    },
    // For customizing for reusing the button
    customButton: {
        backgroundColor: theme.palette.highlight,
        borderRadius: '15px',
        color: theme.palette.main,
        fontSize: "1rem",
        fontWeight: 'bold',
        transition: 'all 0.3s ease-in-out',
        "&:hover": {
            backgroundColor: theme.palette.main,
            color: theme.palette.highlight,
        }
    }
}));


export default function CustomButton({ text }) {
    const classes = useStyles();
    return (
        <button className={`${classes.customButton}  ${classes.buttonReset}`}>{text}</button>
    )
}
