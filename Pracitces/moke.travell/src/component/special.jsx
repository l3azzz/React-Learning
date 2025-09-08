import React, { useState } from "react";
import Header from "./header";
import axios from "axios";
import { useParams } from "react-router-dom";
// import this.props.first

export default function Special() {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  axios
    .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
    .then((response) => {
      //   console.log(response.data.data);
      setCard(response.data.data);
    });
  console.log(card.gallery);

  const listItem = () => {
    if (!card || !card.gallery) {
      return <h1 className="loading">Loading...</h1>;
    }
    return (
      <>
        <div className="card">
          <h1>{card.name}</h1>
          <div className="min">
            <h4 className="first">{card.category_name}</h4>
            <img src="/location.png" alt="" />
            <h4 className="second">{card.location}</h4>
          </div>
          <div className="gallery">
            <div className="left">
              <img src={card.image} alt="main image" className="main" />
            </div>
            <div className="right">
              {card.gallery.map((img) => (
                <img src={img.image} alt="small image" className="small" />
              ))}
            </div>
          </div>
          <h2>Place Details</h2>
          <p>{card.description}</p>
        </div>
      </>
    );
  };

  return listItem();
}
