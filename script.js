var app = new Vue({
    el: "#app",
    data: {
        nuevoId: null,
        nuevoNombre: "",
        productos: [
            { "id": 1, "nombre": "ps4", "cantidad": 1, "precio": 100 },
            { "id": 2, "nombre": "xbox", "cantidad": 1, "precio": 100 },
            { "id": 3, "nombre": "pc", "cantidad": 1, "precio": 100 },
        ],
        total: 0
    },
    methods: {
        comprobarExiste() {
            for (var i = 0; i < this.productos.length; i++) {
                var producto = this.productos[i];

                if (producto.id === this.nuevoId) {
                    return true;
                }
            }

            return false;
        },

        addNombre() {
            if (!this.comprobarExiste()) {
                this.productos.push({ "id": this.nuevoId, "nombre": this.nuevoNombre, "cantidad": 1, "precio": 100 });
                this.calcularPrecio();
            }
        },
        aumentarCantidad(index) {
            this.productos[index].cantidad++;
            this.calcularPrecio();
        },
        disminuirCantidad(index) {
            this.productos[index].cantidad--;

            if (this.productos[index].cantidad === 0) {
                this.productos.splice(index, 1);
            }

            this.calcularPrecio();
        },
        calcularPrecio() {
            this.total = 0;
            this.productos.forEach((producto) => {
                this.total += producto.precio * producto.cantidad;
            });
        }
    }
});