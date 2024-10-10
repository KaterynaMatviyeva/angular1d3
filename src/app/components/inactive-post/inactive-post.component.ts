import { Component } from '@angular/core';
import { iPost } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { iJsonResponse } from '../../interfaces/jason-response';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  post: iPost[] = [];

  ngOnInit() {
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
          if (p.active === false) {
            this.post.push(p);
          }
        });
      })
      .catch((err) => {
        console.log('errore', err);
      });
  }
}
