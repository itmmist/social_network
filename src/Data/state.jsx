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
            {message : 'где мой чип?', id : 3}]
    }
}
    
export default state