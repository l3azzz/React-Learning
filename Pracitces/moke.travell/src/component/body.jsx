import axios from "axios";
import React, { useState } from "react";
import Special from "./special";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";

export default function Body() {
  //   const [image, setImage] = useState();
  //   const [place, setPlace] = useState();
  //   const [location, setLocation] = useState();
  const [travelcard, setTravelcard] = useState([]);
  // const navigate = useNavigate();
  axios
    .get("https://traveller.talrop.works/api/v1/places/")
    .then((response) => {
      //   console.log(response.data.data);
      setTravelcard(response.data.data);
    });
  const navigate = useNavigate();
  const go_to = (id, place) => {
    // travelcard.map((id) => )
    // let url = `https://traveller.talrop.works/api/v1/places/view/${id}/`;
    // window.location.href = url;

    navigate(`/${place}/${id}`);
    // return <Special id={id} />;
  };

  const listItem = () => {
    return travelcard.map((item) => (
      <div className="tile" key={item.id}>
        <div
          id={item.id}
          className="single"
          onClick={() => go_to(item.id, item.name)}
        >
          <img src={item.image} alt="location Image" />
          <h3>{item.name}</h3>
          <h4>
            <img
              className="location-icon"
              src="location.png
          "
              alt="location icon"
            />
            {item.location}
          </h4>
        </div>
      </div>
    ));
  };

  return (
    <>
      <main>
        <h2 className="greeting">Welcome</h2>
      </main>

      <div className="tiles">{listItem()}</div>
    </>
  );
}
