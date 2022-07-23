var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["studentName"] = document.getElementById("studentName").value;
  formData["collegeName"] = document.getElementById("collegeName").value;
  formData["Email"] = document.getElementById("Email").value;
  formData["Gender"] = document.getElementById("Gender").value;
  formData["Skills"] = document.getElementById("Skills").value;

  return formData;
}

  function insertNewRecord(data) {
    var table = document
      .getElementById("storeList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.collegeName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Skills;
    cell5 = newRow.insertCell(5);
}