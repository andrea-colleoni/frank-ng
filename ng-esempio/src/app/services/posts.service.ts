import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  posts(): Observable<Post[]> {
    console.log('prima servizio');
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  post(id: number): Observable<Post> {
    console.log('prima servizio');
    // ` => ALT + 96
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
