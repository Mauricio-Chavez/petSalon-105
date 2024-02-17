
let services =[];
$(document).ready(function(){
    console.log("Service Page");

    $('#btnService').click(addService)
    displayStoredItems();
});
function addService(event){
    event.preventDefault();
    let inputService = $('#txtService').val();
    let inputPrice = $('#price').val();
    console.log(inputService);
    let newService = new Service(inputService,inputPrice);
    services.push(newService);
    saveArray(newService);
    $('#txtService').val("");
    $('#price').val("");
    displayItems(services);
}
function Service(description,price){
    this.description = description;
    this.price = price;
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
        console.log(item);
        row = `<tr><td>${item.description}</td><td>$ ${item.price}</td><td><button class="delete-btn" data-index="${i}">Delete</button></td></tr>`;
        htmlTable.append(row);
    }
}
function displayStoredItems(){
    let items = readItems();
    displayItems(items);
}
function updateArray(items) { 
    let val = JSON.stringify(items);
    localStorage.setItem('services',val);
}

$(document).on('click', '.delete-btn', function() {
    let index = $(this).data('index');
    let items = readItems();
    items.splice(index, 1);
    updateArray(items);
    displayItems(items);
});


