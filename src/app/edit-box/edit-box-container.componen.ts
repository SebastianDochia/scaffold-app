import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'eb-edit-box',
  templateUrl: './edit-box-container.component.html',
  styleUrls: ['./edit-box-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBoxComponent implements OnInit {
  dates: Array<Date> = [new Date(2023, 3, 16),];

  ngOnInit() {
  }

  removeDate(date: Date) {
    const index = this.dates.indexOf(date);

    if (index >= 0) {
      this.dates.splice(index, 1);
    }
  }

}
