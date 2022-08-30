import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtusComponent } from './abtus.component';

describe('AbtusComponent', () => {
  let component: AbtusComponent;
  let fixture: ComponentFixture<AbtusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
