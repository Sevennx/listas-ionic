import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RangerPage } from './ranger.page';

describe('RangerPage', () => {
  let component: RangerPage;
  let fixture: ComponentFixture<RangerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
