import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'solar-typograph',
  templateUrl: './typograph.component.html',
  styleUrls: ['./typograph.component.scss']
})
export class TypographComponent implements OnInit {

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

  @Input('weight')
  protected _weight;

  public get weight() {
    return this._weight;
  }

  @Input('mstyle')
  protected _style: String;

  public get style() {
    if(!this._style) return;
    return this._style.split(' ');
  }

  @Input("preset")
  protected _preset;

  public get preset() {
    return this._preset;
  }

  @Input("text")
  protected _text;

  public get text() {
    return this._text;
  }

  public styles = {}
  public presets = {}

  constructor() { }

  ngOnInit() {
    
    this.styles = {
      color: (this.color == 'primary' || 'accent' || 'warning') ? `var(--${this.color})`: (this.color ? this.color : ''),
      fontSize: (this.size == 'small' || 'medium' || 'large')  ? this.size : (this.size ? this.size : ''),
      fontWeight: (this.weight == 'lighter' || 'normal' || 'bold' || 'bolder')  ? this.weight : (this.weight ? this.weight : ''),
      fontStyle: (this.style[0] == 'normal' || 'oblique' || 'italic')  ? this.style[0] : '',
      textDecoration: (this.style[1] == 'overline' || 'underline' || 'line-through')  ? this.style[1] : '',

    }

    this.presets = {
      fancy: {
        color: 'var(--accent)',
        fontSize: 'small',
        fontWeight: 'bolder',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      },
      hero: {
        color: 'var(--white)',
        fontSize: '36px',
        fontWeight: '300',
      },
      hardHero: {
        color: 'var(--white)',
        fontSize: '39px',
        fontWeight: 'bolder',
      },
      description: {
        color: 'var(--foreground)',
        fontSize: '17px',
        fontWeight: 'bold',
      }
    }
    console.log(this.styles);
    console.log(this.style);
    
  }

}
