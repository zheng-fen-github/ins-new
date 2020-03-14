import React from 'react'
import Photo from './photo'


function Addphotolist({click,PhotoFiles,setPhotoFiles}) {
    const Delete = (id) => {
        setPhotoFiles(prestate => {
            return prestate.filter(item => item.id!==id )
        })
    }
    return (
        <>
            <div className='add-photo-list'>
                    {
                        PhotoFiles.length>0?PhotoFiles.map(
                          item => <Photo file={item} Delete={Delete} key={item.id}/>
                         ): <div className='not'>
                                      <svg onClick={click} t="1579414142525" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2749" width="100" height="100"><path d="M853.376 975.232H170.688A170.88 170.88 0 0 1 0 804.608V170.688A170.88 170.88 0 0 1 170.688 0h682.688a170.88 170.88 0 0 1 170.688 170.688v633.984a170.88 170.88 0 0 1-170.688 170.56zM170.688 48.768A121.984 121.984 0 0 0 48.768 170.624v633.984c0 67.2 54.656 121.856 121.92 121.856h682.688a121.92 121.92 0 0 0 121.856-121.856V170.688c0-67.2-54.656-121.856-121.856-121.856H170.688z" fill="#707070" p-id="2750"></path><path d="M329.216 438.912a134.4 134.4 0 0 1-134.144-134.144c0-73.92 60.16-134.144 134.144-134.144 73.92 0 134.08 60.16 134.08 134.144a134.4 134.4 0 0 1-134.08 134.144z m0-219.456c-47.04 0-85.312 38.336-85.312 85.312s38.272 85.312 85.312 85.312 85.312-38.272 85.312-85.312-38.336-85.312-85.312-85.312zM170.688 780.16a24.384 24.384 0 0 1-17.28-7.04 24.512 24.512 0 0 1 0-34.496l212.352-212.288L512 672.576l348.48-348.48a24.512 24.512 0 0 1 34.496 0 24.512 24.512 0 0 1 0 34.496L512 741.568 365.76 595.264 187.968 773.12a24.384 24.384 0 0 1-17.28 7.04z" fill="#707070" p-id="2751"></path></svg>
                            </div>
                    }                                       
            </div>        
            <style jsx> {`
                        .add-photo-list {                   
                            width:100%;
                            min-height:333px;
                            display:flex;
                            flex-wrap:wrap;
                            justify-content:space-around;
                            align-content:flex-start;
                        }
                        .not {
                            width:100%;
                            height:333px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            
                        }                        
                        svg {
                            transition: .2s;
                            cursor:pointer;
                        }
                        .not svg:hover {
                            transform:scale(1.2);
                        }
                        .not svg:active {
                            transform:scale(1);
                        }
                            `}
            </style>
        </>
    )
}

export default Addphotolist
