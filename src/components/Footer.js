import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col sm="4">
            <h5 className="nav-label">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="footerLink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footerLink" to="/games">
                  Games
                </Link>
              </li>
              <li>
                <Link className="footerLink" to="/studios    ">
                  Studios
                </Link>
              </li>
              <li>
                <Link className="footerLink" to="/artists    ">
                  Artists
                </Link>
              </li>
              <li>
                <Link className="footerLink" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footerLink" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm="4" className="text-center">
            <h5 className="nav-label">Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>
          <Col sm="4" className="text-center">
            <a role="button" className="footerLink" href="tel:+13607391352">
              <i className="fa fa-phone" /> 360-739-1352
            </a>
            <br />
            <a
              role="button"
              className="footerLink"
              href="mailto:williamhomel@gmail.com"
            >
              <i className="fa fa-envelope-o" /> williamhomel@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
