import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/shared/global-variables.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public globalVariablesService: GlobalVariablesService) { }

  ngOnInit(): void {
  }

}
