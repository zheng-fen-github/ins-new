import React,{useContext} from 'react'
import Avarat from './showavatar'
import Form from './usemessage/form'
import Password from './editpassword/password'


function Show({userData}) {
    
    return (
        <div className='show'>
            <div className="content">
                <Avarat data = {userData}/>
                {/* <Password/> */}
                <Form data = {userData}/>
            </div>            
           <style jsx> {`
                      .show {                    
                            width:70%;
                            background:white;
                            border-left:solid 2px #d3d3d3;
                            padding:5vh 6vh;
                      }   
                             
                     .content {
                         background:white;
                         min-height:68vh;
                     }                     
                                `}
            </style>
        </div>
    )
}

export default Show
