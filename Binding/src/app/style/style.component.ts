import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
    public MyColor = "orange";
    public YourColor = "green";

    public Isset = true;

    public Myclass = "success";
    public Data = "_____________";
    public MyAction()
    {
      this.Data="Submit button clicked...";
    }

    public MyActionNew(value:any)
    {
      console.log(value);
    }
}
