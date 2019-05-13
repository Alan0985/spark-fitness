import React from "react";

export const TrainingClass = props => {
  let popularity = [];
  for (let i = 1; i <= props.classItem.popularity; i++) {
    popularity.push(<i key={i} className="fab fa-gripfire" />);
  }

  return (
    <div id={props.classItem.id} className="classItem">
      <div className="classItemHeader">
        <h1 className="name">{props.classItem.name}</h1>
        <div className="icon">{popularity}</div>
      </div>
      <div className="classItemFooter">
        <p>{`L${props.classItem.level}`}</p>
        <p>{`${props.classItem.duration}h`}</p>
        <p className="enrollQty">{`${props.classItem.enrollQty} Enrolled`}</p>
      </div>
    </div>
  );
};
