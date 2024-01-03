import{useState} from "react"
import '../../styles/chatBoard.css';
import {addChatToList} from '../../actions/chatActionCreator';
// import {getAnswerOfQues} from '../api/index';
export default function ChatBoard(props) {

  const [inputChat, setInputChat]=useState("");
   const {dispatch}=props;


 //get current time in hour,minutes, and AM or PM and date
 function getCurrentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let am_pm = (hour >= 12 && hour < 24) ? 'PM' : 'AM';

  hour = (hour > 12) ? hour - 12 : hour;
  if (hour === 0) {
      hour = 12;
  }

   hour= hour<10? "0"+hour :hour;
   minute= minute<10? "0"+minute :minute;

   const time=hour+":"+minute+" "+am_pm
   const currentDate=date.getDate()+"/"+ (date.getMonth()===0?"01":date.getMonth())+"/"+date.getFullYear();
   //console.log("================currentDate=======",currentDate);

  return {
    time:time,
    date:currentDate
  };
}

  const SendChat= async ()=>{
    const {date,time}=getCurrentTime();
    const initialChats={
       date:date,
       time:time,
       question:inputChat,
       ans:"I could not give your answer now because API work on hold,wait for few day.Thanks."
    };

      dispatch(addChatToList(initialChats));
      setInputChat("")
  }

  return( 
        <div className="ChatBoard">
          <textarea 
            value={inputChat} 
            onChange={(e)=> setInputChat(e.target.value)} 
            type="text" className="chatInput"
            placeholder="Type your query...">
          </textarea>

          <button className="sendChatBtn" onClick={()=>SendChat()}>
            <img src={require('../../assets/send.png')} alt="" />
          </button>
        </div>
  )
}
