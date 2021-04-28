import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Header from "./Components/Header";
import NewsCardHeading from "./Components/NewsCardHeading";
import NewsCards from "./Components/NewsCards";
import StateDataCard from "./Components/StateDataCard";
import ShareButton from "./Components/ShareButton";
import Footer from "./Components/Footer";

const App = () => {
  //total cases in india
  const [cases, setCases] = useState([]);

  //Corona News
  const [news, setNews] = useState([]);

  // Each State Cases
  const [statecases, setStatecases] = useState([]);

  //total cases in india
  const fetchTotalData = async () => {
    const { data } = await axios.get(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    );

    const cases = data.data;
    setCases(cases);
  };

  //Corona News
  const fetchNewsData = async () => {
    const { data } = await axios.get(
      "https://cryptic-ravine-96718.herokuapp.com/"
    );

    const { news } = data;

    const allNews = news.map((bulletin) => ({
      newsImage: bulletin.img,
      newsTitle: bulletin.title,
      newsLink: bulletin.link,
    }));

    setNews(allNews);
  };

  // Each State Cases
  const fetchStateData = async () => {
    const { data } = await axios.get(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    );

    const statecases = data.data.statewise;

    setStatecases(statecases);
  };

  useEffect(() => {
    fetchStateData();
  }, []);

  useEffect(() => {
    fetchNewsData();
  }, []);

  useEffect(() => {
    fetchTotalData();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Card cases={cases} />

      <StateDataCard statecases={statecases} />
      <NewsCardHeading />
      <span>
        {news.slice(0, 6).map((news) => (
          <NewsCards news={news} />
        ))}
      </span>
      <ShareButton />
      <Footer />
    </div>
  );
};

export default App;
