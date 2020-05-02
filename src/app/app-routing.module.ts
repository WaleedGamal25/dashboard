import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderBookingComponent } from './calender-booking/calender-booking.component';
import { CalenderDailyComponent } from './calender-daily/calender-daily.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'' , redirectTo:'book', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'book' , component:CalenderBookingComponent},
  {path:'daily' , component:CalenderDailyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
