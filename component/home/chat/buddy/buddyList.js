import React,{useContext} from 'react'
import Buddy from './buddy'
import {ThemeContext} from '../context'

function BuddyList() {
    let {change} = useContext(ThemeContext);
    let classname = change?'scale':'';
    return (
        <div className={`buddyList ${classname}`}>
            <Buddy/>
            <Buddy status='dow'/>
            <Buddy/>
            <Buddy status='dow'/>
            <style jsx> {`
            .buddyList {
                         height:30%;
                         width:100%;
                         margin-top:2vh;
                         padding:20px;
                         border-radius:24px;
                         overflow:auto;                         
                         background:#eeeef4;
                         right:0;
                         top:0;
                         transition: 0.4s;
                         
                    }
              .scale{ 
                height:100%;
                width:35%;
                border-radius:14px;
                margin-top:0;
                box-shadow: -2px 0 6px rgba(0,0,0,0.3);
                padding:36px;
                position:absolute;
              }      

                                `}
            </style>
        </div>
    )
}

export default BuddyList
