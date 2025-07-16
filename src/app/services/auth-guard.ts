import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}