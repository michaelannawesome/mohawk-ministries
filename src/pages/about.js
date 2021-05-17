import * as React from "react";
import Layout from "../Components/layout";

const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>Why Mohawk Ministries?</h1>
      {/* <Link to="/">Take Me Home</Link> */}
      <Layout pageTitle="About Mohawk Ministries">
        <p>
          Just like you, I was born to be Awesome. It was my passion to assist
          in conveying love in the way that feels best to you. My background in
          art and design has introduced me to some pretty incredible people that
          feel their love is not recoginized my mainstream society.
        </p>
      </Layout>
    </main>
  );
};

export default AboutPage;
