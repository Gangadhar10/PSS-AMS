import { Route } from '@angular/router';
import { AmsComponent } from './index';
import { AmshomeRoutes } from './amshome/index';
import { EDITPLANTComponentRoutes } from './editplant/editplant.route';
import { SysteminfoComponentRoutes } from './systeminformation/systeminformation.route';
import {HelpComponentRoutes } from './help/help.route'
export const AmsRoutes: Route[] = [
	{
		path: 'ams',
		component: AmsComponent,
		children: [
			...AmshomeRoutes,
			...EDITPLANTComponentRoutes,
			...SysteminfoComponentRoutes,
			...HelpComponentRoutes
		]
	}
];
