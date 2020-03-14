import React from 'react'

function Addbu({click}) {
    return (
        <div className='add-bu'>
            <svg onClick={click} t="1578118316847" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3271" width="30" height="30"><path d="M477.090909 477.090909V58.065455C477.090909 38.842182 492.590545 23.272727 512 23.272727c19.269818 0 34.909091 15.755636 34.909091 34.792728V477.090909h419.025454c19.223273 0 34.792727 15.499636 34.792728 34.909091 0 19.269818-15.755636 34.909091-34.792728 34.909091H546.909091v419.025454c0 19.223273-15.499636 34.792727-34.909091 34.792728-19.269818 0-34.909091-15.755636-34.909091-34.792728V546.909091H58.065455A34.769455 34.769455 0 0 1 23.272727 512c0-19.269818 15.755636-34.909091 34.792728-34.909091H477.090909z" p-id="3272"></path></svg>             
            <style jsx> {`
                .add-bu {
                        width:100%;
                        margin:20px 0;
                        display:flex;
                        justify-content:center;                      
                    }
                 svg:hover {
                     transform:scale(1.2);
                 }
                 svg:active {
                    transform:scale(1);
                 }
                 svg {
                      padding:10px;
                      width:40px;
                      height:40px;
                      background:#ced1d6;
                      border-radius:50%;
                      transition:.3s;
                      cursor:pointer;
                    }
                        `}
           </style>
        </div>
    )
}

export default Addbu
