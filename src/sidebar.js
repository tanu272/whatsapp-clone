import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import "./sidebar.css";
import Sidebarchat from './sidebarchat';
import db from './firebase';
import { useState } from 'react';
import { UseStateValue } from './StateProvider';


function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = UseStateValue();

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
                setRooms(snapshot.docs.map((doc) =>
                    ({
                        id: doc.id,
                        data: doc.data(),

                    }))
                )
            );
        
        //cleanup function
        return () => { 
            unsubscribe();
        };
    }, []);

    

    return (
        <div className="side">
            <div className="sidebar_header">
                <Avatar src={user?.photoURL} />
                <div className="header_right" >
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            
            <div className="sidebar_search">
                <div className="search__container">
                    <SearchIcon />
                    <input type="text" placeholder="Search for a contact or group" />
                </div>
            </div>

            <div className="sidebar_chats">
                <Sidebarchat addnewchat />
                {rooms.map (room => (
                    <Sidebarchat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
