import { Window, View, Text, Image } from "@vixen-js/core-react";
import styles from "./assets/styles/styles.css?raw";
import { QIcon } from "@vixen-js/core";

const App = () => {
  return (
    <Window
      styleSheet={styles}
      size={{ width: 800, height: 600 }}
      windowTitle="Vixen UI React"
      windowIcon={
        new QIcon(
          "https://raw.githubusercontent.com/Vixen-js/template-vanilla-ts/refs/heads/main/src/assets/images/Logo.png"
        )
      }
    >
      <View id="root">
        <Text id="label1">Hello Vixen React!</Text>
        <Image
          id="image"
          scaledContents={true}
          size={{ width: 100, height: 100 }}
          src="https://raw.githubusercontent.com/Vixen-js/template-vanilla-ts/refs/heads/main/src/assets/images/Logo.png"
        />
        <Text id="label2">
          Yey... You have your first Vixen UI React Application working...
        </Text>
      </View>
    </Window>
  );
};

export default App;
