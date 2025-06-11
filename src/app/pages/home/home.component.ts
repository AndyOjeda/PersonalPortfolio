import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dialogActivo = false;
  proyectoSeleccionado: any = null;
  showContactModal = false;
  activeTab: 'frontend' | 'backend' = 'frontend';
  activeSection: string = 'home';
  isMenuOpen = false;
  cvMenuOpen = false;

  frontendTechs = [
    { name: 'HTML', icon: 'assets/img/html.png', description: 'Structure of web content' },
    { name: 'CSS', icon: 'assets/img/css3.png', description: 'Styling and layout of web pages' },
    { name: 'JavaScript', icon: 'assets/img/javascript.png', description: 'Interactive client-side scripting' },
    { name: 'Tailwind', icon: 'assets/img/tailwind.png', description: 'Utility-first CSS framework' },
    { name: 'Angular', icon: 'assets/img/angularjs.png', description: 'Powerful frontend framework by Google' },
    { name: 'React', icon: 'assets/img/react.png', description: 'Component-based UI library by Meta' }
  ];


  backendTechs = [
    { name: 'Node.js', icon: 'assets/img/nodejs.png', description: 'JavaScript runtime for server-side' },
    { name: 'Java', icon: 'assets/img/java.png', description: 'Robust backend language and framework' },
    { name: 'Python', icon: 'assets/img/python.png', description: 'Versatile backend programming language' },
    { name: 'MySQL', icon: 'assets/img/mysql.png', description: 'Relational database management system' }
  ];

  proyectos = [
    {
      titulo: 'Library Manager For University',
      descripcion: 'Web app to manage tasks with authentication and filtering features.',
      imagen: 'assets/projects/biblioteca/biblioteca.png',
      imagenes: [
        'assets/projects/biblioteca/login.png',
        'assets/projects/biblioteca/biblioteca.png',
        'assets/projects/biblioteca/books.png',
        'assets/projects/biblioteca/dialog.png',
        'assets/projects/biblioteca/admin.png',
        'assets/projects/biblioteca/support.png',
      ]
    },
    {
      titulo: 'ZIPACONECTA: App de Seguridad de Zipaquira',
      descripcion: 'Una app de zipaquira con muchas funcionalidades importantes',
      imagen: 'assets/projects/zipaSeguridad/zipaconecta.jpg',
      imagenes: [
        'assets/projects/zipaSeguridad/login.png',
        'assets/projects/zipaSeguridad/home.png',
        'assets/projects/zipaSeguridad/security.png',
        'assets/projects/zipaSeguridad/ai.png',
        'assets/projects/zipaSeguridad/notices.png',
        'assets/projects/zipaSeguridad/panic.png',
        'assets/projects/zipaSeguridad/support1.png',
      ]
    },
    {
      titulo: 'Latinaguas',
      descripcion: 'Water treatment solutions provider with custom engineering, technical consulting, and over two decades of experience in public and industrial systems.',
      imagen: 'assets/projects/latinaguas/a.jpg',
      imagenes: [
        'assets/projects/latinaguas/home.png',
        'assets/projects/latinaguas/home1.png',
        'assets/projects/latinaguas/products.png',
        'assets/projects/latinaguas/dialog.png',
        'assets/projects/latinaguas/about.png',
        'assets/projects/latinaguas/contact.png',
      ]
    },
        {
      titulo: 'TRIPIO Mobile App',
      descripcion: 'Mobile app promoting tourism in Zipaquirá through interactive guides, cultural experiences, and smart travel planning.',
      imagen: 'assets/projects/tripio/tripio.jpg',
      imagenes: [
        'assets/projects/tripio/homeT.png',
        'assets/projects/tripio/mapT.png',
        'assets/projects/tripio/productT.png',
        'assets/projects/tripio/cameraT.png',
        'assets/projects/tripio/favoritesT.png',
        'assets/projects/tripio/userT.png',
      ]
    }
  ];

  certificaciones = [
    {
      titulo: 'HTML5',
      lugar: 'Udemy',
      imagen: 'assets/certificados/html5C.jpg'
    },
    {
      titulo: 'CSS3',
      lugar: 'Udemy',
      imagen: 'assets/certificados/cssC.jpg'
    },
    {
      titulo: 'Bases de Datos en MySQL',
      lugar: 'Digital House',
      imagen: 'assets/certificados/mysqlC.jpg'
    },
    {
      titulo: 'Metodologias Agile & Scrum',
      lugar: 'Digital House',
      imagen: 'assets/certificados/metodoC.jpg'
    },
    {
      titulo: 'JavaScript para DOM',
      lugar: 'Digital House',
      imagen: 'assets/certificados/javascriptC.jpg'
    }
  ];

  indice = 0;

  get proyectoActual() {
    return this.proyectos[this.indice];
  }

  siguiente() {
    this.indice = (this.indice + 1) % this.proyectos.length;
  }

  anterior() {
    this.indice = (this.indice - 1 + this.proyectos.length) % this.proyectos.length;
  }

   // Para el diálogo de imágenes
  imagenActual = 0;
  imagenesDialogo: string[] = [];

  abrirDialog(index: number) {
    this.proyectoSeleccionado = this.proyectos[index];
    this.imagenesDialogo = this.proyectoSeleccionado.imagenes;
    this.imagenActual = 0;
    this.dialogActivo = true;
  }

  cerrarDialog() {
    this.dialogActivo = false;
  }

  siguienteImagen() {
    this.imagenActual = (this.imagenActual + 1) % this.imagenesDialogo.length;
  }

  anteriorImagen() {
    this.imagenActual = (this.imagenActual - 1 + this.imagenesDialogo.length) % this.imagenesDialogo.length;
  }

  @ViewChild('indicator') indicator!: ElementRef;
  @ViewChildren('navItems') navItems!: QueryList<ElementRef>;

  setActiveSection(section: string) {
    this.activeSection = section;
    const index = ['home', 'skills', 'projects', 'certification', 'contact'].indexOf(section);
    const item = this.navItems.toArray()[index].nativeElement;
    const width = item.offsetWidth;
    const offset = item.offsetLeft;

    this.indicator.nativeElement.style.transform = `translateX(${offset}px)`;
    this.indicator.nativeElement.style.width = `${width}px`;
}


  toggleMenu() {
    this.cvMenuOpen = !this.cvMenuOpen;
  }

  closeMenu() {
    this.cvMenuOpen = false;
  }



}
