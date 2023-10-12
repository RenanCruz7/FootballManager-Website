import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoIntrodutorioComponent } from './texto-introdutorio.component';

describe('TextoIntrodutorioComponent', () => {
  let component: TextoIntrodutorioComponent;
  let fixture: ComponentFixture<TextoIntrodutorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoIntrodutorioComponent]
    });
    fixture = TestBed.createComponent(TextoIntrodutorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
