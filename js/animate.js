/** JS **/
//Global Variables
var images = new Array('header-11.png','header-21.png','header-31.png');
var width;
var path = 'images/';
var counter = 0;


$(document).ready(function(){
	
	$('.banner').append('<div id="banner_wrapper"></div>');
	$('#banner_wrapper').width((100*(images.length+1))+'%');
	
	for(i=0; i<images.length; i++){
		$('#banner_wrapper').append('<img src="'+path+images[i]+'" />');
	}
	
	$('#banner_wrapper').append('<img src="'+path+images[0]+'" />');
	
	/*$('#banner_wrapper img').css('display','block');
	$('#banner_wrapper img').css('float','left');
	*/
	
	
	//Json Format
	$('#banner_wrapper img').css({
		'display':'block',
		'float':'left',
		'width':100/(images.length+1)+'%'
	});
	

	runBanner('#banner_wrapper',((images.length)+1),2000,3000);
	
});



function runBanner(id,length,time,delay){
	width = $(id).width()/length;	
	counter = counter+parseFloat(width);
	
	$(id).delay(delay).animate({
		'margin-left':'-'+counter
	},time,function(){
		if(counter < width*(images.length)){
			runBanner(id,length,time,delay);
		}else{
			counter = 0;
			$(id).css('margin-left',0);
			runBanner(id,length,time,delay);
		}
	
	})
}
