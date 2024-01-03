import '../../styles/question.css'
export default function Question(props) {
  const ansAndQes=props.ansAndQes;
  const quesNo=props.quesNo;
    return(
      <div className="Question">
        <div className="send-chat-container">

          <div className="senderInfo">
            <span className="senderName">Q.{quesNo}</span>
            <span className="senderName">{"~Premnarayan"}</span>
            {/* <span className='sender-img-container'>
              <img src={""} alt="user-pic" />
            </span> */}
          </div>

          <div className="chatMessage">
              <p>{ansAndQes.question}</p>
          </div>

          <div className="dateAndTime">
            <span>{ansAndQes.date}</span>
            <span>{ansAndQes.time}</span>
          </div>
        </div>
      </div>
    )
}