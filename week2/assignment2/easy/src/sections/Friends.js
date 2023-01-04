import React from "react"; // Import the React library
import Title from "../components/Title"; // Import the Title component from the "../components/Title" directory
import { Row, Col, Card, CardImg, CardBody, CardText } from "reactstrap";

// The Friends function takes in a "user" prop and returns a JSX element
function Friends({ user }) {
  const FriendsCount = user.friends.length;
  return (
    <div>
      {/* display the title component with the title FRIENDS and the num of friends */}
      <Title title={"FRIENDS"} number={4} />
      {/* display children's info here */}
      <Row>
        {user.friends.map((friend) => (
          <Col>
            <Card className="friend" data-testid="friend-card" key={friend.id}>
              <CardImg
                width="100%"
                src={friend.avatar}
                alt="image"
                data-testid="child-avatar"
              />
              <CardBody>
                <CardText>First name : {friend.firstName}</CardText>
                <CardText>Gender : {friend.gender}</CardText>
                <CardText>Birthday : {friend.birthday}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Friends; // Export the Friends component
