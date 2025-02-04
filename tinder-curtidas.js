var buttonLike = document.querySelectorAll('button')[28];

if(buttonLike != null && buttonLike != undefined){

    var like = 0;
	
	Interval = setInterval(function() {
		buttonLike.click();
		like++;
		console.log('likes:' + like + '');
	}, Math.floor(Math.random() * 4 + 2) * 1000);
}
