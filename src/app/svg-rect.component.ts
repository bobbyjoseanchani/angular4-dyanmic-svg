import { Component, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'svg-rect',
  template: `
  	<svg width="400" height="350">
		<svg:rect x="10" y="10" width="150" [attr.height]="myRandomNumber" [attr.fill]="myRectangleColor" [@shrinkOut]="{value: myRandomNumber, params:{myHeight: myRandomNumber}}"/>
		<svg:text x="50" y="50" fill="black" style="font-size:30px">{{myRandomNumber}}</text>
	</svg>
  `,
  animations: [
	  trigger('shrinkOut', [
		transition('* <=> *', [
		  style({height: 0}),
		  animate('0.2s 100ms ease-out', style({height: "{{myHeight}}px" }))
		])
	  ])
	]
})

export class SvgRectComponent {
   @Input() myRandomNumber: number;
   @Input() myRectangleColor: string;
}
