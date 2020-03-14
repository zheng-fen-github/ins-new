import React,{useContext} from 'react'
import Router from 'next/router'


function Postcontent({account}) {
    
    const clickEv = (e) => {
        let target = e.target.closest('div');
        console.log(target.nextElementSibling);
        target.nextElementSibling.classList.add('select');
    }
    const SelectEv = (e) => {
        
        e.target.closest('div').classList.remove('select');
        Router.push({
            pathname:'/sendpost',
            query:{ account: account},
        })
    }
    return (        
        <div className='Postcontent'>
            
            <div className="addpost" onClick={clickEv}>                 
                <svg t="1578118316847" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3271" width="30" height="30"><path d="M477.090909 477.090909V58.065455C477.090909 38.842182 492.590545 23.272727 512 23.272727c19.269818 0 34.909091 15.755636 34.909091 34.792728V477.090909h419.025454c19.223273 0 34.792727 15.499636 34.792728 34.909091 0 19.269818-15.755636 34.909091-34.792728 34.909091H546.909091v419.025454c0 19.223273-15.499636 34.792727-34.909091 34.792728-19.269818 0-34.909091-15.755636-34.909091-34.792728V546.909091H58.065455A34.769455 34.769455 0 0 1 23.272727 512c0-19.269818 15.755636-34.909091 34.792728-34.909091H477.090909z" p-id="3272"></path></svg>             
            </div>
            <div className="postphoto" onClick={SelectEv}>
                <svg t="1578118698726" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1743" width="30" height="30"><path d="M829.866667 917.333333H194.133333C145.066667 917.333333 106.666667 878.933333 106.666667 829.866667V194.133333C106.666667 145.066667 145.066667 106.666667 194.133333 106.666667H832c46.933333 0 85.333333 38.4 85.333333 87.466666V832c0 46.933333-38.4 85.333333-87.466666 85.333333z" fill="#08979C" p-id="1744"></path><path d="M746.666667 298.666667m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z" fill="#FFFFFF" p-id="1745"></path><path d="M746.666667 917.333333l-183.466667-317.866666L379.733333 917.333333z" fill="#FFFFFF" p-id="1746"></path><path d="M108.8 842.666667c6.4 42.666667 40.533333 74.666667 85.333333 74.666666h369.066667L313.6 486.4 108.8 842.666667z" fill="#FFFFFF" p-id="1747"></path></svg>
            </div>
            <div className="postvideo">
                <svg t="1578118714404" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1969" width="30" height="30"><path d="M200.533333 898.133333l637.866667-369.066666c14.933333-8.533333 14.933333-27.733333 0-36.266667L200.533333 125.866667c-12.8-8.533333-32 2.133333-32 17.066666v736c0 17.066667 19.2 27.733333 32 19.2z" fill="#1890FF" p-id="1970"></path></svg>
            </div>            
            <style jsx> {`
                        .Postcontent {
                             width:100%;
                             height:12%;
                             display:flex;
                             align-items:center;
                             z-index:2;
                        }
                        .Postcontent>div {
                            height:8vh;
                            width:8vh;
                            margin-left:3vh;
                            background:white;
                            border-radius:25%;
                            border:solid 2px #c7c7c7;
                            display:flex;
                            position:relative;
                            justify-content:center;
                            align-items:center;  
                            transition:transform 0.1s ;   
                            cursor:pointer;                                                   
                        }  
                        .Postcontent>div:hover{
                            transform:scale(1.1,1.1);
                            border-color:#1a79ff;
                        }   
                        .Postcontent>div:active ,{
                            transform:scale(1,1);
                            border-color:#c7c7c7;
                        }
                        .Postcontent>.select {
                            transform:scale(1.1,1.1);
                            border-color:#1a79ff;
                        }                                                                    
                        .Postcontent>.addpost:active>svg {
                            opacity:1;
                            transform:scale(1.1,1.1)
                        }
                        .addpost svg {
                            height:40%;
                            width:40%;
                            opacity:0.5; 
                            z-index:4;                           
                        }
                        svg {
                            height:60%;
                            width:60%;
                        }
                        `}
            </style>
        </div>
    )
}

export default Postcontent
