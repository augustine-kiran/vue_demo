const app = new Vue({
	el: '#app',
	data: {
		errors   : [],
		email    : null,
		password : null,
	},
	methods: {
		checkForm: function (e) {
			this.errors = [];
			if(!this.email) {
				this.errors.push('E-mail required!');
			}
			else if(!this.validEmail(this.email)) {
				this.errors.push('Valid e-mail required!');
			}
			if(!this.password) {
				this.errors.push('Password required!');
			}
			if(!this.errors.length) {
				return true;
			}
			e.preventDefault();
		},
		validEmail: function(email) {
			var response = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return response.test(email);
		},
		setCookie: function()
		{
			localStorage.email = this.email;
		},
	},
});