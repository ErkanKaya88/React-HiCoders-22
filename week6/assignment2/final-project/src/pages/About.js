import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import {
  UncontrolledCarousel,
  CardBody,
  Card,
  CardImg,
  CardTitle,
  CardText,
  List,
} from "reactstrap";
import school from "../img/school.jpg";

const About = () => {
  return (
    <>
      <CustomNavbar />
      <UncontrolledCarousel
        className="m-2"
        items={[
          {
            altText: "Slide 1",
            caption: "Slide 1",
            key: 1,
            src: "https://picsum.photos/id/456/900/180",
          },
          {
            altText: "Slide 2",
            caption: "Slide 2",
            key: 2,
            src: "https://picsum.photos/id/356//900/180",
          },
          {
            altText: "Slide 3",
            caption: "Slide 3",
            key: 3,
            src: "https://picsum.photos/id/256//900/180",
          },
        ]}
      />
      <Card className="my-2">
        <CardImg
          className="p-3 pb-0"
          alt="Card image cap"
          src={school}
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Wir sind eine Schule, die mit zeitgemäßen,
          </CardTitle>
          <CardText>
            <List>
              <li>
                lebensnahen Methoden die Lernkompetenz und Selbstständigkeit der
                Schülerinnen und Schüler entwickelt,
              </li>
              <li>
                die eine differenzierte Förderung der Schülerinnen und Schüler
                ermöglicht,
              </li>
              <li>
                die Schülerinnen und Schüler auf ihren Entwicklungs- und
                Ausbildungswegen individuell begleitet und berät,
              </li>
              <li>
                in der sich Schüler/innen und Lehrer/innen als Persönlichkeiten
                begegnen,
              </li>
              <li>die Bildung und Entwicklung gemeinsam gestalten,</li>
              <li>
                die berufsbezogen und praxisnah ausbildet, die Gesundheit und
                den verantwortungsbewussten Umgang mit der Umwelt zum Thema
                macht,
              </li>
              <li>
                in der Gewalt- und Suchtprävention eine wichtige Rolle spielen,
                die alle am Schulleben Beteiligten bei der Entwicklung ihrer
                Persönlichkeitunterstützt,
              </li>
              <li>die gegenseitige Wertschätzung fördert,</li>
              <li>
                ein Ort der Begegnung und Kommunikation ist, in der gemeinsame
                Veranstaltungenein fester Bestandteil des Schullebens sind,
              </li>
              <li>
                die mit örtlichen Vereinen, Kirchen und Kindergärten, der
                Gemeinde und Wirtschaftsbetrieben zusammenarbeitet.
              </li>
            </List>
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default About;
