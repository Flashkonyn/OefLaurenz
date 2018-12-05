import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Report } from "../models/report.model";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  private url: string = "https://thereportoftheweek-api.herokuapp.com/reports";

  constructor(private httpClient: HttpClient) {}

  getReportsAsyncPipe(): Observable<Report[]> {
    return this.httpClient.get<Report[]>(this.url);
  }

  getReports(): Promise<Report[]> {
    return this.httpClient
      .get(this.url, {
        observe: "response",
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
      .toPromise()
      .then(this.extractData)
      .catch(err => {
        return Promise.reject(err.error || "Server error");
      });
  }

  extractData(res: HttpResponse<Object>) {
    var array = new Array();
    var key,
      count = 0;
    for (key in res.body) {
      array.push(res.body[count++]);
    }
    return array;
  }
}
