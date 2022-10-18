import { Container, Col, Row, CardImg, Card } from "reactstrap";
import BGDLogo from "../app/assets/img/BGD_logo.png";
import Example from "../components/BigTopCarousel";

const HomePage = () => {
  return (
    <>
      <Row className="align-items-center" style={{ padding: "none" }}>
        <Col className="d-flex">
          <Example />
        </Col>
      </Row>
      <Container className="align-items-center container-fluid">
        <Row>
          <Col>
            <CardImg
              className="mx-auto d-block"
              style={{ width: "35vw" }}
              src={BGDLogo}
              alt="Bellingham Game Dev"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="9">
            <p className="text-left">
              Bellingham Game Dev showcases local independent game developers
              and their games. The intent is to both promote the games and
              create a community of artists in the same way that indie record
              labels promote up-and-coming musicians and non-profit theaters
              support local performing artists.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
