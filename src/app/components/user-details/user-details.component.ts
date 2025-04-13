import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { of, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User | null = null;
  isLoading = false;
  error: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    this.isLoading = true;
    this.error = null;

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService
        .getUserById(+userId)
        .pipe(
          catchError((err) => {
            this.error = 'Failed to load user details';
            return of(null);
          }),
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((user) => {
          this.user = user;
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onBack(): void {
    this.router.navigate(['/']);
  }
}
