import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinitScrollPage } from './infinit-scroll.page';

describe('InfinitScrollPage', () => {
  let component: InfinitScrollPage;
  let fixture: ComponentFixture<InfinitScrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfinitScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
