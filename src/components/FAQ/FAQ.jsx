import React from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";
import { faqData } from "../../data";

const StyledFAQ = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.highlight,
  fontFamily: theme.typography.fontFamily,
  width: "100%",
  paddingBottom: "20px",
  // Flexbox
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",


  "& .header": {
    fontSize: "2rem",
    padding: "10px 20px",
    color: theme.palette.white,
    borderRadius: "0 0 10px 10px",
    textAlign: "center",
    backgroundColor: theme.palette.main,
    // Position
    transform: "translateY(-1px)",
  },


  "& .box": {
    padding: "20px",
    width: "70%",
    maxWidth: "1000px",
    borderRadius: "10px",
    backgroundColor: theme.palette.white,
  },

  "& .faq-question": {
    fontSize: "1.2rem",
    fontWeight: "500",
    padding: "20px 0",
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none",
    },
  },

  "& .panel-title": {
    position: "relative",
    padding: "0 0 0 30px",
    display: "block",
    cursor: "pointer",
  },

  "& .panel-content": {
    fontSize: "0.9rem",
    padding: "0 20px",
    height: 0,
    overflow: "hidden",
    zIndex: 1,
    position: "relative",
    transition: "all .35s ease",
    opacity: 1,
  }
  ,

  "& .panel:checked ~ .panel-content": {
    height: "auto",
    opacity: 1,
    padding: "20px",
  },

  "& .plus": {
    position: "absolute",
    zIndex: 5,
    fontSize: "1.5rem",
    lineHeight: "100%",
    transition: "all .35s ease",
  },

  "& .panel:checked ~ .plus": {
    transform: "rotate(45deg)",
  },

  "& .panel": {
    display: "none",
  }
}));

export default function FAQ() {
  return (
    <StyledFAQ>
      <h2 className="header">FAQ</h2>
      <Box className="box">
        {faqData.map((faq, index) => {
          return (
            <div className="faq-question">
              <input id={index} type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label for={index} className="panel-title">{faq.question}</label>
              <p className="panel-content">{faq.answer}</p>
            </div>)
        })}
      </Box>
    </StyledFAQ>
  );
}
