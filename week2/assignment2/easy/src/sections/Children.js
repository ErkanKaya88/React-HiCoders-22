import React from "react"; // Import the React library
import Title from "../components/Title"; // Import the Title component from the "../components/Title" directory
import { Row, Col, Card, CardImg, CardBody, CardText } from "reactstrap";

function Children({ user }) {
  const ChildrenCount = user.children.length;
  return (
    <div>
      {/* display the title component with the title CHILDREN and the num of children */}
      <Title title={"CHILDREN"} number={ChildrenCount} />
      {/* display children's info here */}
      <Row>
        {user.children.map((child) => (
          <Col>
            <Card>
              <CardImg
                width="100%"
                src={child.avatar}
                alt="image"
                data-testid="child-avatar"
              />
              <CardBody>
                <CardText>First name : {child.firstName}</CardText>
                <CardText>Gender : {child.gender}</CardText>
                <CardText>Birthday : {child.birthday}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Children;
