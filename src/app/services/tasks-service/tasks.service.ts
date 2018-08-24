import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JsonConvert } from 'json2typescript';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { CommonService } from '../common-service/common.service';
import { ErrorService } from '../error-service/error.service';
import { Task } from '../../models/Task';
import { environment } from '../../../environments/environment';

@Injectable()
export class TasksService {

  constructor(private http: Http, private commonService: CommonService, private errorService: ErrorService) { }

  apiUrl: string = environment.endpoint + '/tasks';

  getAllTasks(): Observable<Array<Task>> {
    return this.http.get(this.apiUrl)
      .map(this.extractTasks.bind(this))
      .catch(this.errorService.handleObservableHttpError);
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get(this.apiUrl + "/" + id)
      .map(this.extractTask.bind(this))
      .catch(this.errorService.handleObservableHttpError);
  }

  createTask(newTask: Task): Observable<Task> {
    return this.http.post(this.apiUrl, newTask)
      .map(this.extractTask.bind(this))
      .catch(this.errorService.handleObservableHttpError);
  }

  updateTask(id: string, updatedTask: Task): Observable<Task> {
    return this.http.put(this.apiUrl + "/" + id, updatedTask)
      .map(this.extractTask.bind(this))
      .catch(this.errorService.handleObservableHttpError);
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete(this.apiUrl + "/" + id)
      .map(this.extractTask.bind(this))
      .catch(this.errorService.handleObservableHttpError);
  }

  /* Common functions */
  extractTasks(resp: Response) {
    return this.commonService.deserializeArray(resp.json(), Task);
  }

  extractTask(resp: Response) {
    return this.commonService.deserialize(resp.json(), Task);
  }
}
