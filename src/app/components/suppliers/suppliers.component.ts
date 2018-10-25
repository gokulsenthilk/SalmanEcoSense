import { Component, OnInit, HostBinding, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    setTimeout(this.InitializeCarousal,1000);
    let responseData;
    this.http.get('http://gokulsenthil.com/api/product/readsuppliers.php?authkey=ecosense')
    .subscribe(data => {
      responseData = data;
      responseData = responseData.records;
      this.suppliers = responseData;
    setTimeout(this.InitializeCarousal,1000);
      console.log(this.suppliers);
    })
  }
  InitializeCarousal() {
    $("#owl-suppliers").owlCarousel({      
      center: false,
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      margin: 40,
      lazyLoad: true,
      navSpeed: 500,
      autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
      navText: ['<i class="ui-arrow-left">','<i class="ui-arrow-right">'],
      responsive:{
        1200: {
          items:3
        },
        768:{
          items:2
        },
        540:{
          items:1
        }
      }
    })
  
}

}
