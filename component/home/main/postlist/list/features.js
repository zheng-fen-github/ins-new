import React from 'react'
import CommentList from './features-comment'
import Router  from 'next/router'

function Features({id,index}) {
    let formRef = React.createRef();
    
    const commentEv = () => {        
          let form = formRef.current;
           form.hidden = !form.hidden ;
           if(!form.hidden) form.children[0].focus();
    }
    const saveEv = async () => {
        console.log(id);
         let request = await fetch(`http://localhost:3001/post/save/${id}`,{
             method:'POST',
             credentials: "include",
         })
         let res =await  request.json();
         alert(res);
    }
    const likeEv = async () => {
        console.log(id);
         let request = await fetch(`http://localhost:3001/post/like/${id}`,{
             method:'POST',
             credentials: "include",
         })
         if(request.status == 404) Router.push('/')
         let res =await  request.json();
         alert(res);
    }
    return (
       <div className="features">
           <CommentList ref ={formRef} id ={id}/>
           <div className="button-All">
                <div className="like" onClick={likeEv}>
                    {/* <svg t="1578125734230" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3063" width="30" height="30"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z" p-id="3064"></path></svg> */}
                    <i className='iconfont icon-aixin'></i>
                    <h4>Like</h4>
                </div>
                <div className="save" onClick={saveEv}>
                    <svg t="1578125763706" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3199" width="30" height="30"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" p-id="3200"></path></svg>
                    {/* <i class="iconfont icon-aixin"></i> */}
                    <h4>save</h4>
                </div>
                <div className="comment" onClick={commentEv}>
                    <svg t="1578125929032" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5150" width="30" height="30"><path d="M510.4 145.6c-202.6 0-366.8 159.6-366.8 356.5 0 102.1 44.3 194.2 115 259.2-15.6 23.3-34.4 44.1-56.2 61.4 1.1-0.2 1.7-0.2 1.3 0-7.8 5.3-13.1 14.4-13.1 24.7 0 13.2 8.6 24 20.3 27.9 14.6 2.2 29.4 3.7 44.7 3.7 18.5 0 36.5-1.9 54.2-5h0.1c10.8-2 21.4-4.3 31.7-7.2 26.7-8.2 53.5-20.2 53.5-20.2l8.3-3.8c17.3 6.9 41.1 10.7 60.8 12.8v-0.1c5.5 0.7 10.9 1.1 16.4 1.6 12.4 0.9 20.8 1.1 20.8 1.1v0.1c2.9 0.1 5.9 0.3 8.9 0.3 202.6 0 366.8-159.6 366.8-356.5 0.1-197-164.2-356.5-366.7-356.5z" p-id="5151"></path></svg>
                    <h4>comment</h4>
                </div>
                <div className="share">
                    <svg t="1578125951115" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6128" width="22" height="22"><path d="M819.226977 659.43304C757.33302 659.43304 704.164682 694.409159 676.681057 745.296498L315.975759 562.422359C324.981478 542.214729 330.219749 519.971606 330.219749 496.421706 330.219749 471.397634 324.105457 447.973836 314.007223 426.795329L690.652752 271.575558C720.409572 309.839265 766.36664 334.891235 818.592 334.891235 908.4115 334.891235 981.226149 262.07882 981.226149 172.257089 981.226149 82.43759 908.410385 9.622944 818.592 9.622944 728.77027 9.622944 655.957857 82.43759 655.957857 172.257089 655.957857 180.697023 657.201027 188.804401 658.441961 196.897274L258.632648 361.660652C232.649975 344.073273 201.323016 333.787559 167.585604 333.787559 77.763872 333.787559 4.951458 406.603321 4.951458 496.421705 4.951458 586.243436 77.763874 659.055849 167.585604 659.055849 203.650889 659.055849 236.656237 646.933282 263.626526 627.0649L657.042563 826.520946C659.457479 914.230181 730.931866 984.701332 819.228092 984.701332 909.047592 984.701332 981.862241 911.888919 981.862241 822.067189 981.861126 732.248804 909.046477 659.43304 819.226977 659.43304L819.226977 659.43304Z" p-id="6129"></path></svg>
                    <h4>share</h4>
                </div>
            </div>
            <style jsx> {`
                  i {
                      font-size:40px;width:40px;
                  }
                  .button-All {
                      width:100%;
                      display:flex;
                      height:8vh;
                      align-items:center;
                      justify-content:space-between;
                  }
                  .button-All>div {
                       display:flex;
                       flex:1;
                       height:6vh;
                       justify-content:center;
                       align-items:center;
                       margin-right:4vh;
                       opacity:0.5;
                  }
                  .button-All>div:hover {
                      opacity:1;
                  }
                  .like {
                      margin-left:4vh;
                  }
                  .share svg {
                        margin-right:0.4vh;
                  }
                  svg {
                      height:50%;
                  }
                        `}
       </style>
        </div> 
    )
}


export default Features