import { Window, View, Text, Image, Button } from "@vixen-js/core-react";
import { QIcon } from "@vixen-js/core";
import styles from "./assets/styles/styles.css?raw";
import vixenLogo from "./assets/images/Logo.png";
import tsLogo from "./assets/images/typescript.svg";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <Window
      styleSheet={styles}
      size={{ width: 800, height: 600 }}
      windowTitle="Vixen UI React"
      windowIcon={new QIcon(tsLogo)}
    >
      <View id="root">
        <Text id="label1">Hello Vixen React!</Text>
        <Image
          id="image"
          scaledContents={true}
          size={{ width: 100, height: 100 }}
          src={vixenLogo}
        />
        <Text id="label2">
          Open yout App.tsx file and modify to see the changes
        </Text>
        <View style="margin-top: 20px" />
        <Text style="color: #A7D2D1; font-size: 24px;">
          You clicked {counter} times
        </Text>
        <Button
          id="button"
          text="Click me"
          styleSheet={buttonStyles}
          onClick={handleOnClick}
        />
      </View>
    </Window>
  );
};

const buttonStyles = `
  #button {
    margin-top: 10px;
    width: 200px;
    height: 40px;
    background-color: #4a4a4a;
    color: white;
    border: 0;
  }
  
  #button:hover {
    background-color: #5f5f5f;
  }

  #button:pressed {
    color: #4a4a4a;
    background-color: white;
  }
`;

export default App;
