let selectedItem = document.getElementById('selectedItem');
function addItem() {
    let value = selectedItem.value

    let newitem = document.createElement('li');
    newitem.innerHTML = value;
    list.append(newitem)


}

document.querySelector('.add').addEventListener('click', e => {
    addItem();
    document.getElementById('selectedItem').value = '';
});