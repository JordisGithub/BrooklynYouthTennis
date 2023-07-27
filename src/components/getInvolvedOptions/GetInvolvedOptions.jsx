import * as React from 'react';
import { makeStyles } from '@mui/styles';
import GetInvolvedCard from './GetInvolvedCard';
import { Stack } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        // Z Index
        zIndex: 1,

        // FlexBox
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',

        //Size
        width: '80%',
        maxWidth: '1000px',

        //Position
        margin: 'auto',
        transform: 'translateY(-100px)',
    },

}))

const GetInvolvedOptions = () => {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer} >
            <GetInvolvedCard className={classes.card} />
            <GetInvolvedCard className={classes.card} />
            <GetInvolvedCard className={classes.card} />
            <GetInvolvedCard className={classes.card} />
            <GetInvolvedCard className={classes.card} />
        </div>
    )
}

export default GetInvolvedOptions;