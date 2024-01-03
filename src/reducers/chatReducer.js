import { 
    ADD_CHAT_LIST,
    ADD_CHAT_TO_LIST,  
    CLEAR_CHATS,
   } from "../actions/actionType"


const initialChatState={
  chatList:[],
};

    export  default function chats(state=initialChatState,action){

        switch(action.type){

            case ADD_CHAT_LIST:
            return {
                ...state,
                chatList:action.chatList
            }

            case ADD_CHAT_TO_LIST:
            return {
                ...state,
                chatList:[...state.chatList,action.chat]
            }
                
            case CLEAR_CHATS:
               
                return{
                    chatList:[],
                }
                
            default:
             return state;
        }
        
   }