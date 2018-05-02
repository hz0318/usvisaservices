import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ReservationComponent} from './reservation/reservation.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {HowtoarriveComponent} from './howtoarrive/howtoarrive.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'arrive', component: HowtoarriveComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'reservation', component: ReservationComponent},
  // {path: 'map', component: MapComponent},
  // {path: 'overview', component: OverviewComponent},
  // {path: 'overview/:exp', component: SiteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    } ],
})
export class AppRoutingModule {
}
