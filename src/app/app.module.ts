import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Chart, ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { IgxAccordionModule,IgxSwitchModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//I keep the new line

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployeComponent } from './employe/employe.component';
import { VolComponent } from './vol/vol.component';
import { GuideComponent } from './guide/guide.component';


//I keep the new line

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		EmployeComponent,
		VolComponent,
		GuideComponent
	],

	entryComponents: [],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ChartModule,
		HighchartsChartModule,
		BrowserAnimationsModule,
    IgxAccordionModule,
    IgxSwitchModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
