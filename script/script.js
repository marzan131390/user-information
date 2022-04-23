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
        li.innerHTML = `<span>${username}<span class="id">${id}</span> <button class="full-info">Get Full Info</button> 
        <div class="info-content"> 
                    <p>Name: ${singleData.name}</p>
                    <p>Email: ${singleData.email}</p>
                    <p>City: ${singleData.address.city}</p>
                    <p>ZipCode: ${singleData.address.zipcode}</p>
                    <p>Phone: ${singleData.phone}</p>
                    <p>Website: ${singleData.website}</p>
                    <p>Company: ${singleData.company.name}</p>
                    <p>ID: <span>${singleData.id}</span></p>
                    <button class="hide-btn full-info">Hide Info</button>
                </div>`;
        nameList.appendChild(li);
    }
    //All username List hide..
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

            //All user Information are here.
            let contentInfo = document.getElementsByClassName("info-content");
            for(j = 0; j<contentInfo.length; j++) {
                //Finding any single Info's id value..
                let singleInfoContent = contentInfo[j];
                let childElement = singleInfoContent.children[7].children[0].innerText;
                childElement = parseInt(childElement);
                console.log(childElement);
                //Finding Target Element's id value
                let targetElement = event.target.previousElementSibling;
                targetElement = parseInt(targetElement.innerText);
                console.log(targetElement);
                if(targetElement === childElement) {
                    console.log("Hello world");
                    singleInfoContent.style.display = "block";
                    return;
                }
                //Hiding all info by clicking hide button
                
                
            }
            //All userInformation hide.
            // contentInfo.style.display = "block"


            // // These code is for gaining Knowledge for myself.
            // for(let j = 0; j<data.length; j++) {
            //     let singleElementId = data[j].id;
            //     let targetElement = event.target.previousElementSibling;
            //     targetElement = parseInt(targetElement.innerText);
            //     if(targetElement === singleElementId) {
            //         console.log(event.target);
                    
                    
            //     }   
            // };
        });
    };
    
};
