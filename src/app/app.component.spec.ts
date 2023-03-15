import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set ageGroup to "Invalid age" if age is less than 0', () => {
    component.age = -1;
    component.checkAge();
    expect(component.ageGroup).toEqual('Invalid age');
  });
  
  it('should set ageGroup to "Foetus Infancy" if age is less than 1', () => {
    component.age = 0;
    component.checkAge();
    expect(component.ageGroup).toEqual('Foetus Infancy');
  });
});        