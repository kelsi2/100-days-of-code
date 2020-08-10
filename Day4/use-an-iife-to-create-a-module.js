let funModule = (function() {
	//group related functionality into single object or module, can be accessed by other parts of the code
	return {
		isCuteMixin: function(obj) {
			//Mixin (function that can be applied to mulriple classes)
			obj.isCute = function() {
				return true;
			};
		},
		singMixin: function(obj) {
			obj.sing = function() {
				console.log('Singing to an awesome tune');
			};
		}
	};
})(); //immediately invoked fucntion expression (IIFE) - denoted by two brakcets after function ()
