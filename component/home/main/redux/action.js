const GET_DATA = 'GET_DATA';
const ADD_COMMENT = 'ADD_COMMENT';
const LIKE_COMMENT = 'LIKE_COMMENT';


export function ADD (post) {
      return {
          type:ADD_COMMENT,
          index:post.index,
          comment:post.comment,
      }
}

export function GET (data) {
    return {
        type:GET_DATA,
        data
    }
}

function Action () {
    return (
        <div>

        </div>
    )
}
export default Action