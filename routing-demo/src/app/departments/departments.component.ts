import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
snapshotParam:string;
observableParam:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.queryParams['paramName'];

    this.route.queryParams.subscribe(
      (queryParam) => {
        this.observableParam = queryParam['paramName'];
      }
    )
  }

}
