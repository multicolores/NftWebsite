import * as React from "react";
import NftCard from "../components/nftcard";
import "../components/styles/styles.scss";
import CurvedText from "../components/CurvedText";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Navbar />
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

    <div className="BigTextContainer">
      <p className="BigTextLign">COLLECTION - COLLECTION - COLLECTION</p>
      <p className="BigTextLign two">COLLECTION - COLLECTION - COLLECTION</p>
    </div>

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

    <section className="testText">
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptas itaque impedit quod.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis possimus dolores culpa, placeat nostrum delectus iste eaque a? Dignissimos harum magnam id voluptas, delectus sunt distinctio omnis possimus totam?</p>
    </section>

    </main>
  );
};

export default IndexPage;
