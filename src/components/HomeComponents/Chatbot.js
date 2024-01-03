import '../../styles/chatbot.css';
import containerDisplay from '../../styles/chatbotContainerDisplay.module.css';
export default function Chatbot(props){
  const {chatbotContainerRef}=props;

  //Close chatbot
  const closeChatbot=()=>{
    chatbotContainerRef.current.className=containerDisplay.displayNone;
  }
 return (
    <div className="Chatbot">
        <button className='closeChatbotBtn' onClick={closeChatbot}>
            <img src={require('../../assets/crossbtn.png')} alt='cut'/>
          </button>   
    </div>
  );

}