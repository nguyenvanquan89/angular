import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConponentCliComponent } from './conponent-cli.component';

describe('ConponentCliComponent', () => {
  let component: ConponentCliComponent;
  let fixture: ComponentFixture<ConponentCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConponentCliComponent]
    });
    fixture = TestBed.createComponent(ConponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
