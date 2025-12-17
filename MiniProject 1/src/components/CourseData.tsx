import { useState } from "react";
import EmitEvent from "../EmitEvent";
import rawData from "../localDataBase/courseData.json";
import type { AllCoursesData } from "../types";
import Course from "./Course";
interface event {
  eventName: string;
}
const CourseData = (Event: event) => {
  const Data = rawData as unknown as AllCoursesData; // unknown to tell ts to forget the assumtion
  //AllCourseData to give coreect structure
  const eventData = Data[Event.eventName];

  const handleClick = (eventName: string) => {
    console.log(eventName + " is fired");
    EmitEvent(eventName);
    setThankYouPage(true);

    //other staff logic
  };
  const [enrollPage, setEnrollPage] = useState<boolean>(false);
  const [thankYouPage, setThankYouPage] = useState<boolean>(false);

  const clickHandler = () => {
    setEnrollPage(true);
  };

  if (enrollPage) return <Course />;
  if (thankYouPage)
    return (
      <div>
        <div
          style={{ border: "2px solid white", width: "50px" }}
          onClick={clickHandler}
        >
          <b>Home</b>
        </div>
        <p>Thank you for buying the course</p>
      </div>
    );

  return (
    <div>
      <div
        style={{ border: "2px solid white", width: "50px" }}
        onClick={clickHandler}
      >
        <b>Home</b>
      </div>
      <h3>{eventData[0]}</h3>
      <p>Course details:</p>
      <p>{eventData[1]}</p>
      <p>Skills You will learn:</p>
      <ul>
        {eventData[2].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={() => handleClick(eventData[3])}>Buy course</button>
    </div>
  );
};

export default CourseData;
