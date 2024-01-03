import '../../styles/chatbot.css';
import containerDisplay from '../../styles/chatbotContainerDisplay.module.css';
import { Answer,Question,ChatBoard } from "./index";
export default function Chatbot(props){
  const {chatbotContainerRef,chatList}=props;

  //Close chatbot
  const closeChatbot=()=>{
    chatbotContainerRef.current.className=containerDisplay.displayNone;
  }

  return(
         
    <div className="Chatbot">
      <header className="chatbotHeader">
        <div className='roundedImageContainer'>
          <img src={require('../../assets/myPhoto.jpg')} alt="pdf-pic" />
        </div>

        <span className="profileName">Premnarayan</span>
        <span className="profileName">Total Ques: {chatList.length}</span>

        <button className='closeChatbotBtn' onClick={closeChatbot}>
         <img src={require('../../assets/crossbtn.png')} alt='cut'/>
        </button>
      </header>

      <main className="chatbotMain">
      {chatList.map((ansAndQes,index) => 
        <div>
         <Question ansAndQes={ansAndQes} key={`ques-${index}`}  quesNo={index+1}/>
         <Answer ansAndQes={ansAndQes} key={`ans-${index}`} quesNo={index+1}/>
        </div>
      )}

      {
        chatList.length===0 &&
        <h1 className="notChat">Nothing Chats</h1>
      }

      </main>

     
      <footer className="chatbotFooter">
        <ChatBoard />
      </footer>
    </div>
)

}

 /* <button className="description" onClick={()=>this.handleDescriptionClick()}>
           Description...
        </button> */