const writeTitleNode = document.querySelector('.write__title');
const writePostNode = document.querySelector('.write__post');
const buttonNode = document.querySelector('.createPost');
const renderTitleNode = document.querySelector('.render__title');
const postListsNode = document.querySelector('.post-lists');
const postTextNode = document.querySelector('.post-text');

const posts = {};

buttonNode.addEventListener('click', () => {
    const {title, post} = getMessage(writeTitleNode, writePostNode);
    saveMessage(posts, title, post);
    getTime();
    renderMessage(posts);
});

function getMessage(titleNode, postNode){
    return {
        title: titleNode.value,
        post: postNode.value,
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