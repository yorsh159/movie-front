import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  private fb = inject(FormBuilder);
  private moviesService = inject(MoviesService);

  public myForm:FormGroup = this.fb.group({
    name:['',Validators.required],
    genre:['Select category',Validators.required],
    year:['',Validators.required],
  })

  newMovie(){
    
    const {name,genre,year} = this.myForm.value;

    this.moviesService.newMovie(name,genre,year)
    .subscribe( success =>{console.log(success);
    })
  
    
  }

}
