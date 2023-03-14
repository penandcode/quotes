import React from "react";
import { Card, CardContent, Typography, Button, Chip } from "@mui/material";
import "./homepage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./quotecard.css";

function QuoteCard({ quote, category, like }) {
  return (
    <Card sx={{ width: 350 }} className="card" backgroundColor="red">
      <CardContent>
        <Typography>{quote}</Typography>
        <br />
        <Chip label={category} variant="outlined" />
        <hr />
      </CardContent>
      <Button
        size="small"
        variant="outlined"
        color="error"
        className="category"
        onClick={like}
      >
        <FavoriteBorderIcon id="border" />
        <FavoriteIcon id="fav-icon" />
      </Button>
    </Card>
  );
}

export default QuoteCard;
