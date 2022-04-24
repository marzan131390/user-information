//All List Items are in this DOM Element.
let nameList = document.getElementById('matching-name-lists');
let inputName = document.getElementById("name-input");
let warningContent = document.querySelector(".warning");
let searchBtn = document.getElementById("search");
//when input Field is empty and if button is clicked then warning will show
searchBtn.addEventListener("click", function() {
    if(inputName.value === "") {
        warningContent.style.display = "block";
    }
})
//Warning will hide if input field is clicked...
inputName.addEventListener("click", function() {
    warningContent.style.display = "none";
})
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
         li.innerHTML = `<span>${username}</span><span class="id">${id}</span> <button class="full-info-btn">Get Full Info</button> 
         <div class="info-content"> 
                     <p>Name: ${singleData.name}</p>
                     <p>Email: ${singleData.email}</p>
                     <p>City: ${singleData.address.city}</p>
                     <p>ZipCode: ${singleData.address.zipcode}</p>
                     <p>Phone: ${singleData.phone}</p>
                     <p>Website: ${singleData.website}</p>
                     <p>Company: ${singleData.company.name}</p>
                     <p>ID: <span>${singleData.id}</span></p>
                     <button class="hide-btn full-info-btn">Hide Info</button>
                 </div>`;
         nameList.appendChild(li);
     }
     //All username List hide..
     nameList.style.display = "none";
 };
 //filtering data
 inputName.addEventListener("keyup", function(event) {
    if(inputName.value != "") {
        nameList.style.display = "block";
        let textInput = event.target.value.toLowerCase();
        //Getting all list element to filtering
        let listElements = document.querySelectorAll("li");
        listElements.forEach((element) => {
            let listName = element.children[0].innerText.toLowerCase();
            if(listName.indexOf(textInput) !== -1) {
                element.style.display = "block"     
            }
            else {
                element.style.display = "none";
            }
        });
    }
    else {
        nameList.style.display = "none";
    }
 });
 //display User Info..
 function getFullInfo(data) {
     let infoBtn = document.getElementsByClassName("full-info-btn");
     for(let i = 0; i<infoBtn.length; i++) {
         let singleBtn = infoBtn[i];
         singleBtn.addEventListener("click", function(event) {
             //All user Information are here.
             let contentInfo = document.getElementsByClassName("info-content");
             for(j = 0; j<contentInfo.length; j++) {
                 //Finding any Info Element's id value..
                 let singleInfoContent = contentInfo[j];
                 let infoElementID = singleInfoContent.children[7].children[0].innerText;
                 infoElementID = parseInt(infoElementID);
                 //Finding userName's id value
                 let userNameID = event.target.previousElementSibling;
                 userNameID = parseInt(userNameID.innerText);
                 if(userNameID === infoElementID) {
                     singleInfoContent.style.display = "block";
                     return;
                 };  
             };
         });
     };
         //Hiding all info by clicking hide button
         let hideBtn = document.getElementsByClassName("hide-btn");
         for(let k = 0; k<hideBtn.length; k++) {
             let singleHideBtn = hideBtn[k];
             singleHideBtn.addEventListener("click", function(e) {
                 let containerInfo = e.target.parentNode;
                 containerInfo.style.display = "none";
             });
         };
 };





