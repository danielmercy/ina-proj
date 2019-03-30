import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import * as echarts from 'echarts'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  protected _graph_width;
  @ViewChild('sgrph1')
  protected graph: ElementRef;
  private set graph_width(value) {
    this._graph_width = value;
  }
  private get graph_width() {
    return this._graph_width
  }

  options: any;
  initOpts: any;

  constructor() { }

  @HostListener('window:resize')
  onResize(e) {
    this.initOpts.width = (this.graph.nativeElement.offsetWidth - 16)

    console.log((this.graph.nativeElement.offsetWidth - 16) || this.graph.nativeElement.offsetWidth);
    
  }

  ngOnInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    // color: ['#1184ff', '#06FCCA', '#FF4004'],

    this.options = {
      // backgroundColor: '#394056',
      color: ['#1184ff', '#06FCCA', '#FF4004'],
      title: {
          // text: '请求数',
          textStyle: {
              fontWeight: 'normal',
              fontSize: 16,
              color: '#F1F1F3'
          },
          left: '6%'
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              lineStyle: {
                  color: '#282e50'
              }
          }
      },
      legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['移动', '电信', '联通'],
          right: '4%',
          textStyle: {
              fontSize: 10,
              color: '#F1F1F3'
          }
      },
      grid: {
          left: '6%',
          right: '4%',
          bottom: '6%',
          containLabel: true
      },
      xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
              lineStyle: {
                  color: '#333958'
              }
          },
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
      }, {
          axisPointer: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: 'transparent'
              }
          },
          axisTick: {
              show: false
          },
  
          position: 'bottom',
          offset: 20,
          data: ['', '', '', '', '', '', '', '', '', '', {
              value: '周六',
              textStyle: {
                  align: 'left'
              }
          }, '周日']
      }],
      yAxis: [{
          type: 'value',
          // name: '( Kwh )',
          axisTick: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: '#333958'
              }
          },
          axisLabel: {
              margin: 10,
              textStyle: {
                  fontSize: 10
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#333958'
              }
          }
      }],
      series: [{
          name: '移动',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 1
              }
          },
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(6, 252, 202, 0.3)'
                  }, {
                      offset: 0.8,
                      color: 'rgba(6, 252, 202, 0)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
              }
          },
          itemStyle: {
              normal: {
                  color: '#06FCCA',
                  borderColor: 'rgba(6, 252, 202, 0.27))',
                  borderWidth: 12
              }
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
      }, {
          name: '电信',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 1.9
              }
          },
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0, 136, 212, 0.3)'
                  }, {
                      offset: 0.8,
                      color: 'rgba(0, 136, 212, 0)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
              }
          },
          itemStyle: {
              normal: {
                  color: 'rgb(0,136,212)',
                  borderColor: 'rgba(0,136,212,0.2)',
                  borderWidth: 12
  
              }
          },
          data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
      }, {
          name: '联通',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 1
              }
          },
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(255, 64, 4, 0.3)'
                  }, {
                      offset: 0.8,
                      color: 'rgba(255, 64, 4, 0)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
              }
          },
          itemStyle: {
              normal: {
                  // Orange color
                  color: '#FF4004',
                  borderColor: 'rgba(255, 64, 4, .2)',
                  borderWidth: 12
              }
          },
          data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
      }, ]
  };
  }
}
