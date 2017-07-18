const userService = require('./user');
const messageService = require('./message');
let users = [];
let messages = [];
userService.findAll((err, data)=>{
    users = data;
});
messageService.findAll((err, data)=>{
    messages = data;
});

function getUserIds(id){
            let data = [];
            if(!messages){
                return [];
            }
        for(let i = 0; i < messages.length; i++){
            if(id == messages[i].receiverId || id == messages[i].senderId){
                if(id != messages[i].receiverId){
                    data.push(messages[i].receiverId);
                }
                if(id != messages[i].senderId){
                    data.push(messages[i].senderId);
                }
                
            }
        }
        return [...new Set(data)];
}

function getUsers(ids){
    let data = [];
    if(!ids){
        return [];
    }
    for(let i = 0; i < ids.length; i++){
        userService.findOne(ids[i], (err, user) => {
            if(!err && user){
                data.push(user);
            }
        });
    }
    return data;
}

module.exports = {
    findFriends: (id, callback)=>{
        let userIds = getUserIds(id);
        let data = getUsers(userIds);
        callback(data);
    }
}