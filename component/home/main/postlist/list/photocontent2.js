import React, {useEffect} from 'react'
import Photo from '../../../../public/photo'

function Photocontent({data}) {
            let scrRef; //容器元素变量定义            
            const scrollEv = (e) => {   
                // 按钮事件 图片切换
                let size = scrRef.children.length;
                let leftBu = scrRef.parentElement.children[0];
                let rightBu = scrRef.parentElement.children[1];
                let width = scrRef.offsetWidth;
                let who = e.target.closest('div').matches('.right');
                
                who?scrRef.dataset.src++:scrRef.dataset.src--;
                let count  = scrRef.dataset.src;  
                                                                           
                if(who) {
                    scrRef.style.transform = `translateX(-${count*width}px)`;                        
                    if(+count+1 == size)  rightBu.style.display = 'none';
                    if(count > 0)         leftBu.style.display = '';
                }else{
                    if(count == 0) leftBu.style.display = 'none';
                    scrRef.style.transform = `translateX(-${count*width}px)`;
                    if(+count+1 != size)   rightBu.style = '';
                }                              
                        
            }
            useEffect(() => {
                 if(scrRef.children.length > 1) scrRef.previousElementSibling.style.display = '';
            },[])
            useEffect(() => {
                let dom = scrRef.parentElement;
                let cool = scrRef;
               window.addEventListener('resize',() => {                            
                   dom.style.width = (window.innerWidth/2 - window.innerHeight/7.15) + 'px';
                   dom.style.height = (window.innerWidth/2 - window.innerHeight/7.15) + 'px';
                   cool.classList.remove('transition');
                   let count = +cool.dataset.src;
                   cool.style.transform = `translateX(-${count*cool.offsetWidth}px)`
                   setTimeout(()=>cool.classList.add('transition'),200);
               })
            },[])
    return (
        <div className="postphoto">
                    <div className="left" onClick={scrollEv} style={{display:'none'}}>
                       <svg t="1578822263166"  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="601" width="30" height="30"><path d="M666.624 171.690667a25.6 25.6 0 0 0-36.181333-36.181334l-358.4 358.4a25.6 25.6 0 0 0 0 36.181334l358.4 358.4a25.6 25.6 0 0 0 36.181333-36.181334L326.314667 512l340.309333-340.309333z" fill="#2c2c2c" p-id="602"></path></svg>
                    </div>
                    <div className="right" onClick={scrollEv} style={{display:'none'}}>
                       <svg t="1578822263166" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="601" width="30" height="30"><path d="M666.624 171.690667a25.6 25.6 0 0 0-36.181333-36.181334l-358.4 358.4a25.6 25.6 0 0 0 0 36.181334l358.4 358.4a25.6 25.6 0 0 0 36.181333-36.181334L326.314667 512l340.309333-340.309333z" fill="#2c2c2c" p-id="602"></path></svg>
                    </div>
                    <div className="photocontainer transition" data-src ={0} ref={ref => scrRef=ref}>
                        {data && data.map(e => <Photo key = {e.id} id={e.id}/>)}
                    </div>
            <style jsx> {`
            .postphoto {
                width:100%;
                height:100%;
                margin:0;
                padding:0;
                box-sizing:border-box;
                position:relative;
            }
            .postphoto:hover .right{
                right:1.5%;
            }
            .postphoto:hover .left{
                left:1.5%;
            }
            .photocontainer {
               width:100%;
               height:100%;           
               display:flex;               
             }
             .transition {
                transition:.5s;
             }        
                 .left,.right {
                     position:absolute;
                     width:40px;
                     height:40px;
                     background:white;
                     border-radius:50%;
                     display:flex;
                     justify-content:center;
                     align-items:center;
                     top:50%;
                     transform:translateY(-50%);
                     transition:.4s;
                     box-shadow:0 0 4px #adadad;
                     z-index:2;
                 }
                 .left {
                    left:-12%;
                 }
                 .right {
                     transform:rotate(180deg) translateY(50%);                     
                     right:-12%;
                 }
                 
               
                `}
            </style>
        </div>  
    )
}

export default Photocontent
