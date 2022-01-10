import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "src/app/auth/store/actions/register.action";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    })

    console.log(this.form.valid)
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value))
  }
}
