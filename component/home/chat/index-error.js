import React, { Component } from 'react'
import Index from './index.js'

export default class CoolError extends Component {
     constructor(props) {
         super(props);
         this.state = {
             hasError:false
         }
     }
     
   static getDerivedStateFromError(err) {
        return {
            hasError:true
        }
    }
     

    render() {
        if(this.hasError){
            return (
                <h1>something is wronng</h1>
            )
        }else{
            return (
                <div>
                    <Index/>
                </div>
            )
        }
        
    }
}
