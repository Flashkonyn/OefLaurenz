import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportComponent } from "./report/report.component";
import { ReportDetailComponent } from "./report-detail/report-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/report", pathMatch: "full" },
  { path: "detail/:_id", component: ReportDetailComponent },
  { path: "report", component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
