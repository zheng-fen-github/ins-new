import React from 'react'

function Selectlist() {
    return (
        <div className='select-list'>
            <div className="list">
                <ul>
                    <li className='selected'>
                      编辑主页
                    </li>
                    <li>
                      更改密码 
                    </li>
                    <li>
                      管理联系人
                    </li>
                </ul>
            </div>
            <style jsx> {`
                        .select-list {
                            width:30%;
                            background:white;
                            position:relative;
                           
                        }
                        .list {
                            position:absolute;
                            left:-2px;
                            top:-1px;
                        }
                        .list,ul {
                            height:100%;
                            width:100%;
                        }     
                        ul {
                            list-style:none;                                                        
                        }   
                        li {
                            height:6.4vh;
                            padding-left:10%;
                            font-weight:600;
                            line-height:6.4vh;
                        }
                        .selected {
                          border-left:solid black 3px;
                          font-weight:900;
                        }
                                `}
            </style>
        </div>
    )
}

export default Selectlist
