import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class HTTPService
{
    static url = 'http://127.0.0.1:3001/';
    constructor(public http: HttpClient) {}
    post(api: string,obj: any): any
    {
        const htttpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        };
        return new Promise((resolve,reject) =>
        {
            this.http.post(HTTPService.url + api,obj,htttpOptions).subscribe({
                next(res): any
                {
                    resolve(res);
                },
                error(err): any
                {
                    reject(err);
                }
            });
        });
    }
}
