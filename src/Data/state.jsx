const ADD_POST = 'ADD-POST'
const POST_CHANGE = 'POST-CHANGE'
const UPDATE_NEWMESSAGETEXT = 'UPDATE-NEWMESSAGETEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        profile_page: {
            posts_messages: [
                {message : 'привет', id : 1, likes : 34}, 
                {message : 'как дела?', id : 2, likes : 85}, 
                {message : 'чем занимаешься?', id : 3, likes : 22}],
                newPostText : 'hello'
        },
        dialogs_page: {
            dialogNames: [
                {name : 'Иван Иванов', id : 1}, 
                {name : 'Дональд Трамп', id : 2}, 
                {name : 'Билл Гейтс', id : 3}],
            dialogMessages: [
                {message : 'привет', id : 1}, 
                {message : 'где моя ракета?', id : 2}, 
                {message : 'где мой чип?', id : 3}],
                newMessageText : ''
        },
        nav_menu: {
            friends: [
                {name : 'Иван Иванов', ava : 'Иван_иванов.jpeg'},
                {name : 'Дональд Трамп', ava : 'дональд_трамп.jpeg'},
                {name : 'Билл Гейтс', ava : 'билл_гейтс.jpeg'},
            ]
        }
    },

    rerenderTree(){
        console.log(window.state = this._state)
    },

    subscribe(observer){
        this.rerenderTree = observer
    },
    
    getState(){
        return this._state
    },
    
    dispatch(action){
        if (action.type == ADD_POST){
            let new_post = {
                message : this._state.profile_page.newPostText,
                id : 4,
                likes : 0,
            }
            this._state.profile_page.posts_messages.unshift(new_post)
            this.rerenderTree(this._state)
        }
        else if (action.type == POST_CHANGE){
            this._state.profile_page.newPostText = action.text
            this.rerenderTree(this._state)
        }
        else if (action.type == UPDATE_NEWMESSAGETEXT){
            this._state.dialogs_page.newMessageText = action.new_text
            this.rerenderTree(this._state)
        }
        else if (action.type == SEND_MESSAGE){
            let body = this._state.dialogs_page.newMessageText;
            this._state.dialogs_page.newMessageText = '';
            this._state.dialogs_page.dialogMessages.push({id : 5, message : body})
            this.rerenderTree(this._state)
        }
    }
    
}

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
export default store
