import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataTableModule, DropdownModule,CalendarModule,ButtonModule,DialogModule } from 'primeng/primeng';
import {SelectItem} from 'primeng/api';

@Component({
    selector: 'ams-home',
    templateUrl: './amshome.component.html',
})
export class AmshomeComponent implements OnInit {
    sales: any[];
    Application: SelectItem[];
    Usernames:SelectItem[];
    selectedCar: string;
    selectedCar2: string ;
    display: boolean = false;
    constructor(private titleService: Title) {
        this.titleService.setTitle('PSS-AMS');
        this.Application = [
            {label: 'AMS', value: 'Audi'},
            {label: 'RCC', value: 'BMW'},
            {label: 'QRS', value: 'Fiat'},
            {label: 'AWS', value: 'Ford'},
            {label: 'AAA', value: 'Honda'},
            {label: 'SWS', value: 'Jaguar'},
            {label: 'SED', value: 'Mercedes'},
            {label: 'SRD', value: 'Renault'},
            {label: 'DER', value: 'VW'},
            {label: 'FRD', value: 'Volvo'},
        ];
        this.Usernames = [
            {label: 'alivigi001', value: 'Audi'},
            {label: 'corbifr001', value: 'BMW'},
            {label: 'ex1chiguru', value: 'Fiat'},
            {label: 'ex2naiduam', value: 'Ford'},
            {label: 'ex3umamahe', value: 'Honda'},
            {label: 'ex4carrign', value: 'Jaguar'},
            {label: 'ex5ranjith', value: 'Mercedes'},
            {label: 'ex6umesham', value: 'Renault'},
            {label: 'ex7ramkris', value: 'VW'},
            {label: 'ex8srinuva', value: 'Volvo'},
        ];
    }

    ngOnInit() {
       
        this.sales = [
            { Application: 'AMS', Username: 'alivigi001', enabled: '40%', Lastlogindate: '$54,406.00', Logincount : '3',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis'},
            { Application: 'RCC', Username: 'corbifr001', enabled: '96%', Lastlogindate: '$423,132',   Logincount : '2',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis'},
            { Application: 'QRS', Username: 'ex1chiguru', enabled: '55%', Lastlogindate: '$12,321',    Logincount : '1',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'AWS', Username: 'ex2naiduam', enabled: '22%', Lastlogindate: '$745,232',   Logincount : '3',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'AAA', Username: 'ex3umamahe', enabled: '79%', Lastlogindate: '$643,242',   Logincount : '4',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'SWS', Username: 'ex4carrign', enabled: '65%', Lastlogindate: '$421,132',   Logincount : '5',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'SED', Username: 'ex5ranjith', enabled: '12%', Lastlogindate: '$131,211',   Logincount : '4',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'SRD', Username: 'ex6umesham', enabled: '45%', Lastlogindate: '$66,442',    Logincount : '5',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'DER', Username: 'ex7ramkris', enabled: '56%', Lastlogindate: '$765,442',   Logincount : '2',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'FRD', Username: 'ex8srinuva', enabled: '54%', Lastlogindate: '$21,212',    Logincount : '7',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'FRD', Username: 'ex9srinuva', enabled: '54%', Lastlogindate: '$21,212',    Logincount : '7',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' },
            { Application: 'FRD', Username: 'ex10srinuva', enabled: '54%', Lastlogindate: '$21,212',   Logincount : '7',RecordCreatedby:'Gangadhar',RecordModifiedby:'Francis' }
        ];
    }
    showDialog() {
        this.display = true;
    }
}