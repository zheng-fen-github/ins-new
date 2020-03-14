import React,{useEffect,useState,useContext} from 'react'
import Post from './postcontent'
import Search from './search'
import Content from './postlist/postindex'
import {Context} from '../../editusermessage/context/ins-context'
import UseGetData from '../../public/useDateGet'
import {connect} from 'react-redux'
import {GET} from './redux/action'


function Index(props) {
    const url = 'http://localhost:3001/getphotos';
    const [state,fetching,error] = UseGetData(undefined,url);
    useEffect(() => {
         if(Array.isArray(state)) props.action(GET(state));
    })
    console.log(props.data)
    return (
        <div className='main'>               
                <Context.Provider value={props.data}>
                    {
                        error?<div>something is wrong</div>:
                        props.data[0]?<>
                                        <Post account={props.account}/>
                                        <Search/>
                                        <Content />
                                   </>: <h1>data is not</h1>
                    }
                 </Context.Provider>
            <style jsx> {`
                        .main {
                            height:100%;
                            width:50%;
                            background:#eeeef4;
                            overflow:auto;
                            padding:2vh 4vh 0 4vh;
                        }
                        .main::-webkit-scrollbar {
                            display:none;
                        }
                        `}
             </style>
            
        </div>
    )
}



const state = (store) =>( {data:store});
const dispatch = dispatch =>( {action:dispatch});
export default connect(state,dispatch)(Index)
