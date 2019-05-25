let d = 0;

function check(id, done) {
  console.log(done)
  if(d % 2) {
    done = (done == "true" ? "false" : "true")
    console.log(done + " " + String(d))
  } d++
  const Http = new XMLHttpRequest();
  const url="/edit/" + id + "/" + done;
  Http.open("POST", url);
  Http.send();
  Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
  }

}

function remove(id) {
  const Http = new XMLHttpRequest();
  const url="/delete/" + String(id);
  Http.open("POST", url);
  Http.send();
  Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
  }
  document.getElementById('t' + String(id)).remove()
}

function srch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("tt");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("th")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}