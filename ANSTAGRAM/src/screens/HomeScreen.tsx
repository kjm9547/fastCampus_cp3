import React, { useCallback, useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import { getFeedList, TypeFeedListDispatch } from "../actions/feed";
import { FeedListItem } from "../components/FeedListItem";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { useRootNavigation } from "../navigations/RootStackNavigation";
import { useTotalFeedList } from "../selectors/feed";

export const HomeScreen:React.FC= () =>{
    const rootNavigation = useRootNavigation();
    const FeedList = useTotalFeedList();
    const dispatch = useDispatch<TypeFeedListDispatch>()
    const onPressHome = useCallback(()=>{
        rootNavigation.navigate('AddFeed')
    },[])

    useEffect(()=>{
        dispatch(getFeedList())
    },[])
    return(
        <View style={{flex:1}}>
            <Header>
                <Header.Title title="HOME"></Header.Title>
                <Header.Icon iconName="add" onPress={onPressHome}></Header.Icon>
             </Header>
             <FlatList
                data={FeedList}
                renderItem={({item})=>{
                    return(
                        <FeedListItem
                            image={item.imageUrl}
                            comment={item.content}
                            isLiked={false}
                            likeCount={item.likeHistory.length}
                            writer={item.writer.name}
                            onPressFeed={()=>{console.log("test")}}
                        />
                    )
                }}
                ItemSeparatorComponent={()=>(
                    <Spacer space={24}/>
                    )}
                />
        </View>
    )
}