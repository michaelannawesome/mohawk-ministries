import * as React from "react";
import Layout from "../Components/layout";

const IndexPage = () => {
  return (
    <main>
      <title>Mohawk Ministries</title>
      <h1>Nondenominational Wedding and Commitment Ceremonies!</h1>
      {/* <Link to="/about">About Mohawk Ministries</Link> */}
      <Layout pageTitle="Mohawk Ministries">
        <p>Hello and Welcome! You're in the right place.</p>
      </Layout>
    </main>
  );
};

export default IndexPage;
