import { Avatar } from '@mui/material';
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import db from './firebase';
import './Sidebarchat.css';


const divStyle = {
    display: 'flex',
    padding: '2px 20px',
    cursor: 'pointer',
    borderBottom: '0.3px solid #cacaca7c',
  };


function Sidebarchat({ id, name, addnewchat }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5004 ));
    }, []);

    const createChat =() => {
        const roomName = prompt(" Please enter name for chat");

        if(roomName) {
            //from db
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addnewchat ?  (
        <Link to ={`/rooms/${id}`}>
        <div className="sidebarchat">
            <Avatar src={ `https://avatars.dicebear.com/api/human/${seed}.svg` } />
            <div className="sidebarchat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
        </Link>
    ): (
        <div classname="sidebarchat" onClick={createChat} style={divStyle}>
            <h2>Add new chat</h2>
        </div> 
    );
}

export default Sidebarchat
