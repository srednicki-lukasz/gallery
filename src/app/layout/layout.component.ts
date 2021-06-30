import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { GalleryService } from '../core/services/gallery.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	@ViewChild(MatPaginator) paginator: MatPaginator;
    
    /**
     * Is loading?
     * @type {boolean}
     * @memberof LayoutComponent
     */
    public isLoading: boolean;

    /**
     * API response;
     * @type {any}
     * @memberof LayoutComponent
     */
    public response: any;

    /**
     * Current page index.
     * @type {number}
     * @memberof LayoutComponent
     */
    public pageIndex: number = 1;

    /**
     * Number of elements on the page.
     * @type {number}
     * @memberof LayoutComponent
     */
	public pageSize: number = 30;

    /**
     * Total items count.
     * @type {number}
     * @memberof LayoutComponent
     */
	public length: number = 0;

    /**
     * Query.
     * @type {string}
     * @memberof LayoutComponent
     */
    public query: string = 'nature';

    /**
     * Page size options
     * @type {number[]}
     * @memberof LayoutComponent
     */
	public pageSizeOptions: number[] = [5, 10, 20, 30, 50];

	constructor( private gallery: GalleryService ) {}

	ngOnInit(): void {
        this.isLoading = true;

        this.gallery
            .loadImages({ pageIndex: 1, pageSize: 20, query: 'nature' })
            .subscribe(response => {
                this.response = response;
                this.length = this.response.total_results;
                this.isLoading = false;
            })
	}

    /**
     * Change pagination configuration.
     * @param {PageEvent} event
     */
	change(event: PageEvent) {
        this.isLoading = true;
        
        const pageIndex = event.pageIndex + 1;
        const pageSize = event.pageSize;
        const query = this.query;

        this.gallery
            .loadImages({ pageIndex, pageSize, query })
            .subscribe(response => {
                this.response = response;
                this.isLoading = false;
            })
	}
}
