import { Component, OnInit} from '@angular/core';
import { profesorBase } from '../Models/alumnos'
import { alumnosBD } from '../Models/alumnos'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{
  public nombreProfesor: string
  public fotoProfesor: string
  public alumnosAll: Array<alumnosBD>
  public correosEle: string[]
  public notaAlumno: number
  public Nota: number
  public registrado: boolean

   constructor(){
    this.registrado = false
    this.notaAlumno = 5
    this.correosEle = new Array()
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor = profesorBase.foto
    

    this.alumnosAll = [
      new alumnosBD("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","./assets/media/fotommp.jpg", true, 6), 
    ]

    this.Nota = 0
   }
   ngOnInit(): void {
     console.log(this.alumnosAll)

     this.getcorreosEle()
   }

   getcorreosEle(){
    this.alumnosAll.forEach((correoAlumno, index) => {
      this.correosEle.push(correoAlumno.correoA)
      console.log(index)
    })
    console.log(this.correosEle)
   }

   setRegistrado(){
    this.registrado = true
   }
    unsetRegistrado(){
    this.registrado = false
   }

   
}
