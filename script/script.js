//All List Items are in this DOM Element.
let nameList = document.getElementById('matching-name-lists');

//load data from external server 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    //Display User All List
    displayUserList(data)
    //display user all Info
    getFullInfo(data);

});
//display all data into a list
function displayUserList(data) {
    
    for(let i = 0; i< data.length; i++) {
        let singleData = data[i];
        let username = singleData.username;
        let id = singleData.id;
        let li = document.createElement("li");
        li.innerHTML = `<span>${username}<span class="id">${id}</span> <button class="full-info">Get Full Info</button>`;
        nameList.appendChild(li);
    }
    nameList.style.display = "none";
};
//filtering data
let inputName = document.getElementById("name-input");
inputName.addEventListener("keyup", function(event) {
    nameList.style.display = "block";
    let textInput = event.target.value.toLowerCase();
    //Getting all list element to filtering
    let listElements = document.querySelectorAll("li");
    listElements.forEach((element) => {
        let listName = element.innerText.toLowerCase();
        if(listName.indexOf(textInput) !== -1) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none";
        }
    });
});

//display User Info..
function getFullInfo(data) {
    let infoBtn = document.getElementsByClassName("full-info");
    for(let i = 0; i<infoBtn.length; i++) {
        let singleBtn = infoBtn[i];
        singleBtn.addEventListener("click", function(event) {
            for(let j = 0; j<data.length; j++) {
                let singleElementId = data[j].id;
                let targetElement = event.target.previousElementSibling;
                targetElement = parseInt(targetElement.innerText);
                if(targetElement === singleElementId) {
                    console.log(singleElementId);
                    
                }   
            };
        });
    };
    
};
