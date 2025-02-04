var spans = [];
spans.push(document.querySelectorAll('span.Hidden'));
var spanHidden = spans[0];
 
var spanCurtida = null;
for(let i = 0; i < spanHidden.length; i++){
	if(spanHidden[i].textContent == 'Curtir'){
		console.log(spanHidden[i].textContent);
		spanCurtida = spanHidden[i];	
	}	
}
var buttonCurtida = null;
if(spanCurtida != null && spanCurtida != undefined){
    var like = 0;
	buttonCurtida = spanCurtida.closest('button');	
	
	Interval = setInterval(function() {
		buttonCurtida.click();
		like++;
		console.log('likes:' + like + '');
	}, Math.floor(Math.random() * 4 + 2) * 1000);
	
}
