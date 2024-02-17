function displayFooterInfo() {
    getE('info').innerText = `Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.number} ${salon.address.zip}`;

}
function displayCount(){
    let count = salon.pets.length;
    getE('counter-container').innerHTML = `Total Pets: <span class="highlighting-green">${count}<span/>`;

}


let reverse = false;

function reverseOrder() {
    reverse = !reverse;
    displayNames();
}

function displayNames(){
    let pets = salon.pets;
    let text = "<table><tr><th>ID</th><th>Name</th><th>Age</th><th class ='none-display'>Gender</th><th>Owner Name</th><th class ='none-display'>Species</th><th id='counter-container'</th></tr>";
    if (reverse) {
        for (let i = pets.length - 1; i >= 0; i--) {
            text += `<tr class ="${pets[i].id}"><td>${pets[i].id}</td><td>${pets[i].name}</td><td>${pets[i].age}</td><td  class ='none-display'>${pets[i].gender}</td><td>${pets[i].owner}</td><td class ='none-display'>${pets[i].species}</td><td><button class="delete-btn" onClick="deletePet('${pets[i].id}')">Delete</button></td></tr>`;
        }
    } else {
        for (let i = 0; i < pets.length; i++) {
            text += `<tr class ="${pets[i].id}"><td>${pets[i].id}</td><td>${pets[i].name}</td><td>${pets[i].age}</td><td  class ='none-display'>${pets[i].gender}</td><td>${pets[i].owner}</td><td class ='none-display'>${pets[i].species}</td><td><button class="delete-btn" onClick="deletePet('${pets[i].id}')">Delete</button></td></tr>`;
        }
    }
    text += "</table>";
    getE('pets-container').innerHTML = text;
    displayCount();
}

function displayPetCards(){
    let card="";
    let bColor = "";
    for (let i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
        if(pet.package === "Basic" ){
            bColor = "CD7F32";
        }else if(pet.package === "Standard"){
            bColor = "BEBEBE";
        }else if(pet.package === "Premium"){
            bColor = "DAA520";
        }else{
            bColor = "30000E";
        }
        card += `
            <div id="${pet.id}" class="petCard" style="background-color: #${bColor}; color: #ffffff;">
                <div class="detele-container"><button class="delete-btn" onClick="deletePet('${pet.id}')">X</button></div> 
                <div>
                    <h3 class="name-pet">${pet.id}.-${pet.name}</h3>

                    <p><span class="change-color">Age:</span> ${pet.age}</p>
                    <p><span class="change-color">Gender:</span> ${pet.gender}</p>
                    <p><span class="change-color">Species:</span> ${pet.species}</p>
                    <P><span class="change-color">Breed:</span> ${pet.breed}</P>
                    <p><span class="change-color">Package:</span> ${pet.package}</p>
                    <p><span class="change-color">Extra Services:</span> ${pet.service}</p>
                    <p><span class="change-color">Owner:</span> ${pet.owner}</p> 
                    <p><span class="change-color">Description:</span> ${pet.description}</p>
                    <p><span class="change-color">Payment:</span> ${pet.payment}</p>
                </div>    
            </div>
        `;
    }
    getE('pets').innerHTML = card;
}
function searchFunction() {
    let input = document.getElementById('searchBar');
    let filter = input.value.toUpperCase();
    let table = document.getElementById('pets-container');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}