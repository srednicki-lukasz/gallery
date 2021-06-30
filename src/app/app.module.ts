import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [AppComponent, LayoutComponent, HeaderComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        CoreModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
