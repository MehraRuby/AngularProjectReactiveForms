import { Component ,OnInit} from '@angular/core';
import { FormGroup , FormControl , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Validation } from './validation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



@Component({
  selector: '{}}',
  templateUrl: 'name.component.html'
})

export class AppComponent  implements OnInit {
  title = 'ReactiveFormsExample';

submitted= false

rtform:FormGroup = new FormGroup(
          {
            fullname:new FormControl(),
            username:new FormControl(),
            email:new FormControl(),
            password:new FormControl(),
            confirmpassword:new FormControl()

          })


  constructor(private frmbuilder : FormBuilder)
  { }

  ngOnInit(){

    this.rtform = this.frmbuilder.group({
          fullname:['',Validators.required],

          username:['',Validators.required,Validators.minLength(6),
                          Validators.maxLength(10)],

          email:['',Validators.required,Validators.email],

          password:['',Validators.required,Validators.minLength(6),
          Validators.maxLength(10)],

          confirmpassword:['',Validators.required]
    },
    {
      validators:[Validation.match('password','confirmpassword')]

    }


    )
  }

  get func() : { [key:string] :AbstractControl}
  // return object of all the control names as an abstract group.
  {
    return this.rtform.controls;
  }

  onSubmit()
          {
            this.submitted=true;
            if(this.rtform.invalid)
            {
              return;
            }
          }

}


