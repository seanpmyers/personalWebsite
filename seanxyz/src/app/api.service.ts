import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Run } from './Classes/run';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiURL: string = 'https://localhost:5001/api';

 // Http Headers
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateBug(data): Observable<Run> {
    return this.httpClient.post<Run>(this.apiURL + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  GetIssue(id): Observable<Run> {
    return this.httpClient.get<Run>(this.apiURL + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetIssues(): Observable<Run> {
    return this.httpClient.get<Run>(this.apiURL + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateRun(id, data): Observable<Run> {
    return this.httpClient.put<Run>(this.apiURL + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteRun(id){
    return this.httpClient.delete<Run>(this.apiURL + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

  constructor(private httpClient: HttpClient) { }
}
