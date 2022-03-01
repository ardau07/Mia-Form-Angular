import { MiaBaseCrudHttpService, MiaCoreConfig, MiaPagination, MiaQuery, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService extends MiaBaseCrudHttpService<any> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) { 
    super(config, http);
    this.basePathUrl = 'https://vulnwatch-development.ts.r.appspot.com/device-list';
  }

  listOb(query: MiaQuery): Observable<MiaPagination<any>> {
    let params: any = query.toParams();
    params.access_token = 'c3349e695bd8c07388902de25278d6302e75e86d';
    return this.postOb(this.basePathUrl + '/list', params);
  }

  list(query: MiaQuery): Promise<MiaPagination<any>> {
    return this.listWithExtras(query, { access_token: 'c3349e695bd8c07388902de25278d6302e75e86d'});
  }
}