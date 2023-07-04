import { Component } from '@angular/core';
import { DocusignService } from '../services/docusign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private readonly docusignApiService: DocusignService) {}
  
  openDocuSignLogin() {
		this.docusignApiService.docuSignLogin();	
	}

}
