import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

import {catchError, delay, map, of, retryWhen, take, tap, throwError} from "rxjs";

import {MenuItem} from '../data-model/menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class InzaService {

    private menuItems: MenuItem[] = [];

    constructor(private http: HttpClient) {
    }

    read() {

        if (this.menuItems.length) {
            //of is used to create our own observerable
            return of(this.menuItems);
        }


        // a basic approch to pass some options as headers
        const options_basic = {
            headers: {
                'Content-Type': 'application/json',
                'Api-Token': '1234abcd',
            }
        }

        //advance way to create it
        let headers = HttpHeaders({
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const options = {
            headers
        }

        // becux of immutablity (a instance for which there is a new object created each time there are some changes
        // used to avoid unknown changes to the original object which may cause impurities in the coding)
        headers = headers.append('Api-Token', '1234,abcd');

        return this.http.get<MenuItem[]>(`http://localhost:3000/menuItems`, options)
            //pipe is used to perform actions to data after it is received.. so it is called after subscribe.
            .pipe(
                //a place to perform something e.g. sideeffects is also okay here. it wont make the method impure
                tap((menuItems) => console.log(menuItems)),
                //retry(2) might be used to retry for 2 times if there is a problem the following
                // is used to retry for 2 times i.e. take(2) but with delay of 5 seconds i.e. delay(5000)
                retryWhen((errors) => errors.pipe(delay(5000), take(2))),
                catchError(this.handleError)
            );
    }

    readOneItem(id: string) {
        return this.read().pipe(map((menuItems) => {
                const menuItem = menuItems.find((menuItem: MenuItem) => menuItem.id === id)
                if (menuItem) {
                    return menuItem;
                }

                return menuItem || {
                    name: "",
                    price: 0,
                    isVegetarian: false
                };
            }),
            catchError(this.handleError)
        );
    }

    create(payload: MenuItem) {
        return this.http.post<MenuItem>(`http://localhost:3000/menuItems`, payload)
            .pipe(
                tap((menuItem) => {
                    //we create a duplicate with the existing data and the data returned from the request and reassign it.
                    this.menuItems = [...this.menuItems, menuItem];
                }),
                catchError(this.handleError)
            )
    }

    update(payload: MenuItem) {
        //we have to pass the id of the item i.e. to updated and also the complete list of items again becoy it contains the updated item's data.
        return this.http.put<MenuItem>(`http://localhost:3000/menuItems/${payload.id}`, payload)
            .pipe(
                tap((menuItem) => {
                    this.menuItems = this.menuItems.map((item) => {
                        if (menuItem.id === item.id) {
                            return menuItem
                        }
                        return item;
                    })
                }),
                //rxjx error handling function
                catchError(this.handleError)
            );

    }

    delete(payload: MenuItem) {
        return this.http.delete<MenuItem>(`http://localhost:3000/menuItems/${payload.id}`)
            .pipe(tap(() => {
                    this.menuItems = this.menuItems.filter((menuitem: MenuItem) => menuitem.id !== payload.id)
                })
            );
        console.log(this.menuItems)
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
            //client-side
            console.warn('Client', err.message)
        } else {
            //server-side
            console.warn('Server', err.status)
        }
        return throwError(() => new Error(err.message));
    }
}
