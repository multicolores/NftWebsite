import * as React from "react";
import Image from "./Image";

const NftCard = (props: any) => {
  return (
    <div className="NftCard_Container">
      <span className="name">{props.name}</span>
      <div className="image_container">
        <Image alt="NFT image" filename={props.image} />
      </div>

      <div>
        <span>#{props.number}</span>
        <span>{props.price} ETH</span>
      </div>
    </div>
  );
};

export default NftCard;
