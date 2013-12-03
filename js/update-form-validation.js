$(function(){

	$("#signupForm").validate({
							
/*	    invalidHandler: function(form, validator) {
									$('label.error').html('');
		},*/
		submitHandler: function(form) {
		   	
			var formData = $(form).serialize();
			
			$.get("email/email.php", formData, function(data){
				
			   if(data == 'success'){
				   
			   		$('#signupForm').hide();
					$('#form-message-success').show();
					
			   }else{
				   
				    $('#signupForm').hide();
					$('#form-message-error').show();
				   
			   }
			 });
		},
		rules: {
				  email: {
						  required: true,
						  email: true
				  }
		},// rules
		
		messages: {
				  email: {
						  required: 'Please enter email',
						  email: 'Please enter valid email'
				  }
		}// messages


	});// validate
	
}); // jQuery