import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class DocusignService {
	private readonly _docusignUrl =  '/esign';

	constructor(private http: HttpClient) {}

	docuSignLogin() {
		const url = `http://localhost:8091/api/v1/esign/login`;
		this.http.get(url, { responseType: 'text' }).subscribe((url: string) => {
			window.location.href = url; // redirect the user to the received URL
		});
	}
}