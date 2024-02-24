
let servicesA =[];
$(document).ready(function(){
    $('#btnService').click(addService)
    displayStoredItems(servicesA);
});

function addService(event){
    event.preventDefault();
    if(valid()){
        let inputService = $('#txtService').val();
        let inputPrice = $('#price').val();
        let newService = new Service(inputService,inputPrice);
        servicesA.push(newService);
        saveArray(newService,"service");
        $('#txtService').val("");
        $('#price').val("");
        showNotifications("Service added", "alert-success");
    }else{
        showNotifications("Incomplete required fields", "alert-error");
    }
    
    displayStoredItems();
}
function Service(description,price){
    this.description = description;
    this.price = price;
}
function valid(){
    let validation = true;
    $('#txtService').removeClass("input-alert-error");
    $('#price').removeClass("input-alert-error");
    if (!txtService.value) {
        $('#txtService').addClass("input-alert-error");
        validation = false;
    }
    if (!price.value) {
        $('#price').addClass("input-alert-error");
        validation = false;
    }
    return validation;
}
// function displayItems(items){
//     let htmlList = $('#services');
//     htmlList.html("");
//     let li;
//     for(let i= 0; i<items.length; i++){
//         let item = items[i];
//         console.log(item);
//         li = `<li>${item.description} - ${item.price}</li>`
//         htmlList.append(li);
//     }
// }

function displayItems(items){
    let htmlTable = $('#services');
    htmlTable.html("");
    let row;
    for(let i= 0; i<items.length; i++){
        let item = items[i];
        row = `<tr><td>${item.description}</td><td>$ ${item.price}</td><td><button class="delete-btn" data-index="${i}">Delete</button></td></tr>`;
        htmlTable.append(row);
    }
}

function displayStoredItems(){
    let items = readItems('service');
    displayItems(items);
}
function updateArray(items) { 
    let val = JSON.stringify(items);
    localStorage.setItem('service',val);
}

$(document).on('click', '.delete-btn', function() {
    let index = $(this).data('index');
    let items = readItems('service');
    items.splice(index, 1);
    updateArray(items);
    displayItems(items);
});


