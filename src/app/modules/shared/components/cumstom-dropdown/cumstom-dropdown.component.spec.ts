import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumstomDropdownComponent } from './cumstom-dropdown.component';

describe('CumstomDropdownComponent', () => {
  let component: CumstomDropdownComponent;
  let fixture: ComponentFixture<CumstomDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CumstomDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumstomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
