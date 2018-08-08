import { Component, OnInit, Input, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess: string;

  constructor(private leaderService: LeaderService,
              private route: ActivatedRoute,
              private location: Location,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leaderService.getLeaders()
        .subscribe(leaders => this.leaders = leaders,
                   errmess => this.errMess = <any>errmess.message);
  }

}
