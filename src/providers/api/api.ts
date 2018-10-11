import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


export enum ApiEndpoint {
  Items,
  Messages
}
class ApiEndpointInfo {
  endpoint: string
  constructor(endpoint: string) {
    this.endpoint = '/' + endpoint;
  }
}
interface ApiEndpointInfoMap {
  dataEndpoints: Map<ApiEndpoint, ApiEndpointInfo>
}


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://example.com/api/v1';
  public apiEndpointInfoMap: Map<ApiEndpoint, ApiEndpointInfo> = new Map<ApiEndpoint, ApiEndpointInfo>([
    [ApiEndpoint.Items, new ApiEndpointInfo('items')],
    [ApiEndpoint.Messages, new ApiEndpointInfo('messages')]
  ]);
  constructor(public http: HttpClient) {
  }
  getv2(apiEndpoint: ApiEndpoint) {
    return this.http.get(this.url + '/' + this.apiEndpointInfoMap[apiEndpoint]);
  }
  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
