import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


currentSection: any;
isNavbarContentOpen: any;




navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}




opennavbarContent(section: any) {
  this.isNavbarContentOpen=true;
  this.currentSection=section;
}

closeNavbarContent()
{
  this.isNavbarContentOpen=false;

}

@HostListener('document:click',[`$event`])
onDocumentClick(event: MouseEvent)
{
  const modalContainer = document.querySelector(".modal-container");
  const openButtons = document.querySelectorAll(".open-button");

  let clickInsideButton=false;

  openButtons.forEach((button:Element)=>
  {
    if(button.contains(event.target as Node))
    {
      clickInsideButton=true;
    }
  })

  if(modalContainer && !clickInsideButton && this.isNavbarContentOpen)
  {
    this.closeNavbarContent();
  }
}



}
