import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserAccountPage } from './create-user-account.page';

describe('CreateUserAccountPage', () => {
  let component: CreateUserAccountPage;
  let fixture: ComponentFixture<CreateUserAccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateUserAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
