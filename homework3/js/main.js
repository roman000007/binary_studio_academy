const main = document.getElementById('main');
let addedPosts = 0;
let data;
let dataLoaded = false;
let choosedTags = [];
window.onload = function () {
    loadData();
    loadTags();

};

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
                for(let i = 0; i < data.length; i++){
                  data[i].id = i;  
                };
                sortData();
                addCards(data, addedPosts, addedPosts + 10);
                if(!dataLoaded){
                dataLoaded = true;
                window.scrollTo(0, 0);
                };
                
            });
        });

};


function clearSpace() {
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    addedPosts = 0;
};


function addCards(data, from, to) {
    let t = 0;
    for (let i = Math.max(0, from); i < Math.min(data.length, to); i++) {
        addCard(data[i]);
        t++;
    }
    console.log("Added", t, "cards,", addedPosts + t);
    addedPosts += t;
};


function addCard(data) {
    const card = document.createElement('div');
    card.setAttribute('class', "info");

    const close = document.createElement('i');
    close.setAttribute('class', "exit fa-close fa");
    card.appendChild(close);

    const title = document.createElement('h2');
    title.innerHTML = data.title;
    card.appendChild(title);

    const content = document.createElement('p');
    content.innerHTML = data.description;
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
        if(localStorage.getItem("tags") === ""){
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
    if (data === null || data.isUndefined) {
        return false;
    }
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
        addCards(data, addedPosts, addedPosts + 10);
    };
};



function countTags() {
    for (let i = 0; i < data.length; i++) {
        data[i].count = 0;
        for (let j = 0; j < data[i].tags.length; j++) {
            if(at(data[i].tags[j], choosedTags)){
                data[i].count++;
            };
        };
    };
};


function sortData(){
    countTags();
    data.sort(function(a, b) {
    if(a.count > b.count){
        return -1;
    }
    if(a.count < b.count){
        return 1;
    }
    if(a.count == b.count){
        aDate = new Date(a.createdAt);
        bDate = new Date(b.createdAt);
        return bDate - aDate;
    }
})
};