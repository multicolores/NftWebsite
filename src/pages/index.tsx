import * as React from "react";
import NftCard from "../components/nftcard";
import "../components/styles/styles.scss";
import CurvedText from "../components/CurvedText";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <header>
        <div className="heroContainer">
          <div className="textContainer">
            <h1>Test NFT collection</h1>
            <a href="#collection" className="Bigbutton">
              Collection
            </a>
          </div>
          <div className="imgContainer">
            <NftCard image="ExempleBoredApe.png" />
          </div>
        </div>

        <div className="BigCircle">
          <CurvedText />
        </div>
        <div className="LittleCircle">
          <CurvedText />
        </div>
      </header>

      <section className="gallery">
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
      </section>
    </main>
  );
};

export default IndexPage;
