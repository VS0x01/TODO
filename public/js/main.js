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
