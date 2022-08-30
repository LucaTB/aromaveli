import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmoComponent } from './almo.component';

describe('AlmoComponent', () => {
  let component: AlmoComponent;
  let fixture: ComponentFixture<AlmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
