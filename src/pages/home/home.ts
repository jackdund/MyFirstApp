import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ratio: number =0;
  totemColor: string = "#afafaf";
  red:number=66;
  green:number=25;
  blue:number=100;
  
  startColor : {red:number; blue:number; green:number} = {red:244, blue:116, green:66}
  endColor : {red:number; blue:number; green:number} = {red:66, blue:244, green:98}



  constructor(public navCtrl: NavController) {

  }

  printInterp(){
    this.red = Math.floor(this.startColor.red + this.ratio/100 * (this.endColor.red - this.startColor.red));
    this.blue = Math.floor(this.startColor.blue + this.ratio/100 * (this.endColor.blue - this.startColor.blue));
    this.green = Math.floor(this.startColor.green + this.ratio/100 * (this.endColor.green - this.startColor.green));
    // this.blue = this.startColor.blue + this.ratio;
    // this.green = this.startColor.green + this.ratio;
    console.log(this.ratio + " -->" + this.red + " " + this.blue + " " + this.green)
    this.onUpdateColor();
  }
  
  onUpdateColor(){
    this.totemColor="#" + this.red.toString(16) + this.blue.toString(16) + this.green.toString(16)
    console.log(this.totemColor);
  }
  
  onSetColor(){
    return "{rgb(124,0,0)}";
    //return "{ color : " + this.totemColorToString() + "}";
  }

}
