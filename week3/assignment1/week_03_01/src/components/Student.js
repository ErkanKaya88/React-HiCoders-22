// student componenet
//write the code here
import React from "react";

function Student({ person }) {
  return (
    <>
      {/* propslari buraya ekledim ve data test id.lerini de ekledim */}
      <p className="text-danger" data-testid="student">
        I am a Student, my name is {person.name}
      </p>
    </>
  );
}

export default Student;
