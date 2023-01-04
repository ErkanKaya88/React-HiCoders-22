import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import Title from "../components/Title";

function Person({ user }) {
  return (
    <div>
      {/* display the title component with the text PERSON  */}
      <Title title={"PERSON"} number={null} />
      {/* display person's info here */}
      <Card>
        <CardImg width="100%" src={user.avatar} alt="image" />
        <CardBody>
          <CardTitle>Your Profile</CardTitle>
          <CardText>First name : {user.first_name}</CardText>
          <CardText>Last name : {user.last_name}</CardText>
          <CardText>Address : {user.address}</CardText>
          <CardText>Gender : {user.gender}</CardText>
          <CardText>Email : {user.email}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Person;
