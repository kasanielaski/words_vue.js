document.addEventListener("DOMContentLoaded",function(){
	Vue.component('letter',{
		data: function(){
			return{
				visible:false				
			}
		},
		template:'<div class="letter" v-on:click="open"><div class="letter-content" v-show="visible">\
		{{content}}</div></div>',
		props:['content'],
		methods:{
			open:function(){
				if(!this.visible){
					this.visible=true;
					this.$emit('opened');
				}
			}
		}
	})
	new Vue({
		el:'#app',
		ready: function(){
			var word='Привет';
			this.letters=word.split("");			
		},
		methods:{			
			onOpened:function(){				
				this.counter++;
			}
		},
		data: function(){
			return{
				letters:[],
				counter:0			
			}
		}
	});
})	