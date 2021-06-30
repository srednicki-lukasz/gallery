import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryService } from './services/gallery.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [GalleryService],
})
export class CoreModule {}
