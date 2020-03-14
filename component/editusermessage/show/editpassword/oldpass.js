import React from 'react'

function Oldpass({type,tag}) {
    return (
        <div className='option'>
            <div className="left">
                  <label htmlFor={type}>{tag}</label>               
            </div>
            <div className="right">
                  <input type="password" name={type} id={type}/>
            </div>
            <style jsx> {`
                        .option {
                            width:100%;
                            height:8%;
                            display:flex;
                            margin-bottom:1vh;
                        }
                        .left {
                            width:25%;
                            height:100%;
                            display:flex;
                            justify-content:flex-end;
                            font-size:2vh;
                            line-height:4.64vh;
                        }                        
                        .right {
                            width:75%;
                            height:100%;
                            display:flex;
                            align-items:center;
                            
                        }
                        .right input {
                            margin-left:2vh;
                            height:80%;                        
                            width:100%;
                            border:solid 1px #d3d3d3;
                            border-radius:4px;
                            padding:2px 8px;
                            font-size:2vh;
                        }
                        `}
            </style>
        </div>
    )
}

export default Oldpass
