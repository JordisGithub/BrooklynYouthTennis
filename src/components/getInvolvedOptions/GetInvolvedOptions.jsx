import * as React from 'react';
import { makeStyles } from '@mui/styles';
import GetInvolvedCard from './GetInvolvedCard';
import { getInvolvedData } from '../../data';

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
        width: '85%',
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
            {getInvolvedData.map((data) => {
                return (
                    <GetInvolvedCard
                        className={classes.card}
                        key={data.id}
                        title={data.title}
                        caption={data.caption}
                        imgUrl={data.imgUrl}
                        buttonName={data.buttonName}
                        buttonLink={data.buttonLink}
                    />
                )
            })}
        </div>
    )
}

export default GetInvolvedOptions;