import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaTitleComponent } from './biblioteca-title.component';

describe('BibliotecaTitleComponent', () => {
  let component: BibliotecaTitleComponent;
  let fixture: ComponentFixture<BibliotecaTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaTitleComponent]
    });
    fixture = TestBed.createComponent(BibliotecaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
