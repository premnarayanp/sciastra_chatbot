import containerDisplay from '../styles/chatbotContainerDisplay.module.css';
import styles from '../styles/home.module.css';

import {Chatbot} from '../components/HomeComponents/index';
import { useRef } from 'react';
export default function Home(){

  const chatbotContainerRef=useRef();

  const openChatbot=()=>{
    // console.log("chatbotContainerRef=",chatbotContainerRef.current)
    chatbotContainerRef.current.className=containerDisplay.displayBlock;

  }
  return (
    <div className={styles.Home}>
       <h1>Sciastra Home</h1>
       
       <button className={styles.startChatBtn} onClick={openChatbot}>
         <img alt='mess' src='https://www.sciastra.com/Assets/newAssets/whatsapp.webp'/>
         <p>Chat with us</p>
       </button>
       
       <section className={containerDisplay.displayNone} ref={chatbotContainerRef}>
          <Chatbot chatbotContainerRef={chatbotContainerRef} />
       </section>
    </div>
  );
}