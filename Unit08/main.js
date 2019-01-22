



document.getElementsByClassName('name')[1].style.color="red"
document.getElementsByClassName('name')[0].style.backgroundColor="blue"
document.getElementById('name').style.color="green"
document.getElementById('click').addEventListener('click',
	function(){
		/*alert('hello')*/
		document.getElementsByClassName('name')[1].style.color="blue"
		document.getElementsByClassName('name')[0].style.backgroundColor="red"
		/*document.getElementById('name').setAttribute('class','ahihi');*/
		console.log(document.getElementById('name').getAttribute('class'))

})
document.getElementById('mouse').addEventListener('mouseout',
	function(){
		
		document.getElementsByClassName('name')[1].style.color="pink"
		document.getElementsByClassName('name')[0].style.backgroundColor="red"

})
document.getElementById('mouse').addEventListener('mouseover',
	function(){
		
		document.getElementsByClassName('name')[1].style.color="black"
		document.getElementsByClassName('name')[0].innerHTML='ahihi'

})


var input = document.getElementById('input')
		var content = document.getElementById('content')
document.getElementById('add').addEventListener('click',
	function(){
		var i=1
		
		/*alert(input.value)*/
		content.innerHTML += /*input.value +'<br>'*/    
		`<tr id="`+i+`">
		<td>`+input.value+`</td>
		<td><button onclick = "fundel(`+i+`)">del</button></td>
		</tr>`;
		input.value=''
})
function fundel(id){
	document.getElementById(id).remove()
}

