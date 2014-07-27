var Hello = {
	world : function () {
		return "Hello";
	},

	callWorld : function () {
		var xhr = $.ajax('/some/url')
			.done(function(responseText) { 
				console.log( responseText ); 
			})
  			.fail(function() { 
  				console.log( "error" ); 
  			})
  			.always(function() { 
  				console.log( "complete" ); 
  			});
	}
};