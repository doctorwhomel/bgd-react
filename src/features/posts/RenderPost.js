import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  PanResponder,
  Share,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";
import * as Animatable from "react-native-animatable";
import { CardBody } from "reactstrap";

const RenderPost = (props) => {
  const { post } = props;

  const view = useRef();

  if (post) {
    return (
      <Animatable.View
        animation="fadeInDownBig"
        duration={1000}
        delay={1000}
        ref={view}
      >
        <Card color="dark">
          <CardBody>
            <Card.Image source={post.image}>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  backgroundColor: "black",
                }}
              >
                <Text style={styles.cardText}>{post.author}</Text>
              </View>
            </Card.Image>
            <Text style={styles.cardText}>{post.caption}</Text>
            <View style={styles.cardRow}></View>
          </CardBody>
        </Card>
      </Animatable.View>
    );
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 100,
    marginBottom: 100,
    color: "dark",
  },

  cardRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  cardText: {
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    textAlign: "center",
    color: "black",
    fontSize: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default RenderPost;
