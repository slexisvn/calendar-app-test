import DayContainer from "./component/Day";
import data from "./data.json";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexFlow: "row wrap",
      }}
    >
      {data.map(({ dayOfWeek, dayOfMonth, workouts }, i) => (
        <DayContainer
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          workouts={workouts as any[]}
          key={`day-container-${i}`}
        />
      ))}
    </div>
  );
}

export default App;
