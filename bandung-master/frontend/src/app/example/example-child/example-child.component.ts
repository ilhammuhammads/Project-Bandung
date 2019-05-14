import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.scss']
})
export class ExampleChildComponent implements OnInit {
  parameterId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.parameterId = +this.route.snapshot.paramMap.get('id');
  }
}
