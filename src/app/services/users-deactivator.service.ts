import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersDeactivatorService implements CanDeactivate<any>{

  constructor() {

  }
  canDeactivate(): boolean {
    return confirm('Leave from users page?')
  }
}
