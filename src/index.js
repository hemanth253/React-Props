import React from "react";
import ReactDOM from "react-dom";

const Card = function (props) {
  // console.log(props);
  return (
    <div className={props.className}>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      className="myStyle"
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);
