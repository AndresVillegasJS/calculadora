import { Component } from "@angular/core";

@Component ({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    
})

export class PersonasComponent{


    deshabilitar = false;
    mensaje = 'Aun no presionas el boton'
    titulo = '';

    agregarPersona(){
        this.mensaje="Persona agregada"
    }
        //Event binding
    // modificarTitulo(event: Event){
    //     console.log('entrando a metodo modificar titulo') ;
    //     this.titulo =(<HTMLInputElement> event.target).value; 
    // }
}