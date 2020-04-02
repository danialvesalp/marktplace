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
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProdutoService } from '../../services/produto.service';
import { CategoriaService } from '../../services/categoria.service';
// Import Models
import { Produto } from '../../domain/marktplace_db/produto';
import { Categoria } from '../../domain/marktplace_db/categoria';

// START - USED SERVICES
/**
* ProdutoService.create
*	@description CRUD ACTION create
*
* ProdutoService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ProdutoService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CategoriaService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Produto
 */
@Component({
    selector: 'app-produto-edit',
    templateUrl: 'produto-edit.component.html',
    styleUrls: ['produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
    item: Produto;
    
    list_categoria: Categoria[];
    
    model: Produto;
    formValid: Boolean;

    constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Produto();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.produtoService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.categoriaService.list().subscribe(list => this.list_categoria = list);
        });
    }


    /**
     * Save Produto
     *
     * @param {boolean} formValid Form validity check
     * @param Produto item Produto to save
     */
    save(formValid: boolean, item: Produto): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.produtoService.update(item).subscribe(data => this.goBack());
            } else {
                this.produtoService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



