import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  todoTasks : string[];
  inProccessTasks : string[];
  finalizeTasks : string[];

  constructor() {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('.modal').modal();
      });
    })(jQuery);
  }
}
