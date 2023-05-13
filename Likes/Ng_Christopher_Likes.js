var likeCount = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];
var count = [9, 12, 9];

function add1(id) {
    count[id]++;
    likeCount[id].innerHTML = count[id] + " like(s)"
}
