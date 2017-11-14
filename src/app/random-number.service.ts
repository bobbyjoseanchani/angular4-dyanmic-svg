import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class RandomNumberService {
  private randomNumberURL = 'https://qrng.anu.edu.au/API/jsonI.php'	
	
  constructor(private http: HttpClient) { }
  
  getRandomNumber(): Observable<any> {
	let myParams = new HttpParams().set('length', '1').set('type', 'uint8');
	return this.http.get(this.randomNumberURL, {params: myParams})
	  .pipe(
		catchError(this.handleError('getRandomNumber', [])
	  ));
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
	  return of(result as T);
    };
  }

  
}
