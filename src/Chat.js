import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';

import React , {useState, useEffect} from 'react';
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5004 ));
    }, []);

     const sendmessage = (e) => {
         e.preventDefault();
         console.log(input);
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
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
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
                <p className={`chat_mssg ${true && "chat_receiver"}` }><span className="chat_name">ABC</span>heyy
                <span className="timestamp">3:20pm</span>
                </p>
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
