import '../../styles/answer.css';
export default function Question(props) {
  const ansAndQes=props.ansAndQes;
  const quesNo=props.quesNo;
    return(
      <div className="Answer">
        <div className="send-chat-container">

          <div className="senderInfo">
            <span className="senderName">Q.{quesNo+": Ans"}</span>
            <span className="senderName"> ~By Sciastra</span>
            <span className='sender-img-container'>
              <img src={require('../../assets/mp-icon-3.png')} alt="user-pic" />
            </span>
          </div>

          <div className="chatMessage">
              <p>{ansAndQes.ans}</p>
          </div>

          <div className="dateAndTime">
            <span>{ansAndQes.date}</span>
            <span>{ansAndQes.time}</span>  
          </div>
        </div>
      </div>
    )
}