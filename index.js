const writeTitleNode = document.querySelector('.write__title');
const writePostNode = document.querySelector('.write__post');
const buttonNode = document.querySelector('.createPost');
const renderTitleNode = document.querySelector('.render__title');
const postListsNode = document.querySelector('.post-lists');
const postTextNode = document.querySelector('.post-text');

const posts = {};

buttonNode.addEventListener('click', () => {
    const {title, post} = getMessage(writeTitleNode, writePostNode);
    if(checkLengthTitle(title) && checkLengthPost(post)){
        saveMessage(posts, title, post);
        getTime();
        renderMessage(posts);
    };
});

function getMessage(titleNode, postNode){
    return {
        title: titleNode.value,
        post: postNode.value,
    };
};
function checkLengthTitle(title){
    if(title.length < 100){
        return true;
    }else{
        const lengthError = document.createElement('p');
        lengthError.className = 'error';
        lengthError.textContent = 'Длина заголовка не должна превышать 100 символов';
        writeTitleNode.after(lengthError);
    };
};

function checkLengthPost(post){
    if(post.length < 200){
        return true;
    }else{
        const lengthError = document.createElement('p');
        lengthError.className = 'error';
        lengthError.textContent = 'Длина поста не должна превышать 200 символов';
        writePostNode.after(lengthError);
    };
};
function saveMessage(obj, title, post){
    obj.title = title;
    obj.post = post;
};

function renderMessage(obj){
    const newpost = document.createElement('li');
    newpost.className = 'post';
    newpost.innerHTML = `
    <p class='render__title'>${obj.title}</p>
    <p class='render__post'>${obj.post}</p>
    `;
    postTextNode.classList.add('post-display');
    postListsNode.append(newpost);
};

function getTime(){
    const time = new Date();
    const timeCreate = document.createElement('time');
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    const currentTime = time.toLocaleString('ru', options).replace(',', '');
    timeCreate.className = 'render__time';
    timeCreate.textContent = currentTime;
    postListsNode.append(timeCreate);
}