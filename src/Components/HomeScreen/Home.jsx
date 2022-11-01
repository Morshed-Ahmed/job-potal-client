import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Subscribe from "../Common/Subscribe";
import Banner from "./Banner";
import JobPost from "./JobPost";
import JobsByLocation from "./JobsByLocation";
import NewsBlog from "./NewsBlog";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <JobPost />

      <JobsByLocation />
      <NewsBlog />
      <Subscribe />
      <Footer />
      {/* <Apply /> */}
    </div>
  );
};

export default Home;
