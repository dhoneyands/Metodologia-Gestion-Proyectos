// Clase genérica constructora con los atributos señalados
class miClase{
    constructor(foo,bar,lorem){
        this.foo = foo;
        this.bar = bar;
        this.lorem = lorem;
    }

}

// Clase A
const ClaseA = new miClase ("Clase A foo","Clase A bar","Clase A lorem");

// Clase B
const ClaseB = new miClase ("Clase B foo", "Clase B bar");

//Clase C
const ClaseC = new miClase ("Clase C foo", "Clase C bar");
