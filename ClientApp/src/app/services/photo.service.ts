import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Photo } from '../models/Photo';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

    uploadFile(vehicleId, photo): Observable<Photo>{
      const formData = new FormData();
      formData.append('file', photo);

      return this.http.post(`/api/vehicles/${vehicleId}/photos`, formData)
        .map(x=>x.json());
    }

    getPhotos(vehicleId): Observable<Photo[]> {
      return this.http.get(`/api/vehicles/${vehicleId}/photos`)
        .map(x=>x.json());
    }
 }
