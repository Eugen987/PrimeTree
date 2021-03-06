import { NetworkRequest } from '../../../network/network.request';

export class ListingRequest {

  private parameters : any[];
  private locations : string[] = ['HD', 'MA'];

  private networkRequest : NetworkRequest;

  constructor() {
    this.networkRequest = new NetworkRequest();
    this.networkRequest.setHostname('141.19.145.175');
    this.networkRequest.setPort(8080);
  }

  public getRequest() : NetworkRequest {
    return this.networkRequest;
  }

  public setPriceMin(min : number) : void {
    this.networkRequest.addQuery('priceFrom', '' + min);
  }

  public setPriceMax(max : number) : void {
    this.networkRequest.addQuery('priceTo', '' + max);
  }

  public addLocation(location : string) : void {
    this.networkRequest.addQuery('location', location);
  }

  public setSortBy() : void {
    this.networkRequest.addQuery('sortBy', 'abc');
  }


}

class LocationConverter {
  private locations : string[] = ['mannheim', 'frankfurt', 'karlsruhe', 'köln', 'münchen', 'stuttgart', 'nürnberg', 'zug'];
  private licensePlate : string[] = ['MA', 'F', 'KA', 'K', 'M', 'S', 'N', 'Z'];
}
