import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _showSimon = false;
  public get showSimon() {
    return this._showSimon;
  }
  public set showSimon(value) {
    this._showSimon = value;
  }
  private _mountain = true;
  public get mountain() {
    return this._mountain;
  }
  public set mountain(value) {
    this._mountain = value;
  }

  constructor() { }
}
