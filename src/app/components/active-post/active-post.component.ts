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
          if (p.active === true) {
            this.post.push(p);
          }
        });
      })
      .catch((err) => {
        console.log('errore', err);
      });
  }
}
