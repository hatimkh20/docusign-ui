import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocusignService } from '../services/docusign.service';

@Component({
  selector: 'app-esignature',
  templateUrl: './esignature.component.html',
  styleUrls: ['./esignature.component.css']
})
export class EsignatureComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit(): void {
		console.log('DocuSign Page Called');
		this.route.queryParams.subscribe(params => {
			const code = params['code'];
			console.log(code, 'Code');
      setTimeout(() => {
				this.router.navigate(['/']); 
			}, 1000);
		});
	}

}
