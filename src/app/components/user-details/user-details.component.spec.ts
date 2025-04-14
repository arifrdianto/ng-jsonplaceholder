import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponent],
      providers: [
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'id') return '1';
                  return null;
                },
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a user property', () => {
    expect(component.user).toBeDefined();
  });
  it('should have a isLoading property', () => {
    expect(component.isLoading).toBeDefined();
  });
  it('should have a error property', () => {
    expect(component.error).toBeDefined();
  });
  it('should have a loadUserDetails method', () => {
    expect(component.loadUserDetails).toBeDefined();
  });
  it('should have a onBack method', () => {
    expect(component.onBack).toBeDefined();
  });
  it('should call loadUserDetails on ngOnInit', () => {
    spyOn(component, 'loadUserDetails');
    component.ngOnInit();
    expect(component.loadUserDetails).toHaveBeenCalled();
  });
  it('should set isLoading to true when loadUserDetails is called', () => {
    component.loadUserDetails();
    expect(component.isLoading).toBeTrue();
  });
});
