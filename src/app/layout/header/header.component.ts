import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    /**
     * Emit keyup event.
     * @memberof HeaderComponent
     */
    @Output() inputEvent = new EventEmitter();
    
	constructor() {}

	ngOnInit(): void {}
}
