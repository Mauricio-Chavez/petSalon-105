console.log("Register.js");
let petID=0;
let salon = {
    name: "The Fashion Pet",
    phone: "999-999-9999",
    address: {
        street: "Main St",
        number: "123-k",
        zip: "12345",
    },
    pets: []
}
function Pet(n,a,g,b,s,p,sp,o,d,pa){
    this.name = n;
    this.age = a
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.package = p;
    this.species = sp;
    this.owner = o;
    this.description = d;
    this.payment = pa;
    this.id = petID++;
}

for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
}

function getE(id){
    return document.getElementById(id);
}
function deleteElement(petName){
    let index = salon.pets.findIndex(pet => pet.name === petName);
    if (index !== -1) {
        salon.pets.splice(index, 1);
    }
    displayPetCards();
    displayCount();
    displayNames();
}
function deletePet(id){
    let deleteIndex;
    for (let i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
        if(pet.id === id){
            deleteIndex = i;
            break;
        }
    }
    getE(id).remove();
    salon.pets.splice(deleteIndex, 1);
    displayPetCards();
    displayCount();
    displayNames();
}

    let name = getE('name');
    let age = getE('age');
    let gender = getE('gender');
    let breed = getE('breed');
    let package = getE('package');
    let services = getE('service');
    let species = getE('species');
    let owner = getE('owner');
    let description = getE('description');
    let payment = getE('payment');

function register(event){
    event.preventDefault();
    if(isValid()){
        servicesSp = services.value.split(", ");
        let pet = new Pet(name.value,age.value,gender.value,breed.value,servicesSp,package.value,species.value,owner.value,description.value,payment.value);
        salon.pets.push(pet);
        name.value = "";
        age.value = "";
        gender.value = "";
        breed.value = "";
        package.value = "";
        services.value = "";
        species.value = "";
        owner.value = "";
        description.value = "";
        payment.value = "";
        displayPetCards();
        displayCount();
        showNotifications("The pet has been registered", "alert-success");
    }else{
        showNotifications("Incomplete required fields", "alert-error");
    }    
}
function isValid(){
    let validation = true;
    getE('name').classList.remove("input-alert-error");
    getE('age').classList.remove("input-alert-error");
    getE('gender').classList.remove("input-alert-error");
    getE('breed').classList.remove("input-alert-error");
    getE('package').classList.remove("input-alert-error");
    getE('species').classList.remove("input-alert-error");
    getE('owner').classList.remove("input-alert-error");
    getE('description').classList.remove("input-alert-error");
    getE('payment').classList.remove("input-alert-error");
    if (!name.value) {
        getE('name').classList.add("input-alert-error");
        validation = false;
    }
    if (!age.value) {
        getE('age').classList.add("input-alert-error");
        validation = false;
    }
    if (!gender.value) {
        getE('gender').classList.add("input-alert-error");
        validation = false;
    }
    if (!breed.value) {
        getE('breed').classList.add("input-alert-error");
        validation = false;
    }
    if (!package.value) {
        getE('package').classList.add("input-alert-error");
        validation = false;
    }
    if (!species.value) {
        getE('species').classList.add("input-alert-error");
        validation = false;
    }
    if (!owner.value) {
        getE('owner').classList.add("input-alert-error");
        validation = false;
    }
    if(!description.value){
        getE('description').classList.add("input-alert-error");
        validation = false;
    }
    if(!payment.value){
        getE('payment').classList.add("input-alert-error");
        validation = false;
    }
    return validation;
}
function showNotifications(msg,type){
    getE('notificacions').classList.remove("hidden");
    getE('notificacions').innerHTML = `<p class="${type}">${msg}</p>`;
    setTimeout(function(){
        getE('notificacions').classList.add("hidden");
    },3000);
}
function init(){
    displayFooterInfo();
    let pet1 = new Pet("Scooby",60,"Male","Golden Retriever","Vaccine","Basic","Dog","Mauricio Chavez","The dog is very friendly","Cash")
    let pet2 = new Pet("Scrappy",50,"Male","Bulldog","Shower","Standard","Dog","Kimberly","The dog is very friendly","Credit")
    let pet3 = new Pet("Tweety bird",80,"Female","Canary","Nails cut, Shower","Premium","Bird","Abel","The bird is very friendly","Cash")
    let pet4 = new Pet("Tweety bird",80,"Female","Canary","Nails cut","None","Bird","Abel","The bird is very friendly","Cash")
    salon.pets.push(pet1,pet2,pet3,pet4); 
    displayNames();
    displayCount();
    console.log(pet1.package,pet2.package,pet3.package,pet4.package);
    displayPetCards();
}
window.onload = init;


