import React from 'react'

function Textarea() {
    return (        
        <div className="textcontainer">
            <label htmlFor="outermessage">个人简介</label>
            <div className="text">
                <textarea name="outermessage" id="outermessage"  rows="8">
                  
                </textarea>
            </div>
            <style jsx> {`
               .textcontainer {
                            width:100%;
                            min-height:24%;
                            display:flex;
                            margin:2vh 0;
                        }  
                label {
                            width:25%;
                            height:100%;
                            display:flex;
                            justify-content:flex-end;
                            font-size:2vh;
                            line-height:4.08vh;
                        }     
                  .text {
                            width:75%;
                            height:100%;
                            display:flex;
                            align-items:center;
                            padding-left:2vh;       
                        }
                 .text textarea {
                     min-width:100%;
                     border-radius:4px;
                     padding:8px;
                     font-size:2vh;
                 }
                        `}
            </style>
        </div>        
    )
}

export default Textarea
