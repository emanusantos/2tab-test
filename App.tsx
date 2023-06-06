import { StyleSheet, useWindowDimensions } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import Routes from "./routes";

export default function App() {
  const { width } = useWindowDimensions();
  const rem = width > 380 ? 18 : 16;

  EStyleSheet.build({
    $rem: rem,
  });

  return <Routes />;
}
