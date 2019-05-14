import { Component, OnInit } from '@angular/core';
import { ExampleService } from '@app/example/example.service';
import { IFexample } from '../shared/interfaces';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  example: IFexample[];

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.onGetExample();
  }

  onGetExample = (): void => {
    this.exampleService
      .getExample()
      .subscribe((example: IFexample[]) => (this.example = example));
  }
}
