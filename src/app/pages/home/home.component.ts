import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private hero:HeroService){

  }
  todo:any
  ngOninit(){
this.hero.getdata().subscribe(data=>
{
  this.todo=data;
})

  console.log(this.todo);
  }
  updateitem(id:any){
    

  }
  deleteitem(id:any){
    this.todo=this.todo.filter((todo:any)=>this.todo.id !=id)

  }

}