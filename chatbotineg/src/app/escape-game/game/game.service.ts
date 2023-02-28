import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _showSimon = false;
  private _score = 0;
  private _enigmes = [false, false, false, false, false, false];
  private _roomNumber = 1;
  private _showInformationBar = false;
  private _keyHobbit = false;
  private _startTimer = false;

  public get startTimer() {
    return this._startTimer;
  }
  public set startTimer(value) {
    this._startTimer = value;
  }

  public get keyHobbit() {
    return this._keyHobbit;
  }
  public set keyHobbit(value) {
    this._keyHobbit = value;
  }

  public get showInformationBar() {
    return this._showInformationBar;
  }
  public set showInformationBar(value) {
    this._showInformationBar = value;
  }

  public get roomNumber() {
    return this._roomNumber;
  }
  public set roomNumber(value) {
    this._roomNumber = value;
  }

  public get enigmes() {
    return this._enigmes;
  }
  public set enigmes(value) {
    this._enigmes = value;
  }
  public get score() {
    return this._score;
  }
  public set score(value) {
    this._score = value;
  }
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

  restartGame() {
    this._showSimon = false;
    this._score = 0;
    this._enigmes = [false, false, false, false, false, false];
    this._roomNumber = 1;
    this._showInformationBar = false;
    this._keyHobbit = false;
    this._startTimer = false;
  }


  constructor() { }
}
