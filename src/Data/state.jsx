import {rerenderTree} from '../render.jsx'

let state = {
    profile_page: {
        posts_messages: [
            {message : 'привет', id : 1, likes : 34}, 
            {message : 'как дела?', id : 2, likes : 85}, 
            {message : 'чем занимаешься?', id : 3, likes : 22}],
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
    },
    nav_menu: {
        friends: [
            {name : 'Иван Иванов', ava : 'Иван_иванов.jpeg'},
            {name : 'Дональд Трамп', ava : 'дональд_трамп.jpeg'},
            {name : 'Билл Гейтс', ava : 'билл_гейтс.jpeg'},
        ]
    }
}

export let add_post = (post_text) => {
    let new_post = {
        text : post_text,
        id : 4,
        likes : 0,
    }
    state.profile_page.posts_messages.push(new_post)
    // console.log(state)
    rerenderTree(state)
    // console.log(post_text)
}
    
export let send_message = (message_text) => {
    let new_message = {
        text : message_text,
        id : 4,
    }
    state.dialogs_page.dialogMessages.push(new_message)
    console.log(state)
}

export default state