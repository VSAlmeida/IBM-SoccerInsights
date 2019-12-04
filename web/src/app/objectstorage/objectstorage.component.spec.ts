import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectstorageComponent } from './objectstorage.component';

describe('ObjectstorageComponent', () => {
  let component: ObjectstorageComponent;
  let fixture: ComponentFixture<ObjectstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
