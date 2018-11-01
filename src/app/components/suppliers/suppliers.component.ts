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
  services = 
  [{"id":"9","Service_Description":"Home cleaning","Status":"1"},{"id":"8","Service_Description":"Furniture assembly","Status":"1"},{"id":"7","Service_Description":"TV Mounting","Status":"1"},{"id":"6","Service_Description":"Interior painting","Status":"1"},{"id":"5","Service_Description":"Hanging pictures and shelves","Status":"1"}];;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    setTimeout(this.InitializeCarousal,1000);
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
          items:3
        },
        540:{
          items:1
        }
      }
    })
}

}
