import React from "react";
import { TrainingClass } from "./TrainingClass";

export const TrainingGroup = (props) => {
  let trainingClass;
  trainingClass = props.training.classes.map((classItem) => {
    let parsedClassItem = JSON.parse(classItem);

    return (
      <TrainingClass key={parsedClassItem.title} classItem={parsedClassItem} />
    );
  });

  return (
    <div className="trainingGroup">
      <div className="trainingIntro">
        <h1>{props.training.category}</h1>
        <p>{props.training.summary}</p>
      </div>

      <div className="trainingClass">{trainingClass}</div>
    </div>
  );
};
