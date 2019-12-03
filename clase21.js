function Persona(nombre,apellido,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

/**Las funciones del prototipo o la clase se deben definir en en inicio, ya que si se definen despues va a generar error */

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.8;
}

var jose = new Persona("Jose","Huerta",1.80)
jose.saludar();