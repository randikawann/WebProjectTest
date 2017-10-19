function display() {
    var myValue = document.getElementById('myTextBox').value;
    if (myValue.length == 0) {
        alert('enter real value');
        return;
    }
    var myTitle = document.getElementById('headId');
    myTitle.innerHTML = myValue;
}