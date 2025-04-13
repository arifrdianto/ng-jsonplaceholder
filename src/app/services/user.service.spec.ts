import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have a getUsers method', () => {
    expect(service.getUsers).toBeDefined();
  });
  it('should have a getUserById method', () => {
    expect(service.getUserById).toBeDefined();
  });
  it('should return an observable from getUsers', () => {
    const users = service.getUsers();
    expect(users).toBeDefined();
    expect(users.subscribe).toBeDefined();
  });
  it('should return an observable from getUserById', () => {
    const userId = 1;
    const user = service.getUserById(userId);
    expect(user).toBeDefined();
    expect(user.subscribe).toBeDefined();
  });
  it('should return an observable from getUserById with a specific id', () => {
    const userId = 1;
    const user = service.getUserById(userId);
    expect(user).toBeDefined();
    expect(user.subscribe).toBeDefined();
    user.subscribe((data) => {
      expect(data.id).toEqual(userId);
    });
  });
  it('should return an observable from getUsers with a specific length', () => {
    const users = service.getUsers();
    expect(users).toBeDefined();
    expect(users.subscribe).toBeDefined();
    users.subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
  it('should return an observable from getUserById with a specific name', () => {
    const userId = 1;
    const user = service.getUserById(userId);
    expect(user).toBeDefined();
    expect(user.subscribe).toBeDefined();
    user.subscribe((data) => {
      expect(data.name).toBeDefined();
      expect(data.name.length).toBeGreaterThan(0);
    });
  });
  it('should return an observable from getUsers with a specific name', () => {
    const users = service.getUsers();
    expect(users).toBeDefined();
    expect(users.subscribe).toBeDefined();
    users.subscribe((data) => {
      expect(data[0].name).toBeDefined();
      expect(data[0].name.length).toBeGreaterThan(0);
    });
  });
  it('should return an observable from getUserById with a specific email', () => {
    const userId = 1;
    const user = service.getUserById(userId);
    expect(user).toBeDefined();
    expect(user.subscribe).toBeDefined();
    user.subscribe((data) => {
      expect(data.email).toBeDefined();
      expect(data.email.length).toBeGreaterThan(0);
    });
  });
  it('should return an observable from getUsers with a specific email', () => {
    const users = service.getUsers();
    expect(users).toBeDefined();
    expect(users.subscribe).toBeDefined();
    users.subscribe((data) => {
      expect(data[0].email).toBeDefined();
      expect(data[0].email.length).toBeGreaterThan(0);
    });
  });
  it('should return an observable from getUserById with a specific phone', () => {
    const userId = 1;
    const user = service.getUserById(userId);
    expect(user).toBeDefined();
    expect(user.subscribe).toBeDefined();
    user.subscribe((data) => {
      expect(data.phone).toBeDefined();
      expect(data.phone.length).toBeGreaterThan(0);
    });
  });
  it('should return an observable from getUsers with a specific phone', () => {
    const users = service.getUsers();
    expect(users).toBeDefined();
    expect(users.subscribe).toBeDefined();
    users.subscribe((data) => {
      expect(data[0].phone).toBeDefined();
      expect(data[0].phone.length).toBeGreaterThan(0);
    });
  });
});
