import React from "react";
import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = () => {
  console.log(people);
  const [index, setindex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkValid = number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setindex(index => {
      let newIndex = index - 1;
      return checkValid(newIndex);
    });
  };
  const nextPerson = () => {
    setindex(index => {
      let newIndex = index + 1;
      return checkValid(newIndex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
      </div>
      <p>{text}</p>
      <h4>{job}</h4>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
        <button className="random-btn">Suprise me !!</button>
      </div>
    </article>
  );
};
export default Review;
