import React from 'react'
import Container from './container'
import CloseBu from  './closeBu'

const  Save = React.forwardRef((props,ref) => {
    
    const backEv =  () => {
        ref.current.classList.add('back');
    }    
    return (
        <div className='save'  ref ={ref}>  
            <CloseBu event={backEv}/>
            <Container/>
            <style jsx> {`                        
                        .save {
                            height:100%;
                            width:250%;
                            background:white;
                            position:absolute;
                            z-index:5;
                            opacity:1;
                            top:0;                            
                            transform:translateX(40%);
                            transition: transform 0.2s;
                            padding:4vh 6vh;
                            overflow:auto;
                        }
                        .back {
                            transform:translateX(-60%);
                        }
                                              
                        .save::-webkit-scrollbar {
                            display:none;
                        }
                        
                       
                        `}
            </style>
        </div>
    )
}
)
export default Save
