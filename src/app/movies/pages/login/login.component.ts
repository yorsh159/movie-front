import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  public myForm:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })

  login(){
    if(this.myForm.invalid) {
      console.log('form invalido');
      
      return
    };

    console.log(this.myForm.value)
    
  }

}
