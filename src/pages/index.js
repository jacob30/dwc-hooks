import * as React from "react";

import "normalize.css"; // Note this
import HeroSection from "../components/sections/HeroSection";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
