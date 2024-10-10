import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../interfaces/post';
import { iJsonResponse } from '../../interfaces/jason-response';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  post!: iPost;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //recupera dettagli rotta

    this.route.params.subscribe((params: any) => {
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
          const foundPost = data.posts.find((p) => p.id == params.id);
          if (foundPost) {
            this.post = foundPost;
          } else {
            console.error('non trovato');
          }
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
