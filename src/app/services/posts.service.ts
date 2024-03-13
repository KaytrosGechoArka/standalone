import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PostsService{
    constructor(private _http:HttpClient){}

    addPost(data:any):Observable<any>{
        return this._http.post('http://localhost:3000/posts',data)
    }
    getPostedLists():Observable<any>{
        return this._http.get('http://localhost:3000/posts')
    }
    updatePost(id:any,data:any):Observable<any>{
        return this._http.put(`http://localhost:3000/posts/${id}`,data)
    }
}