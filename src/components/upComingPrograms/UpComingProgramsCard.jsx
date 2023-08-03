import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../customButton/CustomButton";
import { useTheme } from "@emotion/react";

export default function UpComingProgramsCard({
    title,
    sessions,
    backgroundImageUrl,
}) {
    const theme = useTheme();
    return (
        <Box width={"350px"}>
            <Card
                sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${backgroundImageUrl}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: theme.palette.white,
                    borderRadius: "20px",
                }}
            >

                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "30px",
                    padding: "50px 30px",
                }}>
                    <Typography
                        variant="h3"
                        sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: "1rem" }}>
                        {sessions.map((session) => {
                            return (
                                <Typography sx={{ padding: "20px 0" }}>
                                    <Typography>{session.day}</Typography>
                                    <Typography>{session.time}</Typography>
                                    <Typography>{session.age}</Typography>
                                </Typography>
                            );
                        })}
                    </Typography>
                    <CardActions sx={{display: "flex", justifyContent: "center"}}>
                        <CustomButton text={"Details"} buttonLink={"link"} />
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
}
