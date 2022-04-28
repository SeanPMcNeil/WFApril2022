console.log("page loaded...");

var userName = document.querySelector("#mainName").innerText;
console.log("Old Name is: " + userName);

function changeName() {
    userName = "Betty Smith";
    document.querySelector("#mainName").innerText = userName;
    console.log("New name is: " + userName);
}

var connRequests = document.querySelector("#connRequests").innerText;
var totalConns = document.querySelector("#totalConns").innerText;

console.log(connRequests);
console.log(totalConns);

function byeByeUser(element){
    console.log(element.alt);
    element.parentElement.parentElement.remove();
    connRequests--;
    document.querySelector("#connRequests").innerText = connRequests;

    if(element.alt == "accept"){
        totalConns++;
        document.querySelector("#totalConns").innerText = totalConns;
    }
}