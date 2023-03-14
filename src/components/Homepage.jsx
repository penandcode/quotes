import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import QuoteCard from "./QuoteCard";
import Loader from "./Loader";

const Homepage = () => {
  const [quote, setQuote] = useState(["I Love You"]);
  const [category, setCategory] = useState(["love"]);
  const [loading, setLoading] = useState(true);
  const dataFetchedRef = useRef(false);

  const getQuote = async () => {
    try {
      // console.log(category);
      setLoading(true);
      const data = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=`,
        {
          headers: {
            "X-Api-Key": "KQu62cTK+AEQAKl7yldjbA==noF4XfGLcaim9Mv7",
          },
        }
      );
      console.log(data.data[0].quote);
      setQuote(data.data[0].quote);
      setCategory(data.data[0].category);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const like = () => {
    console.log("apple");
    document.getElementById("border").style.display = "none";
    document.getElementById("fav-icon").style.display = "block";
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getQuote();
  }, []);

  return (
    <Box className="quote-card">
      {loading ? (
        <Loader />
      ) : (
        <QuoteCard quote={quote} category={category} like={() => like()} />
      )}
    </Box>
  );
};

export default Homepage;
