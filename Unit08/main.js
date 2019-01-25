


/*
document.getElementsByClassName('name')[1].style.color="red"
document.getElementsByClassName('name')[0].style.backgroundColor="blue"
document.getElementById('name').style.color="green"
document.getElementById('click').addEventListener('click',
	function(){
		/*alert('hello')*/
		/*document.getElementsByClassName('name')[1].style.color="blue"
		document.getElementsByClassName('name')[0].style.backgroundColor="red"*/
		/*document.getElementById('name').setAttribute('class','ahihi');*/
		/*console.log(document.getElementById('name').getAttribute('class'))

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

})*/


var input = document.getElementById('input')
		var content = document.getElementById('content')
document.getElementById('add').addEventListener('click',
	function(){
		var i=1
		if (input.value=='') {
			alert('error');
		}else{
			content.innerHTML +=    
			`<tr id="`+i+`">
			<td><input type="checkbox" ></td>
			<td>`+input.value+`</td>
			<td><button onclick = "funedit(`+i+`)">edit</button></td>
			<td><button onclick = "fundel(`+i+`)">del</button></td>
			</tr>`;
			input.value=''
		}

		
		
})
function fundel(id){
	
	if (confirm('do you want delete ?')==true) {
		
	document.getElementById(id).remove()
	}
}
function funedit(id){
	var input = document.getElementById('input')
	input.value = input
	document.getElementById('add').setAttribute(id, update)
		document.getElementById('update').innerHTML="Update"
	

	
}

/*function check(status){
	var checkboxs =document.getElementsByTagName('input');
	 for (var i = 0; i < checkboxs.length; i++){
                 checkboxs[i].checked = status
                }

}*/
document.getElementById('checkall').addEventListener('click',
	function(){
		var checkboxs =document.getElementsByTagName('input');
		 for (var i = 0; i < checkboxs.length; i++){
                 checkboxs[i].checked = true;
                }
})
document.getElementById('uncheckall').addEventListener('click',
	function(){
		var checkboxs =document.getElementsByTagName('input');
		 for (var i = 0; i < checkboxs.length; i++){
                      checkboxs[i].checked = false;
                }
                
})
document.getElementById('delall').addEventListener('click',
	function(){
		if (confirm('do you want delete all ?')==true) {
		
	content.innerHTML=''
	}
		
		
                
})

