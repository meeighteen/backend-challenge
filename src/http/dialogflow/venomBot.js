import { create, Whatsapp } from 'venom-bot';
import { sendToDialogFlow } from "./dialogflow"
import {v4} from "uuid";

const sessionIds = new Map();

const createSession = async () =>{ 
  try{
    const client = await create({
      session: 'chat-session', //name of session
      multidevice: true, // for version not multidevice use false.(default: true)
      debug: true
    });
    start(client);
  }catch(error){
    console.log(error);
    throw error;
  }
}

function start(client) {
  console.log("listening messages");
  client.onMessage(async (message) => {
    console.log(message);
    setSessionAndUser(message.from);
    let session = sessionIds.get(message.from);
    let payload = await sendToDialogFlow(message.body, session);
    let responses = payload.fulfillmentMessages;
    for (const response of responses) {
      sendMessageToWhatsapp(client, message, response);
    } 
  });
}

function sendMessageToWhatsapp(client, message, response) {
  return new Promise((resolve, reject) => {
    client
    .sendText(message.from, response.text.text[0])
    .then((result) => {
      console.log('Result: ', result); //return object success
      resolve(result);
    })
    .catch((error) => {
      console.error('Error when sending: ', error);
      reject(error)
    });
  })
}

async function setSessionAndUser(senderId) {
  try{
    if(!sessionIds.has(senderId)){
      sessionIds.set(senderId, v4());
    }
  }catch(error){
    throw error;
  }
}

export default createSession;