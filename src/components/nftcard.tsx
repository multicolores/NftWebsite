import * as React from "react";
import Image from "./Image";

const NftCard = (props: any) => {
  return (
    <div className="NftCard_Container">
      <span className="name">Bored Ape</span>
      <div className="image_container">
        <Image alt="NFT image" filename={props.image} />
      </div>

      <div>
        <span>#4</span>
        <span>0.035 ETH</span>
      </div>
    </div>
  );
};

export default NftCard;
