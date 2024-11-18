import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-acquisition',
  standalone: true,
  imports: [ CommonModule, MatCardModule ],
  templateUrl: './acquisition.component.html',
  styleUrl: './acquisition.component.scss',
})
export class AcquisitionComponent {
  public codes = [
    { name: 'GPS SV1', detected: true, doppler: -2500, phase: 3 },
    { name: 'GPS SV2', detected: false },
    { name: 'GPS SV3', detected: true, doppler: -2500, phase: 3 },
    { name: 'GPS SV4', detected: false },
    { name: 'GPS SV5', detected: true, doppler: -2500, phase: 3 },
    { name: 'GPS SV6', detected: false },
    { name: 'GPS SV7', detected: true, doppler: -2500, phase: 3 },
    { name: 'GPS SV8', detected: false },
  ];
}
