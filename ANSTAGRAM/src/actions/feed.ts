import { FeedInfo } from "../@types/FeedInfo"
import { sleep } from "./utils/sleep"
import {ThunkActionDispatch,ThunkAction, ThunkDispatch} from 'redux-thunk'
import { RootReducer } from "../store"
export const GET_FEED_LIST_REQUEST = 'GET_FEED_LIST_REQUEST' as const
export const GET_FEED_LIST_SUCCESS = 'GET_FEED_LIST_SUCCESS' as const
export const GET_FEED_LIST_FAILURE = 'GET_FEED_LIST_FAILURE' as const

export const CREATE_FEED_REQUEST = 'CREATE_FEED_REQUEST' as const
export const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS' as const
export const CREATE_FEED_FAILURE = 'CREATE_FEED_FAILURE' as const

export const FAVORITE_FEED_REQUEST = 'FAVORITE_FEED_REQUEST' as const;
export const FAVORITE_FEED_SUCCESS = 'FAVORITE_FEED_SUCCESS' as const;
export const FAVORITE_FEED_FAILURE = 'FAVORITE_FEED_FAILURE' as const;

export const getFeedListRequest = ()=>{
    console.log("testetsts")
    return{
        type:GET_FEED_LIST_REQUEST
    }
}


export const getFeedListSuccess = (list:FeedInfo[])=>{
    return{
        type:GET_FEED_LIST_SUCCESS,
        list
    }
}

export const getFeedListFailure = ()=>{
    return{
        type:GET_FEED_LIST_FAILURE,
    }
}

export const createFeedRequest = ()=>{
    return {
        type: CREATE_FEED_REQUEST,
    }
}

export const createFeedSuccess = (item:FeedInfo)=>{
    return {
        type:CREATE_FEED_SUCCESS,
        item
    }
}

export const createFeedFailure = ()=>{
    return {
        type: CREATE_FEED_FAILURE 
    }
}

export const favoriteFeedRequest = ()=>{
    return {
        type:FAVORITE_FEED_REQUEST 
    }
}
export const favoriteFeedSuccess = (feedId:FeedInfo['id'],myId:string, action:'add'|'del')=>{

    return {
        type:FAVORITE_FEED_SUCCESS,
        feedId,
        myId,
        action
    }
}

export const favoriteFeedFailure = ()=>{
    return {
        type:FAVORITE_FEED_FAILURE
    }
}

//Omit?? 값들을 받아올때 특정값을 뺴오고 가져옴 현재 피드인포는 데이터가 널인 부분이 있는데 해당 함수에서는 지정을해주어 값이 다름
export const createFeed = (item:Omit<FeedInfo,'id'|'writer'|'createAt'|'likeHistory'>):TypeFeedListThunkAction => async (dispatch,getState)=>{
    dispatch(createFeedRequest());

    const createAt = new Date().getTime()
    const userInfo = getState().userInfo.userInfo

    console.log(userInfo,'userInfo')
    await sleep(2000);
    dispatch(createFeedSuccess({
        id:'ID-10',
        content:item.content,
        writer:{
            name: userInfo?.name ?? 'Unknown',
            uid: userInfo?.uid?? 'Unknown'
        },
        imageUrl:item.imageUrl,
        likeHistory:[],
        creaetedAt:createAt
    }));
}

export const favoriteFeed = (item:FeedInfo):TypeFeedListThunkAction =>async(dispatch,getState)=>{
    dispatch(favoriteFeedRequest())

    const myId = getState().userInfo.userInfo?.uid || null;
    if(myId === null){
        dispatch(favoriteFeedFailure())
        return;
    }
    await sleep(1000);

    const hasMyId = item.likeHistory.filter((likeUserId)=>likeUserId ===myId).length

    if(hasMyId){
        //if true create consume action
        dispatch(favoriteFeedSuccess(item.id,myId,'del'))
    }
    else{
        dispatch(favoriteFeedSuccess(item.id,myId,'add'))
    }
    
    
}

export const getFeedList = ():TypeFeedListThunkAction=>async(dispatch) => {
    dispatch(getFeedListRequest())
    //await sleep(500);
    dispatch(
        getFeedListSuccess([{
        id:'ID_01',
    content:"CONTENT_01",
    writer:{
        name:'WRITER_NAME_01',
        uid:'WRITER_UID_01'
    },
    imageUrl:'https://docs.expo.dev/static/images/tutorial/background-image.png',
    likeHistory:['UID_01','UID_02','UID_03'],
    creaetedAt:new Date().getTime(),

    },

    {
        id:'ID_02',
    content:"CONTENT_02",
    writer:{
        name:'WRITER_NAME_02',
        uid:'WRITER_UID_02'
    },
    imageUrl:'https://docs.expo.dev/static/images/tutorial/background-image.png',
    likeHistory:['UID_02','UID_02','UID_03'],
    creaetedAt:new Date().getTime(),

    },
    {
        id:'ID_03',
    content:"CONTENT_03",
    writer:{
        name:'WRITER_NAME_03',
        uid:'WRITER_UID_03'
    },
    imageUrl:'https://docs.expo.dev/static/images/tutorial/background-image.png',
    likeHistory:['UID_01','UID_02','UID_03'],
    creaetedAt:new Date().getTime(),

    }
]))
}

export type TypeFeedListDispatch = ThunkDispatch<RootReducer,undefined,TypeFeedListActions>

export type TypeFeedListThunkAction = ThunkAction<void,RootReducer,undefined,TypeFeedListActions>
export type TypeFeedListActions =
    | ReturnType<typeof getFeedListRequest>
    | ReturnType<typeof getFeedListSuccess>
    | ReturnType<typeof getFeedListFailure>
    | ReturnType<typeof createFeedFailure>
    | ReturnType<typeof createFeedRequest>
    | ReturnType<typeof createFeedSuccess>
    | ReturnType<typeof favoriteFeedFailure>
    | ReturnType<typeof favoriteFeedRequest>
    | ReturnType<typeof favoriteFeedSuccess>

    