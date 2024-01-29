// mock-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TableEntityModel} from "../model/table-entity.model";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor(private http: HttpClient) {

  }

  readonly FILENAME = 'mock.json';

  getData(): Observable<TableEntityModel> {
    return this.loadMockData(this.FILENAME);
  }

  private loadMockData(endpoint: string): Observable<TableEntityModel> {
    return this.http.get<TableEntityModel>(`/assets/mock-data/${endpoint}`);
  }
}
