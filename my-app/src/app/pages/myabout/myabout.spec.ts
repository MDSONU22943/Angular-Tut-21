import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myabout } from './myabout';

describe('Myabout', () => {
  let component: Myabout;
  let fixture: ComponentFixture<Myabout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myabout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myabout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
