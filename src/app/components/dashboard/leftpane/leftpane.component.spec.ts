import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpaneComponent } from './leftpane.component';

describe('LeftpaneComponent', () => {
  let component: LeftpaneComponent;
  let fixture: ComponentFixture<LeftpaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftpaneComponent]
    });
    fixture = TestBed.createComponent(LeftpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
