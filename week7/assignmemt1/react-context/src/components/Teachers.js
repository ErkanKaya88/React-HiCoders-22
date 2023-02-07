import React, { useContext } from "react";
import Navbar from "./Navbar";
import { PersonContext } from "../contexts/PersonContext";
import { ListGroup, ListGroupItem } from "reactstrap";

const Teachers = () => {
  const { person } = useContext(PersonContext);
  const teacherListTemplate = person.filter(
    (item) => item.profession === "teacher"
  );

  return (
    <>
      <Navbar />
      <div className=" container-fluid mt-4 mx-auto">
        <h3>Teacher List:</h3>
        <ListGroup numbered>
          {teacherListTemplate.map((teacher, index) => (
            <ListGroupItem key={index}>
              {teacher.firstName} {teacher.lastName} <br />
              Profession : {teacher.subject}
              <br />
              Email : {teacher.email}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Teachers;
