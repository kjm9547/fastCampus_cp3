import { FeedInfo } from "../@types/FeedInfo"
import { UserInfo } from "../@types/UserInfo"
import { GET_MY_FEED_SUCCESS, SET_USER_INFO, TypeUserInfoActions } from "../actions/user"

//ts와 tsx의 차이는 js의 유무???
export type TypeUserInfoReducer={
    userInfo:UserInfo | null,
    myFeedList:FeedInfo[]
}
const defaultUserInfoReducer:TypeUserInfoReducer = {
    //list:[]
    userInfo:null,
    myFeedList:[]
}

export const userInfoReducer = (state=defaultUserInfoReducer, action:TypeUserInfoActions)=>{
    switch(action.type){
        case SET_USER_INFO:{
            console.log("items")
            return{
                ...state,
                userInfo:action.user
            }
        }
        case GET_MY_FEED_SUCCESS:{
            console.log("items")
            return{
                ...state,
                myFeedList:action.list
            }
        }

    }
    return{
        ...state
    }
}