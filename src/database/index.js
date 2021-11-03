'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        if(item == undefined) return _.uniqBy(_.flatten(_.map(db.itemsOfUserByUsername, items => items)));
        else {
            return _.map(Object.entries(_.groupBy(_.filter(_.map(db.usersById, user => ({
                    ...user,
                    ageItems: db.itemsOfUserByUsername[user.username]
                })
            ), _user => _user.ageItems.includes(item)), 'age')), ([_name, _list]) => ({name: _name, count: _list.length}));
        }
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
