import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { PhotoService } from '../../services/photo.service';
import { VehicleState } from '../../services/VehicleState';
import { Photo } from '../../models/Photo';

@Component({
  selector: "app-vehicle-photo-editing",
  templateUrl: "./vehicle-photo-editing.component.html",
  styleUrls: ["./vehicle-photo-editing.component.css"]
})
export class VehiclePhotoEditingComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  photos: Photo[];

  constructor(private photoservice: PhotoService, private vehicleState: VehicleState) {}

  ngOnInit() {
    this.photoservice.getPhotos(this.vehicleState.vehicleId).subscribe(x=> {
      this.photos = x;
      console.log(x);
    });
  }

  uploadPhoto() {

    const nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    const vehicleId = this.vehicleState.vehicleId;
    console.log([vehicleId, nativeElement]);
    this.photoservice.uploadFile(vehicleId, nativeElement.files[0])
      .subscribe(x => this.photos.push(x));
  }
}
