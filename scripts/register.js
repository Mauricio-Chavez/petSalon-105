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
function Pet(n,a,g,b,s,ps,p,sp,o,d,pa){
    this.name = n;
    this.age = a
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.pService = ps;
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
function getServices(){
    let servicesList = readItems('service');
    console.log(servicesList);
    for (let i = 0;i < servicesList.length;i++){
        let service = servicesList[i];
        $("#txtService").append(
            `<option value = "${service.description}">${service.description}</option>`);
    }
}
function deletePet(id){
    let pets = readItems("petsDB");
    let deleteIndex = pets.findIndex(pet => pet.id == id);
    if(deleteIndex !== -1){
        pets.splice(deleteIndex,1);
    }
    deleteIndex = salon.pets.findIndex(pet => pet.id == id);
    if(deleteIndex !== -1){
        salon.pets.splice(deleteIndex,1);
    }
    updateStorage(pets, "petsDB");
    displayPetCards();
    displayCount();
    displayNames();
}

function deleteAllPets() {
    updateStorage([], "petsDB");
    salon.pets = [];
    displayNames();
    displayPetCards();
    displayCount();
}

function addTestPets() {
    let pet1 = new Pet("Test Pet 1", 1, "Male", "Breed1", "Service1","Vaccines",  "Basic","Dog", "Owner1", "Description1", "Cash");
    let pet2 = new Pet("Test Pet 2", 2, "Female", "Breed2", "Service2","Vaccines", "Standard", "Cat", "Owner2", "Description2", "Credit");
    let pet3 = new Pet("Test Pet 3", 3, "Male", "Breed3", "Service3","Vaccines", "Premium", "Bird", "Owner3", "Description3", "Cash");
    let pet4 = new Pet("Test Pet 4", 4, "Female", "Breed4", "Service4","Vaccines", "None","Dog", "Owner4", "Description4", "Credit");
    salon.pets.push(pet1, pet2, pet3, pet4);
    console.log(salon.pets)
    saveArray(pet1, "petsDB");
    saveArray(pet2, "petsDB");
    saveArray(pet3, "petsDB");
    saveArray(pet4, "petsDB");
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
    let pService = getE('txtService');
    let species = getE('species');
    let owner = getE('owner');
    let description = getE('description');
    let payment = getE('payment');

function register(event){
    event.preventDefault();
    if(isValid()){
        servicesSp = services.value.split(", ");
        let pet = new Pet(name.value,age.value,gender.value,breed.value,servicesSp,pService.value,package.value,species.value,owner.value,description.value,payment.value);
        salon.pets.push(pet);
        saveArray(pet,"petsDB");
        name.value = "";
        age.value = "";
        gender.value = "";
        breed.value = "";
        pService.value = "";
        package.value = "";
        services.value = "";
        species.value = "";
        owner.value = "";
        description.value = "";
        payment.value = "";
        
        displayNames();
        displayCount();
        displayPetCards();
    
        
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
    getE('txtService').classList.remove("input-alert-error");
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
    if(!pService.value){
        getE('txtService').classList.add("input-alert-error");
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
    // $("#notificacions").slideDown(4000);
    getE('notificacions').classList.remove("hidden");
    getE('notificacions').innerHTML = `<p class="${type}">${msg}</p>`;
    // $("#notificacions").slideUp(4000);
    //slide left to right
    setTimeout(function(){
        getE('notificacions').classList.add("hidden");
    },3000);
}
function init(){
    getServices()
    displayFooterInfo();
    displayNames();
    displayCount();
    displayPetCards();
}
window.onload = init;


