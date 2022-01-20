import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  count : number = 0;

  onclickIncrement = () => {

    if (this.count > 9){
      this.onclickReset();
    }
    else{
      this.count += 1;
    }
    
  }

  onclickDecrement = () => {
    if (this.count < 1){
      this.onclickReset();
    }
    else{
      this.count -= 1;
    }
  }

  onclickReset = () => {
    this.count = 0;
  }
}
