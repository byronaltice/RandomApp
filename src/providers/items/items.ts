import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { ApiEndpoint } from '../api/api';
@Injectable()
export class Items {

  constructor(public api: Api) {
    
  }
  query(params?: any) {
    return this.api.get('/items', params);
  }
  get(): Item {
    return this.api.getv2(ApiEndpoint.Items);
  }
  add(item: Item) {
  }

  delete(item: Item) {
  }

}
