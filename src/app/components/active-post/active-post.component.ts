import { Component } from '@angular/core';
import { iPost } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { iJsonResponse } from '../../interfaces/jason-response';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  post: iPost[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //recupera dettagli rotta

    this.route.params.subscribe((params) => {
      console.log('questi sono i params', params);
      fetch('db.json')
        .then((response) => {
          if (response.ok) {
            return <Promise<iJsonResponse>>response.json();
          } else {
            throw new Error('Errore nel primo then');
          }
        })
        .then((data) => {
          console.log('siamo nel then e questi sono i data', data);
          data.posts.forEach((p) => {
            if (p.active === true) {
              this.post.push(p);
            }
          });
        })
        .catch((err) => {
          console.log('errore', err);
        });

      //qua facciamo la fetch per recuperare l'array di post tramite find(p =>p.id ==params[id]/)
      //if (found){this.post = found}
      //e sopra dichisari una const found
      //un controllo per il caricamento della pagina cosi non da undefined
    });
    //recupera l'oggetto
  }
}
