import { Component, OnInit, ElementRef, ViewChild, NgZone } from "@angular/core";
import { PhotoService } from '../../services/photo.service';
import { VehicleState } from '../../services/VehicleState';
import { Photo } from '../../models/Photo';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: "app-vehicle-photo-editing",
  templateUrl: "./vehicle-photo-editing.component.html",
  styleUrls: ["./vehicle-photo-editing.component.css"]
})
export class VehiclePhotoEditingComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  photos: Photo[];
  progress: any = { total: 0, percentage: 0 };

  constructor(private photoservice: PhotoService, 
    private vehicleState: VehicleState,
    private progressService: ProgressService,
    private zone: NgZone) {}

  ngOnInit() {
    this.photoservice.getPhotos(this.vehicleState.vehicleId).subscribe(x=> {
      this.photos = x;
      console.log(x);
    });
  }

  uploadPhoto() {

    const nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    const vehicleId = this.vehicleState.vehicleId;

    this.progressService.startTracking()
      .subscribe(x=>
        this.zone.run(() => this.progress = x),
        null,
        () => this.progress = null);

    this.photoservice.uploadFile(vehicleId, nativeElement.files[0])
      .subscribe(x => this.photos.push(x));
  }
}
