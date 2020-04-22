import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject, SnapshotAction } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private rootUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private rootPostsUrl: string = 'http://jsonplaceholder.typicode.com/posts';
  private prop: string = 'foo';
  private userList: AngularFireList<any>;

  public propChange: BehaviorSubject<string> = new BehaviorSubject<string>(this.prop);

  private users: IUser[] = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }];

  constructor(
    private http: HttpClient,
    private firebase: AngularFireDatabase
  ) {
    this.userList = this.firebase.list('user');
  }

  /**
   * Return Prop Value
   * @returns {string}
   */
  getProp(): string {
    return this.prop;
  }

  /**
   * Set Prop's value
   * @param {string} value
   * @memberof UserService
   */
  setProp(value: string): void {
    this.prop = value;
    this.propChange.next(this.prop);
  }

  /**
   * Add user in array of users
   * @param {IUser} user
   */
  addUser(user: IUser): void {
    this.users.push(user);
  }

  /**
   * Get all users
   *
   * @returns {IUser[]}
   */
  getUsers(): IUser[] {
    return this.users;
  }

  /**
   * Get a user by its id
   *
   * @param {number} id
   * @returns {IUser}
   */
  getUserById(id: number): IUser {
    return this.users.filter(user => user.id === id)[0];
  }

  /**
   * Get all users via REST method
   *
   * @returns {Observable<IUser[]>}
   */
  getUsersViaREST(): Observable<IUser[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer the-access-token');
    return this.http
              .get<IUser[]>(this.rootUrl, { headers })
              .pipe(
                map(users => {
                  return users.map(user => {
                    return {
                      id: user.id,
                      name: user.name,
                      email: user.email,
                    };
                  });
                })
              );
  }

  /**
   * Get a user by its id via REST method
   *
   * @param {number} id
   * @returns {Observable<IUser>}
   */
  getUsersByIdViaREST(id: number): Observable<IUser> | any {
    return this.http
              .get<IUser>(`${this.rootUrl}/${id}`)
              .pipe(
                retry(3),
                catchError(err => {
                  console.error(err);
                  return err;
                })
              );
  }

  /**
   * Create a new user
   *
   * @param {IUser} user
   * @returns {Observable<IUser>}
   */
  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.rootUrl, user);
  }

  /**
   * Update an user
   *
   * @param {IUser} user
   * @returns {Observable<IUser>}
   */
  update(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.rootUrl}/${user.id}`, user);
  }

  /**
   * Delete an user
   *
   * @param {number} id
   * @returns {Observable<IUser>}
   */
  delete(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.rootUrl}/${id}`);
  }

  /**
   * Get All posts from an User
   *
   * @param {number} id
   * @returns {Observable<any>}
   */
  getPosts(id: number): Observable<any> {
    const params = new HttpParams().set('userId', id.toString());
    return this.http.get(this.rootPostsUrl, { params });
  }

  /**
   * Return the list of users from firebase
   * @returns {AngularFireList<any>}
   */
  getUsersViaFirebase(): AngularFireList<any> {
    return this.userList;
  }

  /**
   * Get user by key via firebase
   */
  getUserByKeyViaFirebase($key) {
    // let snap;
    // let user: IUser;

    return this.userList.snapshotChanges();

    // return user;
  }

  /**
   * Create new user from firebase
   * @param {IUser} user
   */
  addUserViaFirebase(user: IUser) {
    this.userList.push(user);
  }

  /**
   * Update user from firebase
   * @param {IUser} user
   */
  updateUserViaFirebase($key: string, data: {}) {
    this.userList.update($key, data);
  }

  /**
   * Delete an user from firebase
   * @param {string} $key
   */
  deleteUserViaFirebase($key: string) {
    this.userList.remove($key);
  }
}
