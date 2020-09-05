<<<<<<< HEAD
 import { Injectable } from '@angular/core';
=======
import { Injectable } from '@angular/core';
>>>>>>> 43f05787e008430f674417c5138ac4f3190771ca
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    pageNumber = 1;
    pageSize = 5;

    constructor(private userService: UserService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(router: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
