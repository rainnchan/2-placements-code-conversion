import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterConversionComponent } from './letter-conversion.component';

describe('LetterConversionComponent', () => {
  let component: LetterConversionComponent;
  let fixture: ComponentFixture<LetterConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterConversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
