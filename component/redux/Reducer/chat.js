
export  function CommentReducer(state =[],action) {
    switch(action.type) {
        case 'GET_DATA':
            return action.data
        case 'ADD_COMMENT':
            let newArray = [...state];
            newArray[action.index].comment.push(action.comment);
            return newArray                        
        case 'LIKE_COMMENT':
            return state
        
        default:
             return state
    }
}

function Chat () {
    return (
        <div>

        </div>
    )
}
export default Chat