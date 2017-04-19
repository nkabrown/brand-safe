// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  hair: require("../assets/hair.png"),
  orange: require("../assets/orange.png"),
  clounds: require("../assets/clouds.png"),
  creative: require("../assets/creative.png"),
  meat: require("../assets/meat.png"),
  heart: require("../assets/heart.png"),
  death: require("../assets/death.png"),
  skulls: require("../assets/skulls.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={2} caps>Brand Safety Challenges on YouTube</Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.hair.replace("/", "")}>
          <Heading size={3} margin="350px 0 0" textColor="#6fffcb">Don't Hug Me. I'm Scared</Heading>
        </Slide>
      </Deck>
    );
  }
}
