// teacher componenet
//write the code here
import React from "react";

function Teacher({ person }) {
  return (
    <>
      {/* propslari buraya ekledim ve data test id.lerini de ekledim */}
      <p className="text-dark" data-testid="teacher">
        I am a Teacher, my name is {person.name}
      </p>
    </>
  );
}

export default Teacher;
