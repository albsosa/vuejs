var app = new Vue({
	el : '#myapp',
	data: {
		primero :0,
		segundo :0,
		tercero :0,
		cuarto :0,
		suma : 0
	},
	//Esta parte se va haciendo el calculo al momento computed:
	computed: {
		total: function(){
			return this.primero + this.segundo + this.tercero + this.cuarto;
		}
	}
})