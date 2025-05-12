import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
http = inject(HttpClient)
  getVeiculos(){
this.http.get("http://localhost:3001/vehicles")
  }

  getVinInfos() {

   }
}
