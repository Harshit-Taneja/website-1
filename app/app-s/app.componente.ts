import {Component, ViewEncapsulation}  from '@angular/core';


@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.Native,
    styleUrls: ['../../sass/styles.scss'],

    template:
    `

  <div class="row">
    <div class="col-xs-6 col-sm-10 col-md-2 col-lg-12 div1">
      <div class="box">un comentario</div>
    </div>
    <div class="col-xs-6 col-sm-2 col-md-10 col-lg-12 div2">
      <div class="box">un comentario a lado</div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-1 col-sm col-md col-lg div1">
      <div >1</div>
    </div>
    <div class="col-xs-11 col-sm-7 col-md-5 col-lg-1 div2">
      <div >2</div>
    </div>
  </div>


    `
})

export class AppComponent {}
