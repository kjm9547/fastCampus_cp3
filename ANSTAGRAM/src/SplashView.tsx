import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Typography } from "./components/Typography";
import { GoogleSignin,GoogleSigninButton } from "@react-native-google-signin/google-signin";

export const SplashView:React.FC<{onFinishLoad:()=>void}> = (props) => {
    useEffect(()=>{
        /*setTimeout(()=>{
                props.onFinishLoad()
        },1000)*/
        appInit
    },[])

    const onPressSignin = useCallback(async ()=>{
        
    },[])

    const appInit = useCallback(()=>{

    },[])
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <GoogleSigninButton onPress={onPressSignin}/>
        </View>
    )
}