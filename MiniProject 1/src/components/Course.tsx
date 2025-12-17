import { useState } from "react";
import EmitEvent from "../EmitEvent";
import CourseData from "./CourseData";

const Course = () => {
  const [enrollPage, setEnrollPage] = useState<boolean>(true);
  const [event, setEvent] = useState<string>("");
  const handleClick = (eventName: string) => {
    console.log(eventName + " is fired");
    setEnrollPage(false);
    setEvent(eventName);
    EmitEvent(eventName);
    //other staff logic
  };
  if (enrollPage)
    return (
      <div>
        <h1>Welcome to our Course Platform</h1>
        <div className="Container">
          <button onClick={() => handleClick("EnrollCourseEventJavaStack")}>
            Enroll Java Stack Development course
          </button>
          <button onClick={() => handleClick("EnrollCourseEventDataScience")}>
            Enroll Data Science course
          </button>
          <button onClick={() => handleClick("EnrollCourseEventDSAInJava")}>
            Enroll DSA in Java course
          </button>
          <button onClick={() => handleClick("EnrollCourseEventMERNStack")}>
            Enroll Full stack Development course
          </button>
        </div>
      </div>
    );

  return <CourseData eventName={event} />;
};

export default Course;
