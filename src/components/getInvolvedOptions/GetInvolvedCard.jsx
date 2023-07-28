import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import CustomButton from '../customButton/CustomButton';
import { useTheme } from '@emotion/react';


const GetInvolvedCard = ({ title, caption, imgUrl, buttonName, buttonLink }) => {
    const theme = useTheme();
    return (
        <Box width={"30%"} minWidth={"240px"} >
            <CardMedia component={`img`} height={`140`} image={imgUrl} alt="unsplash image" sx={{ borderRadius: "10px 10px 0 0", height: "200px" }} />
            <Card sx={{ borderRadius: "0 0 10px 10px", padding: "0 10px 10px 10px", backgroundColor: theme.palette.main, boxShadow: '0px 10px 10px rgba(0,0,0,0.2)', height: "250px" }}>
                <CardContent sx={{ color: theme.palette.white, letterSpacing: "normal" }}>
                    <Typography variant='h3' sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "400", lineHeight: "1rem", p: "10px 0" }}>
                        {caption}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: 'center' }}>
                    <CustomButton text={buttonName} buttonLink={buttonLink} />
                </CardActions>
            </Card>
        </Box>
    )
}

export default GetInvolvedCard;