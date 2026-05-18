const ADD_POST = 'ADD-POST'
const POST_CHANGE = 'POST-CHANGE'

let profileReducer = (action, state) => {
    if (action.type === ADD_POST){
        let new_post = {
            message : state.newPostText,
            id : 4,
            likes : 0,
        }
        state.posts_messages.unshift(new_post)
    }
    else if (action.type === POST_CHANGE){
        state.newPostText = action.text
    }
    return state
}
export default profileReducer

export let addPostAC = () => {
    return{
        type : 'ADD-POST',
        id : 1,
    }
}
export let onPostChangeAC = (text) => {
    return{
        type : 'POST-CHANGE',
        text : text,
    }
}