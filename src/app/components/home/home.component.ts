import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks/tasks.service';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('.modal').modal();
      });
    })(jQuery);
  }

  addTask(title: HTMLInputElement, description: HTMLInputElement) {
    this.tasksService.addTask(title.value, description.value);
    title.value = '';
    description.value = '';
  }
}
