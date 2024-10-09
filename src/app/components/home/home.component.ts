import { iJsonResponse } from '../../interfaces/jason-response';
import { iPost } from './../../interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  postInEvidenza!: iPost;
  postArray: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return <Promise<iJsonResponse>>response.json();
        } else {
          throw new Error('La chiamata non è andata a buon fine');
        }
      })
      .then((data) => {
        console.log(data);
        this.postInEvidenza = data.posts[0];
        this.postArray = data.posts.slice(1, 5);
      })
      .catch((err) => {
        console.log('errore dal server', err);
      });
  }
}
