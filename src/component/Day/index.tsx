import { FC } from "react";
import Workout, { WorkoutProps } from "../Workout";
import "./index.css";

interface DayProps {
  dayOfWeek: string;
  dayOfMonth: string;
  isToday?: boolean;
  workouts: WorkoutProps[];
}

const Day: FC<DayProps> = ({ dayOfWeek, dayOfMonth, workouts }) => {
  return (
    <div className="day-container">
      <div className="day-of-week">{dayOfWeek.toUpperCase()}</div>

      <div className="container-1">
        <div className="day-of-month">{dayOfMonth}</div>
        <div className="workout-containers">
          {workouts
            .sort((a, b) => a.workoutName.localeCompare(b.workoutName))
            .map((workoutProps, index) => (
              <Workout {...workoutProps} key={`wc-${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Day;
