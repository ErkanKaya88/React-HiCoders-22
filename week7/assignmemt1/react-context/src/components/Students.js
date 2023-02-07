import React, { useContext } from "react";
import Navbar from "./Navbar";
import { PersonContext } from "../contexts/PersonContext";
import { ListGroup, ListGroupItem } from "reactstrap";

const Students = () => {
  const { person } = useContext(PersonContext);

  const studentListTemplate = person.filter(
    (item) => item.profession === "student"
  );

  return (
    <>
      <Navbar />
      <div className=" container-fluid mt-4 mx-auto">
        <h3>Student List:</h3>
        <ListGroup numbered>
          {studentListTemplate.map((student, index) => (
            <ListGroupItem key={index}>
              {student.firstName} {student.lastName} <br />
              Profession : {student.profession}
              <br />
              Email : {student.email}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Students;
