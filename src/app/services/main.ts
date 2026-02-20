import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Comment } from '@entities/comment/comment';
import { CommentDTO } from '@entities/comment/comment.dto';
import { User } from '@entities/user/user';
import { UserDTO } from '@entities/user/user.dto';
import { environment } from '@environments/environment.development';
import { commentMapperArray } from '@mappers/comment-mapper';
import { userMapperArray } from '@mappers/user-mapper';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';

@Injectable()
export class Main {
  private readonly apiUrl = environment.apiUrl;

  private httpClient = inject(HttpClient);

  private destroyRef = inject(DestroyRef);

  private _loadedUsers$ = new BehaviorSubject<User[]>([]);

  public readonly loadedUsers$ = this._loadedUsers$.asObservable();

  private _loadedComments$ = new BehaviorSubject<Comment[]>([]);

  public readonly loadedComments$ = this._loadedComments$.asObservable();

  constructor() {
    this.onGetUser();
    this.onGetComments();
  }

  private onGetUser(): void {
    this.httpClient
      .get<UserDTO[]>(`${this.apiUrl}/users`)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError((error: unknown) => {
          console.log('Erro ao buscar lista de Usuários:', error);
          return throwError(() => error);
        }),
        map(userMapperArray)
      )
      .subscribe((users) => this._loadedUsers$.next(users));
  }

  private onGetComments(): void {
    this.httpClient
      .get<CommentDTO[]>(`${this.apiUrl}/comments`)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError((error: unknown) => {
          console.log('Erro ao buscar lista de Comentários:', error);
          return throwError(() => error);
        }),
        map(commentMapperArray)
      )
      .subscribe((comments) => this._loadedComments$.next(comments));
  }
}
