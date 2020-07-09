var form=document.getElementById('additem');
var notelist=document.getElementById('notes');
var notecolor=document.getElementById('formColor');
form.addEventListener('submit',addnote);
console.log(notecolor.value);
//var colo=notecolor.value;
//notelist.addEventListener('click',noteedit);
function addnote(e) {
  e.preventDefault();
  var colo=notecolor.value;
  var text=document.getElementById('notetext').value;
  var div=document.createElement('div');
  var editbtn=document.createElement('button');
  div.className='card bd';
  var p=document.createElement('p');
  p.appendChild(document.createTextNode(text));
  p.className='card-header';
  p.id='txt';
  p.classList.add(colo);
  editbtn.className='btn btn-sm float-left btn-info btnmarg2 edit';
  editbtn.appendChild(document.createTextNode('Edit'));
  editbtn.id='editid';
  editbtn.addEventListener('click',editnote);
  div.appendChild(p);
  var deletebtn=document.createElement('button');
  deletebtn.className='btn btn-danger btn-sm float-left btnmarg2 delete';
  deletebtn.appendChild(document.createTextNode('Delete'));
  deletebtn.addEventListener('click',delnote);
  var body=document.createElement('card-body');
  //body.className='bd';
  body.appendChild(editbtn);
  body.appendChild(deletebtn);
  div.style.marginTop='10px';
  body.style.margin='8px';
 /* editbtn.className='btn btn-sm float-left btn-info edit';
  editbtn.appendChild(document.createTextNode('Edit'));
  editbtn.id='editid';
  editbtn.addEventListener('click',editnote);
  body.appendChild(editbtn);*/
  div.appendChild(body);
  notelist.appendChild(div);
  console.log(div);
  document.getElementById('notetext').value='';
}
function delnote(e){
  if(e.target.classList.contains('delete')){
    var body=e.target.parentElement;
    var div=body.parentElement;
    notelist.removeChild(div);
  }
}
function editnote(e){
  
  
  if(e.target.innerHTML=="Edit"){
    document.activeElement.parentElement.parentElement.childNodes[0].contentEditable="true";
    e.target.innerHTML="Save";
    
  }
  else{
    document.activeElement.parentElement.parentElement.childNodes[0].contentEditable="false";
    e.target.innerHTML="Edit";
  }
}
