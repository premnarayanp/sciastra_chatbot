import { 
         ADD_CHAT_LIST,
         ADD_CHAT_TO_LIST, 
         CLEAR_CHATS
        } from "./actionType"


 //Action creator for chats
export function addChatList(chatList){
    return{
         type:ADD_CHAT_LIST,
         chatList
     }
}

export function addChatToList(chat){
    return{
         type:ADD_CHAT_TO_LIST,
         chat
     }
 }


 export function clearChats(){
    return{
         type:CLEAR_CHATS,
     }
 }


