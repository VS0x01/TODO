let d = 0;
function check(id, done) {
  if(d % 2) {
    done = (done == "true" ? "false" : "true")
  } d++
  fetch("/edit/" + id + "/" + done, {
      method: 'POST'
    });
}

function remove(id) {
  fetch("/delete/" + String(id), {
    method: 'POST'
  }).then(function() {
    document.getElementById('t' + String(id)).remove()
  });
}

function srch() {
  let input, filter, table, tr, th, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("tt");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    th = tr[i].getElementsByTagName("th")[0];
    if (th) {
      txtValue = th.textContent || th.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
