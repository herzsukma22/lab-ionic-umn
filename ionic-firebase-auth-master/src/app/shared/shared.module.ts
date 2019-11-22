import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModelComponent } from './map-model/map-model.component';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [LocationPickerComponent, MapModelComponent],
  imports: [
    CommonModule, 
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: '${environment.mapsAPIKey}'
    })
  ],
  exports: [LocationPickerComponent, MapModelComponent],
  entryComponents: [MapModelComponent]
})
export class SharedModule { }
