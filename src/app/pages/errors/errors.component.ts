import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

class DataModal {
  text: string;
  url: string;
}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  @ViewChild('asTitle') title: ElementRef;
  @ViewChild('asImg') image: ElementRef;

  public data: DataModal;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.data = {
      text: 'Hola mundo??, manipulando el DOM-HTML',
      url: 'https://www.emprendedores.es/wp-content/uploads/2021/01/No-code-1024x576.jpg'
    }
  }

  change(): void {
    // const elementTitle: any = document.querySelector('#title');
    // console.log(elementTitle);
    // elementTitle.style.color = 'red';

    /*DE LA FORMA QUE RECOMIENDA ANGULAR*/
    const asTtitle = this.title.nativeElement;
    const asImg = this.image.nativeElement;
    this.renderer2.setStyle(asTtitle, 'color', 'red')
    this.renderer2.setStyle(asTtitle, 'font-weight', 'bold')

    this.renderer2.setAttribute(asImg,'src', 'https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg')
    this.renderer2.setAttribute(asImg, 'data-name', 'pepito');
    console.log(asTtitle)

  }

}
