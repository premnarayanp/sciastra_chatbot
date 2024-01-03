import{Component} from "react"
import '../../styles/chatBoard.css';
// import {addChatToList} from '../actions/chatActionCreator';
// import {getAnswerOfQues} from '../api/index';
export default class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputChat:'',
    };
  }

 //get current time in hour,minutes, and AM or PM and date
 getCurrentTime() {
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
   const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
   //console.log("================currentDate=======",currentDate);

  return {
    time:time,
    date:currentDate
  };
}

  SendChat= async ()=>{
    const {date,time}=this.getCurrentTime();
    const initialChats={
       date:date,
       time:time,
       question:this.state.inputChat
    };

      // this.props.store.dispatch(addChatToList(response.data.ansAndQues));
      // this.setState({inputChat:""})
  }

  render(){
   
    return( 
            <div className="ChatBoard">
              <textarea 
               value={this.state.inputChat} 
               onChange={(e)=>{ this.setState({inputChat:e.target.value})}} 
               type="text" className="chatInput">
              </textarea>

              <button className="sendChatBtn" onClick={()=>this.SendChat()}>
                <img src={require('../../assets/send.png')} alt="" />
              </button>
            </div>
    )
  }
}
