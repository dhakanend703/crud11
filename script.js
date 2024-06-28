var selectedRow = null;

function sub(e){
    event.preventDefault();
    var FormData = readFormData();

    if(selectedRow === null){
        insertNewRecord(FormData);
    }
    else{

        Updatedata(FormData);
    }

}
function readFormData(){
    var FormData = {};
    FormData ["username"] = document.getElementById("username").value;
    FormData ["number"]= document.getElementById("number").value;
    FormData ["id"]= document.getElementById("id").value;
    FormData ["pass"]= document.getElementById("pass").value;

    return FormData;
}
function insertNewRecord(data){
    var table = document.getElementById("emplist").getElementsByTagName(`tbody`)[0];
    var newRow =  table.insertRow(table.length);
     

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;

    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.number;

    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;

    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pass;

    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button id="edit" onClick='onEdit(this)'>Edit</button>
    <button id="delete" onClick='dell(this)'>Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("number").value = selectedRow.cells[1].innerHTML;
    document.getElementById("id").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[3].innerHTML;
}
function Updatedata(FormData){
    selectedRow.cells[0].innerHTML = FormData.username;
    selectedRow.cells[1].innerHTML = FormData.number;
    selectedRow.cells[2].innerHTML = FormData.id;
    selectedRow.cells[3].innerHTML = FormData.pass;
}
function dell(td){
    row = td.parentElement.parentElement;
    document.getElementById("emplist").deleteRow(row.rowIndex)
}


