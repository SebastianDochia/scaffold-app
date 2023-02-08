import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-selected-date-container',
  templateUrl: './selected-date-container.component.html',
  styleUrls: ['./selected-date-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedDateContainerComponent implements OnInit {
  @Input() selected: null | Date = null;

  constructor() { }

  ngOnInit() {
  }

}
