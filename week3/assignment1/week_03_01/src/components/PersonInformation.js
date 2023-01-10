import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";
import { useState } from "react";

//divided their staff according to their profession
// write the code and function here

function PersonInformation({ personList }) {
  //butonlar icin useState kullandim
  const [isClickedStudent, setIsClickedStudent] = useState(false);
  const [isClickedTeacher, setIsClickedTeacher] = useState(false);

  return (
    <>
      <div className="row">
        <button
          className="col-2 btn btn-dark mb-3"
          data-testid="button-students"
          // Tiklandiginda useState fonksiyonu calisacek ve button ismin ide bu fonsiyona bagladim ve button ismini degistirdim.
          onClick={() => {
            setIsClickedStudent(!isClickedStudent);
          }}
        >
          {!isClickedStudent ? "Student List Open" : "Student List Close"}
        </button>

        <button
          className="col-2 btn btn-danger ms-4 mb-3"
          data-testid="button-teachers"
          // Tiklandiginda useState fonksiyonu calisacek ve button ismin ide bu fonsiyona bagladim ve button ismini degistirdim.
          onClick={() => {
            setIsClickedTeacher(!isClickedTeacher);
          }}
        >
          {!isClickedTeacher ? "Teacher List Open" : "Teacher List Close"}
        </button>
      </div>

      <div className="row">
        {isClickedStudent === true && (
          <div data-testid="student-list" className="col-4 bg-dark ">
            <h2 className="text-white text-decoration-underline">
              Student List
            </h2>
            <div className="text-danger">
              {/* ogrencileri filtreledim ve props ekledim             */}
              {personList
                .filter((person) => person.profession === "Student")
                .map((person) => (
                  <Student person={person} />
                ))}
            </div>
          </div>
        )}
        {!isClickedTeacher === false && (
          <div data-testid="teacher-list" className="col-4 bg-danger ms-3">
            <h2 className="text-white text-decoration-underline">
              Teacher List
            </h2>
            {/* ogretmenleri filtreledim ve props ekledim             */}
            <div className="font-weight-bold">
              {personList
                .filter((person) => person.profession === "Teacher")
                .map((person) => (
                  <Teacher person={person} />
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonInformation;
