import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from "./AnimatedNewsCard";
import { selectFeaturedPosts } from "../features/posts/postsSlice";
import Error from "../components/Error";
import Loading from "../components/Loading";

const DisplayLatestPosts = () => {
  const items = useSelector((state) => [selectFeaturedPosts(state)]);

  console.log("display items:", items);

  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        }
        return (
          featuredItem && (
            <Col key={idx}>
              <AnimatedDisplayCard item={featuredItem} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayLatestPosts;
