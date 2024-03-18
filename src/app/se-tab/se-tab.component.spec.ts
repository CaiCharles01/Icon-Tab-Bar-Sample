import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeTabComponent } from './se-tab.component';

describe('SeTabComponent', () => {
  let component: SeTabComponent;
  let fixture: ComponentFixture<SeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
