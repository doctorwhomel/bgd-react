import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "../../display/AnimatedNewsCard";
import { selectAllPosts } from "./postsSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  console.log("posts:", posts);

  const isLoading = useSelector((state) => state.posts.isLoading);
  const errMsg = useSelector((state) => state.posts.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }

  return (
    <Row>
      {posts.map((post) => {
        return (
          <Col lg={4} key={post.id}>
            <AnimatedDisplayCard item={post} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PostsList;
