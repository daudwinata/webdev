/* JS */
$(document).ready(function(){
	$('#contactBtn').click(function(){
		var valid = true;
		
		$('#name').css({
				'border':"#000",
				'color':"#000000"
		})
		
		$('#email').css({
				'border':"#000",
				'color':"#000000"
		})
		
		$('#subject').css({
				'border':"#000",
				'color':"#000000"
		})
		
		$('#message').css({
				'border':"#000",
				'color':"#000000"
		})
		
		
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
	
		//Validate
		if(name == '' || name.length < 2 || !isNaN(name)){
			valid = false;
			$('#name').css({
				'border':"1px solid #ab001a",
				'color':"FFFFFF"
			})
			
			$('#name').attr('placeholder','Please enter your name')
			
		}
		
		if(validateEmail(email) == false){
			valid = false;
			$('#email').css({
					'border':"1px solid #ab001a",
					'color':"FFFFFF"
			})
			
			$('#email').attr('placeholder','Please enter your email')
		}
		
		if(subject == '' || subject.length < 4 || !isNaN(subject)){
			valid = false;
			$('#subject').css({
					'border':"1px solid #ab001a",
					'color':"FFFFFF"
			})
			
			$('#subject').attr('placeholder','Please enter your subject')
		}
		
		if(message == '' || message.length < 6 || !isNaN(message)){
			valid = false;
			$('#message').css({
					'border':"1px solid #ab001a",
					'color':"FFFFFF"
			})
			
			$('#message').attr('placeholder','Please enter your message')
		}
		
		
		
		if(valid == true){
				
			$.ajax({
				url:'tes.php',
				type:'POST',
				data:{
					name:name,
					email:email,
					subject:subject,
					message:message
				},
				success:function(response){
					$('#response').html(response);
				}
			
			});
		}
		
		
	});
})



function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 