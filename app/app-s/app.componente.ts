import {Component}  from '@angular/core';

@Component({
    selector: 'my-app',
    template:
    `

  <div class="row">
    <div class="col-xs-6 col-sm-10 col-md-2 col-lg-12" style="background-color:blue;">
      <div class="box">un comentario</div>
    </div>
    <div class="col-xs-6 col-sm-2 col-md-10 col-lg-12" style="background-color:red;">
      <div class="box">un comentario a lado</div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-1 col-sm col-md col-lg" style="background-color:blue;">
      <div >1</div>
    </div>
    <div class="col-xs-11 col-sm-7 col-md-5 col-lg-1" style="background-color:red;">
      <div >2</div>
    </div>
  </div>


    `
})

export class AppComponent {}
