import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a users property', () => {
    expect(component.users).toBeDefined();
  });
  it('should have a isLoading property', () => {
    expect(component.isLoading).toBeDefined();
  });
  it('should have a error property', () => {
    expect(component.error).toBeDefined();
  });
  it('should have a loadUsers method', () => {
    expect(component.loadUsers).toBeDefined();
  });
  it('should have a onViewDetails method', () => {
    expect(component.onViewDetails).toBeDefined();
  });
  it('should call loadUsers on ngOnInit', () => {
    spyOn(component, 'loadUsers');
    component.ngOnInit();
    expect(component.loadUsers).toHaveBeenCalled();
  });
  it('should set isLoading to true when loadUsers is called', () => {
    component.loadUsers();
    expect(component.isLoading).toBeTrue();
  });
  it('should set isLoading to false when loadUsers is called', () => {
    component.loadUsers();
    expect(component.isLoading).toBeFalse();
  });
  it('should set error to null when loadUsers is called', () => {
    component.loadUsers();
    expect(component.error).toBeNull();
  });
  it('should set users to an empty array when loadUsers is called', () => {
    component.loadUsers();
    expect(component.users).toEqual([]);
  });
  it('should call onViewDetails when a user is clicked', () => {
    const userId = 1;
    spyOn(component, 'onViewDetails');
    component.onViewDetails(userId);
    expect(component.onViewDetails).toHaveBeenCalledWith(userId);
  });
  it('should set error to "Failed to load users" when loadUsers fails', () => {
    component.loadUsers();
    expect(component.error).toEqual('Failed to load users');
  });
  it('should set users to an empty array when loadUsers fails', () => {
    component.loadUsers();
    expect(component.users).toEqual([]);
  });
  it('should set isLoading to false when loadUsers fails', () => {
    component.loadUsers();
    expect(component.isLoading).toBeFalse();
  });
});
