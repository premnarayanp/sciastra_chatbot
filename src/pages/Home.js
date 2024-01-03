import containerDisplay from '../styles/chatbotContainerDisplay.module.css';
import styles from '../styles/home.module.css';
import { chatList}  from '../dummyChats';
import {Chatbot} from '../components/HomeComponents/index';
import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {addChatList} from '../actions/chatActionCreator';

function Home(props){
  const {dispatch}=props;
  const chatbotContainerRef=useRef();

  // useEffect(()=>{
  //   async function fetchData(){
  //     dispatch(addChatList(chatList));
  //   }
  //   fetchData();
  // },);

  const openChatbot=()=>{
    // console.log("chatbotContainerRef=",chatbotContainerRef.current)
    chatbotContainerRef.current.className=containerDisplay.displayBlock;
    dispatch(addChatList(chatList));
  }
  return (
    <div className={styles.Home}>
       <h1>Sciastra Home</h1>
       
       <button className={styles.startChatBtn} onClick={openChatbot}>
         <img alt='mess' src='https://www.sciastra.com/Assets/newAssets/whatsapp.webp'/>
         <p>Chat with us</p>
       </button>
       
       <section className={containerDisplay.displayNone} ref={chatbotContainerRef}>
          <Chatbot chatbotContainerRef={chatbotContainerRef} chatList={chatList} />
       </section>
    </div>
  );
}

//==============================connect=================================
function mapStateToProps(state){
  return{
  }
}
const connectedHomeComponent=connect(mapStateToProps)(Home);
export default connectedHomeComponent;