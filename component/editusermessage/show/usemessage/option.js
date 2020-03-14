import React from 'react'

function Option({tag,type,value,ev}) {
    const inputEv = (e) => {
        ev(e.target.value)
    }
    return (
        <div className='option'>
            <div className="left">
                  <label htmlFor={type}>{tag}</label>               
            </div>
            <div className="right">
                  <input type="text" onInput={inputEv} value={value} name={type} id={type}/>
            </div>
            <style jsx> {`
                        .option {
                            width:100%;
                            height:6%;
                            display:flex;
                            margin-bottom:1vh;
                        }
                        .left {
                            width:25%;
                            height:100%;
                            display:flex;
                            justify-content:flex-end;
                            font-size:2vh;
                            line-height:4.08vh;
                        }                        
                        .right {
                            width:75%;
                            height:100%;
                            padding-left:2vh;
                        }
                        .right input {
                            
                            height:3.68vh;                                                    
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

export default Option
