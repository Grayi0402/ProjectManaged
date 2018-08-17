import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class HttpGetService {

	constructor(
		private _httpClient: HttpClient
	) { }
	 getAll(api :string, obj: Object):Observable<HttpResponse<Object[]>>{
	return this._httpClient.get<Object[]>(api,{observe:"response"}).pipe(catchError(this.errorHandle));


  }

  errorHandle(error: HttpErrorResponse){
	return throwError(error.message || "Serve Error");
  }
}
