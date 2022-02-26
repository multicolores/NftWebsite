import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import NftCard from "../components/nftcard";
import "../components/styles/styles.scss";
import CurvedText from "../components/CurvedText";
import Navbar from "../components/Navbar";

import { motion, useTransform, useViewportScroll } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ImagesTab = [
  {
    url: "ExempleBoredApe.png",
    name: "Bored Ape",
    number: "1",
    price: "0.034",
  },
  { url: "Ape2.png", name: "Un Bored Ape", number: "2", price: "0.011" },
  { url: "Ape3.png", name: "Ape bored", number: "3", price: "0.024" },
  { url: "Ape4.png", name: "Bored Ape", number: "4", price: "0.036" },
  { url: "Ape5.png", name: "Bored Ape", number: "5", price: "0.009" },
  { url: "Ape6.png", name: "Bored Ape", number: "6", price: "0.047" },
  {
    url: "ExempleBoredApe.png",
    name: "Bored Ape",
    number: "7",
    price: "0.034",
  },
  { url: "Ape2.png", name: "Un Bored Ape", number: "8", price: "0.011" },
  { url: "Ape3.png", name: "Ape bored", number: "9", price: "0.024" },
];

const IndexPage = () => {
  //! Roation circle
  const [rotation, setRotation] = useState({
    transform: `translate(30%, -40%) rotate(0deg)`,
  });
  const [RotationLittleCircle, setRotationLittleCircle] = useState({
    transform: `rotate(0deg)`,
  });

  function setCircleRoationOnMousePos(e: any) {
    setRotation({
      transform: `translate(30%, -40%) rotate(${e.clientY / 80}deg)`,
    });
    setRotationLittleCircle({
      transform: `rotate(${e.clientX / 50}deg)`,
    });
  }

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [50, 200]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5], [-50, -200]);
  return (
    <main onMouseMove={(e) => setCircleRoationOnMousePos(e)}>
      <title>Home Page</title>
      <Navbar />
      <header>
        <div className="heroContainer">
          <div className="textContainer">
            <h1>Test NFT collection</h1>
            <Link to="#collection" className="Bigbutton">
              Collection
            </Link>
          </div>
          <div className="imgContainer">
            <Link to="#collection">
              {/* <NftCard image={ImagesTab[1].image} /> */}
              <NftCard
                image={ImagesTab[1].url}
                name={ImagesTab[1].name}
                number={ImagesTab[1].number}
                price={ImagesTab[1].price}
              />
              <NftCard
                image={ImagesTab[3].url}
                name={ImagesTab[3].name}
                number={ImagesTab[3].number}
                price={ImagesTab[3].price}
              />
              <NftCard
                image={ImagesTab[0].url}
                name={ImagesTab[0].name}
                number={ImagesTab[0].number}
                price={ImagesTab[0].price}
              />
            </Link>
          </div>
        </div>

        <div className="BigCircle" style={rotation}>
          <CurvedText />
        </div>
        <div className="LittleCircle" style={RotationLittleCircle}>
          <CurvedText />
        </div>
      </header>

      <div className="BigTextContainer">
        <motion.p
          className="BigTextLign"
          transition={transition}
          style={{
            left: scale,
            // left: scale,
            // transform: `translateX(${scale}*50%) rotate(5deg)`,
          }}
        >
          COLLECTION - COLLECTION - COLLECTION - COLLECTION - COLLECTION -
          COLLECTION - COLLECTION - COLLECTION - COLLECTION
        </motion.p>
        <motion.p
          className="BigTextLign two"
          transition={transition}
          style={{
            left: scale2,
          }}
        >
          COLLECTION - COLLECTION - COLLECTION - COLLECTION - COLLECTION -
          COLLECTION - COLLECTION - COLLECTION - COLLECTION
        </motion.p>
      </div>

      <section className="gallery" id="collection">
        {ImagesTab.map((image, i) => {
          return (
            <NftCard
              image={image.url}
              name={image.name}
              number={image.number}
              price={image.price}
            />
          );
        })}

        {/* <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" />
        <NftCard image="ExempleBoredApe.png" /> */}
      </section>

      <section className="testText">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptas itaque impedit quod.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          facilis possimus dolores culpa, placeat nostrum delectus iste eaque a?
          Dignissimos harum magnam id voluptas, delectus sunt distinctio omnis
          possimus totam?
        </p>
      </section>
    </main>
  );
};

export default IndexPage;
