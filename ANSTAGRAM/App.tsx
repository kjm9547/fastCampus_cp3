import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { FeedListItem } from "./src/components/FeedListItem";
import { RootApp } from "./src/RootApp";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootApp/>
      </Provider>
    </SafeAreaProvider>
    
  );
}
