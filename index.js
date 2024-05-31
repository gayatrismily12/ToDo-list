function add() {
  let p = document.createElement("p");
  let inputValue = document.getElementsByClassName("textBox")[0].value;
  var t = document.createTextNode(inputValue);
  p.appendChild(t);
  p.className = "task";
  let div1 = document.createElement("div");
  div1.appendChild(p);
  let div2 = document.createElement("div");
  let inp = document.createElement("input");
  inp.type = "checkbox";
  inp.className = "checkbox";
  let but = document.createElement("button");
  but.onclick = function () {
    remove();
  };
  but.className = "delete";
  let butText = document.createTextNode("Delete");
  but.appendChild(butText);
  div2.appendChild(inp);
  div2.appendChild(but);
  div1.appendChild(div2);
  div1.className = "Tap2";
  let div3 = document.getElementsByClassName("container")[0];
  div3.appendChild(div1);
}
function remove() {
  let del = document.getElementsByClassName("delete");
  for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      var div = this.parentElement.parentElement;
      div.style.display = "none";
    };
  }
}
//doubt-the remove for the first time it is initiating with 2 clicks later on with one click why??
