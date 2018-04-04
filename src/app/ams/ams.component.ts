import { Component } from "@angular/core";
import { AmshomeComponent } from "./amshome/amshome.component"
import { Router } from '@angular/router';

@Component({
	selector: 'amc-cmp',
	templateUrl: 'ams.component.html'
})

export class AmsComponent {

	constructor(
		public router: Router) {
	}

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		this.router.navigate(['ams/amshome']);
	}
}