import { FC } from "react";
import Exercise, { ExerciseProps } from "../Exercise";
import "./index.css";

export interface WorkoutProps {
  workoutName: string;
  exercises: ExerciseProps[];
}

const Workout: FC<WorkoutProps> = ({ workoutName, exercises }) => {
  return (
    <div className="workout-container">
      <div className="workout-name">{workoutName}</div>
      <div className="exercises-containers">
        {exercises
          .sort((a, b) => a.exerciseName.localeCompare(b.exerciseName))
          .map((exerciseProps, index) => (
            <Exercise {...exerciseProps} key={`e-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default Workout;
