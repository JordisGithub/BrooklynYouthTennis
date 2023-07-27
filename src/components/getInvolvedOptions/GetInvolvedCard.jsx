import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import CustomButton from '../customButton/CustomButton';
import { useTheme } from '@emotion/react';


const GetInvolvedCard = () => {
    const theme = useTheme();
    return (
        <Box width={"300px"} >
            <CardMedia component={`img`} height={`140`} image="https://source.unsplash.com/random" alt="unsplash image" sx={{ borderRadius: "10px 10px 0 0" }} />
            <Card sx={{ borderRadius: "0 0 10px 10px", padding: "0 10px 10px 10px", backgroundColor: theme.palette.main, boxShadow: '0px 10px 10px rgba(0,0,0,0.2)', height: "300px" }}>
                <CardContent sx={{ color: theme.palette.white }}>
                    <Typography variant='h3' sx={{ fontSize: "2rem", fontWeight: "bold" }}>Volunteer in our program</Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "500", lineHeight: "1rem", p: "10px 0" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero neque amet pariatur veritatis. Ad explicabo laborum officia similique. Impedit ipsa ex repellat rem repudiandae dolore, quis adipisci corrupti nisi.
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: 'center' }}>
                    <CustomButton text="Hello World" />
                </CardActions>
            </Card>
        </Box>
    )
}

export default GetInvolvedCard;