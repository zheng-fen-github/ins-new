import React from 'react'

const SetWindow = React.forwardRef((props,ref) => {
    return (
       <div className="setWindow"         
          ref= {ref}>
            <div className="add">
                <div className='svgbg'>
                    <svg t="1578042923327" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1292" width="30" height="30"><path d="M512 512m-469.333333 0a469.333333 469.333333 0 1 0 938.666666 0 469.333333 469.333333 0 1 0-938.666666 0Z" fill="#36CFC9" p-id="1293"></path><path d="M746.666667 554.666667H277.333333c-12.8 0-21.333333-8.533333-21.333333-21.333334v-42.666666c0-12.8 8.533333-21.333333 21.333333-21.333334h469.333334c12.8 0 21.333333 8.533333 21.333333 21.333334v42.666666c0 12.8-8.533333 21.333333-21.333333 21.333334z" fill="#FFFFFF" p-id="1294"></path><path d="M469.333333 746.666667V277.333333c0-12.8 8.533333-21.333333 21.333334-21.333333h42.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v469.333334c0 12.8-8.533333 21.333333-21.333334 21.333333h-42.666666c-12.8 0-21.333333-8.533333-21.333334-21.333333z" fill="#FFFFFF" p-id="1295"></path></svg>
                </div>
            </div>
            <div className="delete">
                <div className='svgbg'>
                    <svg t="1578042934946" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1517" width="30" height="30"><path d="M746.666667 981.333333H277.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666V170.666667h554.666666v768c0 23.466667-19.2 42.666667-42.666666 42.666666z" fill="#FF6060" p-id="1518"></path><path d="M832 256H192c-12.8 0-21.333333-8.533333-21.333333-21.333333V192c0-12.8 8.533333-21.333333 21.333333-21.333333h640c12.8 0 21.333333 8.533333 21.333333 21.333333v42.666667c0 12.8-8.533333 21.333333-21.333333 21.333333z" fill="#E03232" p-id="1519"></path><path d="M341.333333 789.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333V384c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333zM512 789.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333V384c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333zM682.666667 789.333333c-12.8 0-21.333333-8.533333-21.333334-21.333333V384c0-12.8 8.533333-21.333333 21.333334-21.333333s21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333z" fill="#FFFFFF" p-id="1520"></path><path d="M512 42.666667c-70.4 0-128 57.6-128 128h42.666667c0-46.933333 38.4-85.333333 85.333333-85.333334s85.333333 38.4 85.333333 85.333334h42.666667c0-70.4-57.6-128-128-128z" fill="#FF6060" p-id="1521"></path></svg>
                </div>
            </div>
            <style jsx>{`
              .setWindow {
                    position:absolute;
                    bottom:120%;
                    width:100%;
                    height:100%;
                    background:white;
                    border-radius:24px;
                    display:flex;
                    animation:updown 0.6s 1;
                }
                .close {
                  display:none;
                }
                .add,.delete {
                    flex:1;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .svgbg {
                    height:6vh;
                    width:6vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-radius:12px;                    
                }
                .svgbg:hover  {
                    background:#eeeef4;
                }
                
                @keyframes updown {
                    0% {
                      transform:translate(0,0);
                    }
                    50% {
                        transform:translate(0,-20px);
                    }
                    100% {
                        transform:translate(0,0);                     
                    }
                }
                `}
            </style>
       </div>
    )
})

export default SetWindow
