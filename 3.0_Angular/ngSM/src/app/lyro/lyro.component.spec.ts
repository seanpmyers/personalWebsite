import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyroComponent } from './lyro.component';

describe('LyroComponent', () => {
  let component: LyroComponent;
  let fixture: ComponentFixture<LyroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
