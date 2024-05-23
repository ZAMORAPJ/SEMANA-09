import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {  // Cambiado de async a waitForAsync para claridad
    TestBed.configureTestingModule({
      imports: [FormsModule],  // FormsModule es necesario para los tests con ngModel
      declarations: [LoginComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Mueve detectChanges aquí para inicializar el componente una vez
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind email and password fields to component model', () => {
    const emailInput = fixture.debugElement.nativeElement.querySelector('#exampleInputEmail1');
    const passwordInput = fixture.debugElement.nativeElement.querySelector('#exampleInputPassword1');
  
    emailInput.value = 'test@example.com';
    passwordInput.value = '12345';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();  // Asegúrate de detectar los cambios después de modificar los inputs
  
    expect(component.email).toEqual('test@example.com');
    expect(component.password).toEqual('12345');
  });
  
  it('should call login method when form is submitted', () => {
    spyOn(component, 'login');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
  
    expect(component.login).toHaveBeenCalled();
  });
  it('should call login method when submit button is clicked', () => {
    spyOn(component, 'login');
    const button = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    button.click();
  
    expect(component.login).toHaveBeenCalled();
  });
  
});


