import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TogglesPage } from './toggles.page';

describe('TogglesPage', () => {
  let component: TogglesPage;
  let fixture: ComponentFixture<TogglesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TogglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
