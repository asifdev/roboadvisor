import React from "react";
import Card from "./Card";

const Cards = ({ robots }) => {
  return robots.map((robot, index) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));
};

export default Cards;
