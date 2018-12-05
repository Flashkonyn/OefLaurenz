import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Report } from "../models/report.model";
import { ReportService } from "../services/report.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  reports: Report[];
  reportsAsyncPipe: Observable<Report[]>;

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.getReports();
    //this.getReportsAsyncPipe();
    this.reportsAsyncPipe = this.reportService.getReportsAsyncPipe();
  }

  async getReports() {
    await this.reportService.getReports().then(reports => {
      this.reports = reports;
    });
  }
}
