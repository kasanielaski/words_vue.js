document.addEventListener("DOMContentLoaded",function(){
	new Vue({
		el:'#app',
		ready: function(){
			var word='Привет';
			var letter=word.split("");
			for (var i = 0; i < letter.length; i++) {
				this.letters.push({
					content:letter[i],
					visible:false
				})
			};
		},
		data: function(){
			return{				
				letters:[],				
			}
		},
		methods: {			
			open: function(letter){
				letter.visible=true;
			},
		},

	});
})	