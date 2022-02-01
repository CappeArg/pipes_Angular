import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre      :  string  ='Pablo Cappellacci';
  nombre2     :  string  = 'pAblo CaPPeLLaCCi'
  arreglo     :  string[]=["Punki","Sofia","Francisca","Pablo","Andino","Rosario"];
  pi          :  number  = Math.PI;
  porcentaje  :  number  =0.234;
  salario     :  number  =1234.5;
  idioma      :  string  ='es';
  videourl    :  string = "https://www.youtube.com/embed/IY3pSTTuFLs";

  persona     :  any     ={
    nombre:'Pablo',
    clave:'Cappe',
    edad: 32,
    direccion:{
      calle:'Italia',
      numero: 928
    }
  }
  fecha       : Date     = new Date();
  activar     : boolean  = true;
  valorPromesa  = new Promise<string>((resolve)=>{

    setTimeout(()=>{
    resolve('llego la información');
    },4500);    

  });

}
