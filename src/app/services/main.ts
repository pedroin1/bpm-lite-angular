import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from '@entities/user/user';
import { UserDTO } from '@entities/user/user.dto';
import { environment } from '@environments/environment.development';
import { userMapperArray } from '@mappers/user-mapper';
import { BehaviorSubject, catchError, map, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Main {
  private readonly apiUrl = environment.apiUrl;

  private httpClient = inject(HttpClient);

  private destroyRef = inject(DestroyRef);

  private _loadUsers$ = new Subject<null>();

  private _loadedUsers$ = new BehaviorSubject<User[]>([]);

  public readonly loadedUsers$ = this._loadedUsers$.asObservable();

  constructor() {
    this.onGetUser();
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

  public reloadUsers(): void {
    this._loadUsers$.next(null);
  }
}
