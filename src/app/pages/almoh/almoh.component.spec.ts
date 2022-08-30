import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohComponent } from './almoh.component';

describe('AlmohComponent', () => {
  let component: AlmohComponent;
  let fixture: ComponentFixture<AlmohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
