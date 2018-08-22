var app = new Vue({
	el : '#app',
	data: {
		titulo : 'Lista de Tareas', 
		tareas : [
			{
				texto: 'Aprender Vue.js',
				terminada: false
			},
			{
				texto: 'Ponerme a trabajar',
				terminada: false
			},
			{
				texto: 'Irme a dormir ',
				terminada: false
			}
		], 
		//Se crea una nueva propiedad
		nuevaTarea: ''

	},
	methods: {
		agregarTarea: function(){
			var texto = this.nuevaTarea.trim();
			if(texto){
				//para poder agregar la tarea al  arreglo se necesita el push 
				this.tareas.push({
					texto: texto,
					terminada: false
				})
			}
			this.nuevaTarea= ''
		},
		borrar: function(indice){
			this.tareas.splice(indice,1)
		}
	}
})