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
          const foundPost = data.posts.find((p) => p.id == params['id']);
          //un controllo per il caricamento della pagina cosi non da undefined
          if (foundPost) {
            this.post = foundPost;
          } else {
            console.error('non trovato');
          }
        })
        .catch((err) => {
          console.log('errore', err);
        });
    });
  }
}
