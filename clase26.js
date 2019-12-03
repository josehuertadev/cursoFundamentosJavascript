class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        /**Se pone de est forma ya que se esta accediendo a los atributos del objeto */
        var { nombre,apellido } = this;
        /**Lo mismo que arriba */
        /*var nombre = this.nombre;
        var apellido = this.apellido;*/
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre,apellido);
        }
    }

    soyAlto(){
        return this.altura > 1.8;
    }

}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura);
    }

    saludar(fn){
        var { nombre,apellido } = this;
        console.log(`Hola me llamo ${nombre} y soy desarrollador`);
        if(fn){
            fn(nombre,apellido,true);
        }
    }
}

function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Y tambien eres desarrollador, genial lml`);
    }
}

var jose = new Persona("Jose","Huerta",1.80);
var arturo = new Desarrollador("Arturo","Garcia",1.80);

jose.saludar();
arturo.saludar(responderSaludo);