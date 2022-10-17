import { Container, Col, Row, CardImg, Card } from "reactstrap";
import BGDLogo from "../app/assets/img/BGD_logo.png";
import Example from "../components/BigTopCarousel";

const HomePage = () => {
  return (
    <Container className="container-body">
      <Row>
        <Col>
          <Example />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardImg
            className="mx-auto d-block"
            style={{ width: "50vh" }}
            src={BGDLogo}
            alt="Bellingham Game Dev"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-left">
            Bellingham Game Dev showcases local independent game developers and
            their games. The intent is to both promote the games and create a
            community of artists in the same way that indie record labels
            promote up-and-coming musicians and non-profit theaters support
            local performing artists.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
