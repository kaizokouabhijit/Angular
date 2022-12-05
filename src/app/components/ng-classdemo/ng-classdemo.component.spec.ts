import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassdemoComponent } from './ng-classdemo.component';

describe('NgClassdemoComponent', () => {
  let component: NgClassdemoComponent;
  let fixture: ComponentFixture<NgClassdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
