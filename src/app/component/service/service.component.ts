import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.slide-nav').on('click', function (e) {
        e.preventDefault();
        // get current slide
        var current = $('.flex--active').data('slide'),
          // get button data-slide
          next = $(this).data('slide');

        $('.slide-nav').removeClass('active');
        $(this).addClass('active');

        if (current === next) {
          return false;
        } else {
          $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
          $('.flex--active').addClass('animate--end');
          setTimeout(function () {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
          }, 800);
        }
      });
    });
  }

}
