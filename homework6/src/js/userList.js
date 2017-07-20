import _ from 'lodash';

export function userList(users)
{
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        let i = 0;
        sortedUsers.forEach((user) => {
            const div = document.createElement('div');
            div.setAttribute('class', 'item');
            const info = document.createElement('div');
            info.append(user.name + ' ' + user.age);


            const img = document.createElement('img');
            img.setAttribute('class', 'avatar');
            let ind = ((i % 7) + 1).toString();
            let url = require(`./../img/${ind}.png`);

            img.src = 'dist/' + url;

            div.appendChild(info);
            div.appendChild(img);
            i++;
            container.appendChild(div);
        });
    };
}

