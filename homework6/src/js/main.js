import {userList as UserList} from './userList';
import '../css/style.scss';

/*
HERE MY UNIMPORTANT
COMMENTS WHICH NEEDED TO DELETE
*/

const users = [
{name: 'Oksana', age: 22},
{name: 'Viktor', age: 14},
{name: 'Ivan', age: 37},
{name: 'Yana', age: 45},
{name: 'Oleksandr', age: 19},
{name: 'Olena', age: 18},
{name: 'Mykola', age: 27},
{name: 'Andriy', age: 33},
{name: 'Zakhar', age: 40},
];

let userListModule = new UserList(users);
userListModule.showList();
