import { Component } from '@angular/core';
import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Progressive Web Cat';
}
