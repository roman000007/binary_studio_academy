const main = document.getElementById('main');
const search = document.getElementById('header-search-input');
let addedPosts = 0;
let currPos = 0;
let data;
let text = "";
let dataLoaded = false;
let choosedTags = [];
let removedCards = [];
let addedCards = [];
window.onload = function () {
    loadData();
    loadTags();
};


search.addEventListener("keyup", function (event) {
    text = search.value;
    clearSpace();
    addCards(data, 0, 10);
});

function loadData() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const request = new Request("https://api.myjson.com/bins/152f9j", {
        method: 'GET',
        headers
    });

    fetch(request)
        .then(response => {
            response.json().then(resp => {
                data = resp.data;
                for (let i = 0; i < data.length; i++) {
                    data[i].id = i;
                };
                sortData();
                addCards(data, currPos, 10);
                if (!dataLoaded) {
                    dataLoaded = true;
                    window.scrollTo(0, 0);
                };

            });
        }).catch(function (err) {
            console.log(err);
        });

};


function clearSpace() {
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    addedPosts = 0;
    addedCards = [];
    currPos = 0;
};


function addCards(data, from, amount) {
    let t = 0;
    for (let i = Math.max(0, from); i < data.length; i++) {
        currPos = i;
        if (at(data[i].id, addedCards)) {
            continue;
        };
        if (at(data[i].id, removedCards)) {
            console.log(data[i].id, "HIDDEN");
        } else {
            if (t == amount) {
                break;
            };
            addCard(data[i]);
            addedCards.push(data[i].id);
            t++;
        };
    };
    addedPosts += t;
    console.log("Added", t, "cards,", addedPosts);
};


function addCard(data) {
    let contentText = filterText(data.description);
    let titleText = filterText(data.title);
    if (titleText == null && contentText == null) {
        return;
    };
    if (titleText == null) {
        titleText = data.title;
    };
    if (contentText == null) {
        contentText = data.description;
    };
    const card = document.createElement('div');
    card.setAttribute('class', "info");
    card.setAttribute('data-id', data.id.toString());

    const close = document.createElement('i');
    close.setAttribute('class', "exit fa-close fa");
    close.addEventListener("click", function (event) {
        removeCard(event)
    });
    card.appendChild(close);

    const title = document.createElement('h2');
    title.innerHTML = titleText;
    card.appendChild(title);

    const content = document.createElement('p');
    content.innerHTML = contentText;
    content.setAttribute("class", "article-content");
    card.appendChild(content);

    const img = document.createElement('img');
    img.src = data.image;
    img.setAttribute("class", "article-icon");
    img.alt = "Photo";
    card.appendChild(img);

    const tags = document.createElement('div');
    tags.setAttribute('class', "article-tags");
    for (let i = 0; i < data.tags.length; i++) {
        const tag = document.createElement('p');
        tag.innerHTML = data.tags[i];
        styleTag(tag);
        tag.addEventListener("click", function (e) {
            tagClicked(e)
        });
        tags.appendChild(tag);
    }
    card.appendChild(tags);

    const date = document.createElement('p');
    date.setAttribute('class', "article-date");
    const dateStr = new Date(data.createdAt);
    date.innerHTML = dateStr.toISOString().slice(0, 10);
    card.appendChild(date);

    main.appendChild(card);
};


function tagClicked(e) {
    let tag = e.target.innerHTML;
    if (!at(tag, choosedTags)) {
        choosedTags.push(tag);
        localStorage.setItem("tags", choosedTags.join(" "));
    } else {
        choosedTags.splice(choosedTags.indexOf(tag), 1);
        localStorage.setItem("tags", choosedTags.join(" "));
        if (localStorage.getItem("tags") === "") {
            localStorage.removeItem("tags");
        };
    }
    console.log(choosedTags);
    clearSpace();
    sortData();
    window.scrollTo(0, 0);
    addCards(data, addedPosts, addedPosts + 10);
};

function at(el, data) {
    for (let i = 0; i < data.length; i++) {
        if (el === data[i]) {
            return true;
        }
    }
    return false;
};


function loadTags() {
    choosedTags = [];
    let tagsInStorage = localStorage.getItem("tags");
    if (tagsInStorage === null) {
        return;
    };
    let tags = tagsInStorage.split(" ");
    for (let i = 0; i < tags.length; i++) {
        if (!at(tags[i], choosedTags)) {
            choosedTags.push(tags[i]);
        };
    }
    console.log(choosedTags);
};


function styleTag(elem) {
    if (at(elem.innerHTML, choosedTags)) {
        elem.setAttribute("class", "selected-tag");
    } else {
        elem.setAttribute("class", "");
    }
};


window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && dataLoaded) {
        addCards(data, 0, 10);
    };
};



function countTags() {
    for (let i = 0; i < data.length; i++) {
        data[i].count = 0;
        for (let j = 0; j < data[i].tags.length; j++) {
            if (at(data[i].tags[j], choosedTags)) {
                data[i].count++;
            };
        };
    };
};


function sortData() {
    countTags();
    data.sort(function (a, b) {
        if (a.count > b.count) {
            return -1;
        }
        if (a.count < b.count) {
            return 1;
        }
        if (a.count == b.count) {
            aDate = new Date(a.createdAt);
            bDate = new Date(b.createdAt);
            return bDate - aDate;
        }
    })
};



function filterText(cont) {
    let contentText = "";
    let all = 0;
    let lowerCont = cont.toLowerCase();
    let lowerSearch = text.toLowerCase();
    let textSearchArray = lowerCont.split(lowerSearch);
    if (text != "") {
        if (textSearchArray.length == 1) {
            return null;
        } else {
            for (let i = 0; i < textSearchArray.length; i++) {
                for (let j = 0; j < textSearchArray[i].length; j++) {
                    contentText += cont[all];
                    all++;
                };
                contentText += "<span class='highlight'>";
                for (let j = 0; j < text.length; j++) {
                    if (cont[all] !== undefined) {
                        contentText += cont[all];
                    };
                    all++;
                };
                contentText += "</span>";
            };
            return contentText;
        }
    } else {
        return cont;
    }
};


function removeCard(event) {
    console.log(parseInt(event.target.parentElement.getAttribute("data-id")));
    removedCards.push(parseInt(event.target.parentElement.getAttribute("data-id")));
    let to = addedPosts;
    clearSpace();
    addCards(data, currPos, to);
};