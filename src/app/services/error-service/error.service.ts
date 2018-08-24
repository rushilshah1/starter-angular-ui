import { Injectable } from '@angular/core';
import { ABError } from '../../models/ABError';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorService {

  constructor() { }

  handleObservableHttpError(response: Response): Observable<any> {
    let responseBody = response['_body'];
    if (typeof responseBody !== 'object')
      try { responseBody = JSON.parse(responseBody); }
      catch (e) { /* not a json object, dont worry about it*/ }

    const errRep = (responseBody) ? responseBody : response;
    const err: ABError = new ABError(errRep);
    return Observable.throw(err);
  }

}
