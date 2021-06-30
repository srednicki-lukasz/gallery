import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    /**
     * Emit keyup event.
     * @type {EventEmitter<any>}
     * @memberof HeaderComponent
     */
    @Output() inputEvent: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Current query.
     * @type {string}
     * @memberof HeaderComponent
     */
    @Input() currentQuery: string;
    
	constructor() {}

	ngOnInit(): void {}
}
