import { FeedInfo } from "../@types/FeedInfo"
import { CREATE_FEED_SUCCESS, FAVORITE_FEED_SUCCESS, GET_FEED_LIST_SUCCESS, TypeFeedListActions } from "../actions/feed"

//ts와 tsx의 차이는 js의 유무???
export type TypeFeedListReducer={
    list:FeedInfo[]
}
const defaultFeedListState:TypeFeedListReducer = {
    list:[]
}

export const feedListReducer = (state:TypeFeedListReducer=defaultFeedListState, action:TypeFeedListActions)=>{
    switch(action.type){
        case GET_FEED_LIST_SUCCESS:
            console.log("items1")
            return{
                ...state,
                list:action.list,
            }
        case CREATE_FEED_SUCCESS:
            console.log("items2")
            return{
                ...state,
                list:state.list.concat([action.item])
            }
        case FAVORITE_FEED_SUCCESS:{
            console.log("items")
            return{
                ...state,
                list:state.list.map((item)=>{
                    if(action.feedId == item.id){
                        return{
                            ...item,
                            likeHistory:
                                action.action === 'add' ? 
                                    item.likeHistory.concat([action.myId]):
                                    item.likeHistory.filter((item)=> item!== action.myId)
                        }
                    }
                    
                    return{...item}
                })
            }
            
        }
    }
    return{
        ...state
    }
}