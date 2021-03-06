/**
 * Created by moonti on 2017. 11. 12..
 */
const Emoji = require('./Emoji');
// userList는 id가 key이고 유저 객체가 value

let userList = {};
class User {
    constructor(id) {
        this.id = id;
        const newUser = Emoji.pop(id);
        this.name = newUser.name;
        this.emoji = newUser.emoji;
        this.score = 0;
    }
}

class UserManager {
    createUser(id) {
        return new User(id);
    }
    addUser(id) {
        userList[id] = this.createUser(id);
        return userList[id];
    }
    removeUser(id) {
        const user = JSON.parse(JSON.stringify(userList[id]));
        Emoji.push(id);
        delete userList[id];
        return user;
    }
    getUserList() {
        return userList;
    }
    scoreUp(id) {
        if (userList[id]) userList[id].score = userList[id].score + 1
    }
}

module.exports = UserManager;