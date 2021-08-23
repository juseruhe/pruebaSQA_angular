import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SQAComponent } from './sqa.component';

describe('SQAComponent', () => {
  let component: SQAComponent;
  let fixture: ComponentFixture<SQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SQAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
