import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'solar-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('color')
  protected _color;

  public get color() {
    return this._color;
  }

  @Input('type')
  protected _type;

  public get type() {
    return this._type;
  }

  @Input('width')
  protected _width;

  public get width() {
    return this._width;
  }

  bg: any = {};

  constructor() { }

  ngOnInit() {
    this.bg = {
      background: `green !important`

    }
    console.log(this.bg);
    
  }

}
