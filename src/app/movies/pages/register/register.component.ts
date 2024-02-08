import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private moviesService = inject(MoviesService);

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })

  register(){

    if(this.myForm.invalid) {
      console.log('form invalido');
      return
    };

    console.log(this.myForm.value)
    const {name,email,password} = this.myForm.value;

    this.moviesService.register(name,email,password)
    .subscribe( success =>{console.log(success);
    })

    this.myForm.reset()
  }
}
