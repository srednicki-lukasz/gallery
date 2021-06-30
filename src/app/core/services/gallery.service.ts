import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadImagesRequest } from '../interfaces/load-images-request.interface';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class GalleryService {
	/**
	 * Pexels API key.
	 * @type {string}
	 * @memberof GalleryService
	 */
	private API_KEY: string = environment.pexels.key;

	constructor(private http: HttpClient) {}

	/**
	 * Get images.
	 * @memberof GalleryService
	 */
	loadImages(data: LoadImagesRequest): Observable<any> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: this.API_KEY,
		});

		const params = new HttpParams()
			.set('query', `${data.query}`)
			.set('page', `${data.pageIndex}`)
			.set('per_page', `${data.pageSize}`);

		return this.http
			.get<any>(`https://api.pexels.com/v1/search/`, { headers, params })
			.pipe(catchError((error) => throwError(error)));
	}
}
