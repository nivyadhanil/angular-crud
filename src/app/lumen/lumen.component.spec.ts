import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumenComponent } from './lumen.component';

describe('LumenComponent', () => {
  let component: LumenComponent;
  let fixture: ComponentFixture<LumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
