import { Window, View, Text, Image } from "@vixen-js/core-react";
import { QIcon } from "@vixen-js/core";
import styles from "./assets/styles/styles.css?raw";
import vixenLogo from "./assets/images/Logo.png";
import tsLogo from "./assets/images/typescript.svg";

const App = () => {
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
      </View>
    </Window>
  );
};

export default App;
