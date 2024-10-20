import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  items = ["blue" , "red" , "green"]
  input_data = ''
  mode = 'list'
  affich = ['']
  index? : number
  add(){
    if(this.input_data != ''){
      this.items.push(this.input_data)
    }
  }
  change(){
    if(this.mode == "list"){
      this.mode = "random"
    }
    else{
      this.mode = "list"
    }
    console.log(this.mode)
  }
  afficher(){
    if(this.mode == "random"){
      let rd = Math.floor(Math.random() * this.items.length)
      this.affich = [this.items[rd]]
    }
    else{
      this.affich = this.items
    }
  }
  ngOnInit(){
    this.afficher()
  }
  supprimer(item : string){
    this.index = this.items.indexOf(item)
    this.items.splice(this.index , 1)
  }
}
