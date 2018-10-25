import { Component, OnInit, HostBinding, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
productCategories = [{"id":"9","Product_Description":"Paints","Status":"1"},{"id":"8","Product_Description":"Plastic","Status":"1"},{"id":"7","Product_Description":"Ceramics","Status":"1"},{"id":"6","Product_Description":"Fabric","Status":"1"},{"id":"5","Product_Description":"Bricks and Blocks","Status":"1"},{"id":"4","Product_Description":"Cement","Status":"1"},{"id":"3","Product_Description":"Rock","Status":"1"},{"id":"2","Product_Description":"Glass","Status":"1"},{"id":"1","Product_Description":"Wood","Status":"1"}];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    setTimeout(this.InitializeCarousal,1000);
    let responseData;
    this.http.get('http://gokulsenthil.com/api/product/read.php')
    .subscribe(data => {
      responseData = data;
      responseData = responseData.records;
      this.productCategories = responseData;
      setTimeout(this.InitializeCarousal,1000);
      console.log(this.productCategories);
    })  
  }
  InitializeCarousal() {
      $("#owl-categories").owlCarousel({      
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
            items:4
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
