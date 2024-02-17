function saveArray(item) { 
    let itemsArray = readItems();
    itemsArray.push(item);
    let val = JSON.stringify(itemsArray);
    localStorage.setItem('services',val);
}

function readItems(){
    let data = localStorage.getItem('services');
    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}