import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { HeaderWithoutCompound } from "./src/component/HeaderWithoutCompound";
import { Header } from "./src/component/Header/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, }}>
        {/*<HeaderWithoutCompound title="HEADER"></HeaderWithoutCompound>*/}
        <Header>
          <Header.Group>
            <Header.Icon iconName='arrow-back' />
            <Header.Title title="HEADER" />
          </Header.Group>
          <Header.Icon iconName='close'></Header.Icon>
        </Header>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
