/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE produtoBaseService PLEASE EDIT ../produto.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Produto } from '../../domain/marktplace_db/produto';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Produto.service.ts
 */

/*
 * SCHEMA DB Produto
 *
	{
		descricao: {
			type: 'String'
		},
		nome: {
			type: 'String',
			required : true
		},
		preco: {
			type: 'Decimal',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_categoria: {
			type: Schema.ObjectId,
			ref : "Produto"
		},
	}
 *
 */
@Injectable()
export class ProdutoBaseService {

    contextUrl: string = environment.endpoint + '/produto';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ProdutoService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Produto): Observable<Produto> {
        return this.http
            .post<Produto>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ProdutoService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ProdutoService.findBy_categoria
    *   @description CRUD ACTION findBy_categoria
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_categoria(id: string): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.contextUrl + '/findBy_categoria/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ProdutoService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Produto> {
        return this.http
            .get<Produto>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ProdutoService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ProdutoService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Produto): Observable<Produto> {
        return this.http
            .post<Produto>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
