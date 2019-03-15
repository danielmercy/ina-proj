import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'solar-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('size')
  protected _size;

  public get size() {
    return this._size;
  }

  @Input("color")
  protected _color;

  public get color() {
    return this._color;
  }

  @Input("text")
  protected _text;

  public get text() {
    return this._text;
  }

  @Input("click")
  protected _click;

  public get click() {
    return this._click;
  }

  constructor() { }

  ngOnInit() {
  }

}
