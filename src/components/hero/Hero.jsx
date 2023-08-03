import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: ({ imgUrl }) => ({
    background: `linear-gradient(to bottom, transparent 25%, #354463), url("${imgUrl}") no-repeat center center`,
    backgroundSize: "cover",
    height: "400px",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      height: "600px",
    },
  }),

  heroTextBlock: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",

    "& .MuiTypography-h1": {
      // fontFamily: "komet, sans-serif",
      color: "#354463",
      fontSize: "30px",
      textTransform: "uppercase",
      fontWeight: "900",
      WebkitTextFillColor: "white",
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "#354463",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        fontSize: "50px",
      },
    },

    "& .MuiTypography-caption": {
      // fontFamily: "komet, sans-serif",
      color: "white",
      fontSize: "1rem",
      textAlign: "center",
      letterSpacing: "-1px",
    },
  },
}));

const Hero = ({ imgUrl, headerName, headerCaption }) => {
  const classes = useStyles({ imgUrl });
  return (
    <div className={classes.root}>
      <div className={classes.heroTextBlock}>
        <Typography variant="h1">{headerName}</Typography>
        {headerCaption && (
          <Typography variant="caption" sx={{fontWeight: "400"}}>{headerCaption}</Typography>
        )}
      </div>
    </div>
  );
};

export default Hero;
