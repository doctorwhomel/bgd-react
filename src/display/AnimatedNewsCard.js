import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";

const AnimatedDisplayCard = ({ item }) => {
  const { image, headline, caption } = item;
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <Card className="customCard">
        <CardImg src={image} alt={headline} />
        <CardImgOverlay>
          <CardBody>
            <CardTitle>
              <strong>{headline}</strong>
            </CardTitle>
            <CardText>{caption}</CardText>
          </CardBody>
        </CardImgOverlay>
      </Card>
    </animated.div>
  );
};

export default AnimatedDisplayCard;
