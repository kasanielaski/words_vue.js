/* eslint no-new:0 */
/* global document, Vue */
document.addEventListener('DOMContentLoaded', () => {
	Vue.component('letter', {
		template: `<div class="letter" @click="open">
				<div class="letter-content" v-show="visible">
					{{content}}
				</div>
			</div>`,
		data() {
			return {
				visible: false
			};
		},
		props: ['content'],
		methods: {
			open() {
				if (!this.visible) {
					this.visible = true;
					this.$emit('opened');
				}
			}
		}
	});

	Vue.component('user-input', {
		template: `<div>
				<p>Введите слово: <input autofocus v-model='inputedWord'><button @click='inputWord'>Click!</button>
			</div>`,
		data() {
			return {
				inputedWord: ''
			};
		},
		methods: {
			inputWord() {
				this.$emit('inputed', this.inputedWord);
			}
		}
	});

	new Vue({
		el: '#app',
		ready() {
			const defaultWord = 'Lorem';
			this.letters = defaultWord.split('');
		},
		methods: {
			onOpened() {
				this.counter += 1;
			},
			onInput(data) {
				this.letters = data.split('');
				this.counter = 0;
			}
		},
		data() {
			return {
				letters: [],
				counter: 0
			};
		}
	});
});
