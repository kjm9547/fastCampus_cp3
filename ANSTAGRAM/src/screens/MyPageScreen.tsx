
import React, { useEffect, useMemo } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header/Header";
import { useMyFeedList } from "../selectors/user";
import { FeedInfo } from "../@types/FeedInfo";
import { RemoteImage } from "../components/RemoteImage";
import { useRootNavigation } from "../navigations/RootStackNavigation";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { getMyFeedList, TypeUserDispatch } from "../actions/user";
export const MyPageScreen:React.FC= () =>{
    const data = useMyFeedList()
    const {width} = useWindowDimensions()
    const rootNavigation  =useRootNavigation()
    const photoSize = useMemo(()=>{
        return width/3
    },[width])
    
    const dispatch = useDispatch<TypeUserDispatch>()

    useEffect(()=>{
        dispatch(getMyFeedList())
    },[])
    return(
        <View style={{flex:1}}>
            <Header>
                <Header.Title title="MY PAGE"></Header.Title>
             </Header>

             <FlatList<FeedInfo>
                data={data}
                numColumns={3}
                renderItem={({item})=>{
                    return(
                        <Button onPress={()=>{
                            rootNavigation.navigate('FeedList',{list:data})
                        }}>
                            <RemoteImage url={item.imageUrl} width={photoSize} height={photoSize}/>
                        </Button>

                    )
                }}
             />
        </View>
    )
}