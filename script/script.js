//load data from external server 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => displayUserList(data));

//display all data into a list
function displayUserList(data) {
    let nameList = document.getElementById('matching-name-lists');
    for(let i = 0; i< data.length; i++) {
        let singleData = data[i];
        let name = singleData.name;
        let li = document.createElement("li");
        li.innerText = name;
        nameList.appendChild(li);
    }
    
}