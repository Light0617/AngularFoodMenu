import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Restangular } from 'ngx-restangular';


@Injectable({
  providedIn: 'root'
})

export class LeaderService{
  constructor(private restangular: Restangular){ }

  getLeaders(): Observable<Leader[]>{
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader>{
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader>{
    return this.restangular.all('leaders')
               .getList({features: true})
               .pipe(map(leaders => leaders[0]));
  }
}
