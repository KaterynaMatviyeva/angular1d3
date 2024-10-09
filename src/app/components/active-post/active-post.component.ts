import { Component } from '@angular/core';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  post: Post[] = [];

  ngOnInit() {
    fetch('../../../../db.json')
      .then((response) => {
        if (response.ok) {
          response.json();
        } else {
          throw new Error('Errore nel prelevare info dal database');
        }
      })
      .then((data) => {
        // this.post = this.data
        console.log(data);
      })

      .catch((err) => {
        console.log('errore', err);
      });
  }
}
