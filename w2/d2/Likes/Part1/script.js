var likes = document.querySelector(".likeNum").innerText;
console.log(likes);

function addLike() {
    likes++;
    document.querySelector(".likeNum").innerText = likes;
    console.log(likes);
}