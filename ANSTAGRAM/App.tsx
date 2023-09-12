import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { FeedListItem } from "./src/components/FeedListItem";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <FeedListItem
          image='http://docs.expo.dev/static/images/tutorial/background-image.png'
          likeCount={10}
          writer='Pratt Yeon'
          comment="This is Test"
          isLiked={false}
          onPressFeed={()=>{
            console.log('hi')
          }}
        />
      </View>
    </SafeAreaProvider>
    
  );
}
