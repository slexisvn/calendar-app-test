import { FC } from "react";
import "./index.css";

export interface ExerciseProps {
  exerciseName: string;
  information: string;
}

const Exercise: FC<ExerciseProps> = ({ exerciseName, information }) => {
  return (
    <div className="exercise-container">
      <div className="exercise-name">{exerciseName}</div>
      <div className="info-wrap">
        <div className="info-number">{information.split(",").length}</div>
        <div className="info">{information}</div>
      </div>
    </div>
  );
};

export default Exercise;
