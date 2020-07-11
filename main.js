console.dir(document);
console.log(document.domain);
console.log(document.body);
console.log(document.head);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent='hi';
console.log(document.links);


// getElementById

console.log('header-title');
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//headerTitle.textContent='hi';
//headerTitle.innerHTML='<h3>hrllo</h3>'

//headerTitle.style.borderBottom = 'solid 3px #000';

//getElementByClassName

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);

items[1].textContent='item 2';
//items[1].style.fontWeight = 'italic';
//items[2].style.backgroundColor = 'blue';
//items.style.backgroundColor = 'yellow';

//for(let i=0 ; i< items.length ; i++)
//{
    //items[i].style.backgroundColor = 'yellow';
//}


//getElementsByTagName
var li=document.getElementsByTagName('li')
console.log(li);
console.log(li[1]);


//for(let i=0 ; i< items.length ; i++)
//{
    //items[i].style.backgroundColor = 'blue';
//}

//queryselector
   // var header = document.querySelector('#main-header')
   // header.style.borderBottom='solid 4px #ccc';

    //var input = document.querySelector('input');
   // input.value='heol';

   // var submit = document.querySelector('input[type="submit"]');
    //submit.value="send"


    var item =document.querySelector('.list-group-item');
   // item.style.color = 'RED'

    var lastitem =document.querySelector('.list-group-item:last-child');
   // lastitem.style.color = 'red'


    var secondItem = document.querySelector('.list-group-item:nth-child(2)');
   // secondItem.style.color = 'red';


   //QUERYSELECTORALL

   var titles=document.querySelectorAll('.title');

   console.log(titles);

  // titles[0].textContent = 'Hello';

 //  var odd = document.querySelectorAll('li:nth-child(odd)');
   //var even = document.querySelectorAll('li:nth-child(even)');
   //for(let i=0 ; i < odd.length ; i++)
   {
     // odd[i].style.backgroundColor = '#f4f4f4'
      //even[i].style.backgroundColor = '#ccc'
   }
 // console.log(even);
  //console.log(odd);


//traversing the dom

var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='red';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hi';


console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hi';


console.log(itemList.nextElementSibling);
console.log(itemList.nextSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

//itemList.previousElementSibling.style.color='blue';

//creatre newelement
//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hi';
//add attr
newDiv.setAttribute('title','hello Div');
//create textnode
var newDivText=document.createTextNode('hello hi');
//add text to div
newDiv.appendChild(newDivText);


//var container=document.querySelector('header .container');

//var h1=document.querySelector('header h1');



//console.log(newDiv);

//newDiv.style.fontSize = '30px';

//container.insertBefore(newDiv, h1);


var button = document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick(e){
console.log(e);


console.log(e.target);
console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);

//var output = document.getElementById('output');
//output.innerHTML='<h3>' +e.target.id+'</h3>';
//console.log(e.type);

console.log(e.clientX);
console.log(e.clientY);

console.log(e.offsetX);
console.log(e.offsetY);

console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);
}

var button = document.getElementById('button');
var box = document.getElementById('box');

button.addEventListener('click',runEvent);
button.addEventListener('dbclick',runEvent);
button.addEventListener('mousedown',runEvent);
button.addEventListener('mouseup',runEvent);

box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);

box.addEventListener('mouseover',runEvent);
box.addEventListener('mouseout',runEvent);

box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form =document.querySelector('form');
var select =document.querySelector('select')

itemInput.addEventListener('keydown',runEvent);
itemInput.addEventListener('keyup',runEvent);
itemInput.addEventListener('keypress',runEvent);
itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);

itemInput.addEventListener('cut',runEvent);
itemInput.addEventListener('paste',runEvent);
itemInput.addEventListener('input',runEvent);

select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);



function runEvent(e){

    //e.preventDefault();
   // console.log('EVENT TYPE:'+e.type);



   // console.log(e.target.value);
   // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';

    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

