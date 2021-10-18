import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';

import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import "./Chat.css";
import db from './firebase';
import firebase from '@firebase/app-compat';
import { UseStateValue } from './StateProvider';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomname] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = UseStateValue();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot( snapshot =>
                setRoomname(snapshot.data().name ))
        }

        db.collection('rooms')
        .doc(roomId)
        .collection("messages")
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5004 ));
    }, [roomId]);

     const sendmessage = (e) => {
         e.preventDefault();
         console.log(input);

         db.collection('rooms').doc(roomId).collection('messages').add({
             message: input,
             name: user.displayName,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })
         setInput("");
     };


    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar 
                alt="vvh"
                src={ `https://avatars.dicebear.com/api/human/${seed}.svg`}
                sx={{ width: 36, height: 36}}
                />

                <div className="header_info">
                    <h3>{roomName}</h3>
                    <p>Last message ...</p>
                </div>

                <div className="header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_mssg ${message.name ===user.displayName && "chat_receiver"}` }>
                        <span className="chat_name">{message.name}
                        </span>
                        {message.message}
                        <span className="timestamp">
                            {new Date(message.timestamp ?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
                
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendmessage} type="submit">Send message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
