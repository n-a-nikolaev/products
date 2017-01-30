import { IProduct } from '../interfaces/product.interface';
import { SearchData } from '../interfaces/search-data.interface';
import { AppConfig } from '../app.config';

export class ProductsService {
    private url: string = `${AppConfig.apiUrl}/products`;

    /**
     * @name getAll
     * @description Get all products
     * 
     * @returns {JQueryPromise<any>}
     * 
     * @memberOf ProductsService
     */
    public getAll(): JQueryPromise<any> {
        return $.getJSON(`${this.url}`);
    }

    /**
     * @name getById
     * @description Get product by it's id
     * 
     * @param {number} id - id of the product
     * @returns {JQueryPromise<any>}
     * 
     * @memberOf ProductsService
     */
    public getById(id: number): JQueryPromise<any> {
        return $.getJSON(`${this.url}/${id}`);
    }

    /**
     * @name getByGroup
     * @description Get all products from group
     * 
     * @param {number} id - id of the group
     * @returns {JQueryPromise<any>}
     * 
     * @memberOf ProductsService
     */
    public getByGroup(id: number): JQueryPromise<any> {
        return $.getJSON(`${this.url}/group/${id}`);
    }

    /**
     * @name search
     * @description Search for product by title and/or groupId
     * 
     * @param {SearchData} data
     * @returns {JQueryPromise<any>}
     * 
     * @memberOf ProductsService
     */
    public search(data: SearchData): JQueryPromise<any> {
        return $.getJSON(`${AppConfig.apiUrl}/search`, data);
    }

    /**
     * @name add
     * @description Add new product to database
     * 
     * @param {*} data
     * @returns {JQueryPromise<any>}
     * 
     * @memberOf ProductsService
     */
    public add(data: IProduct): JQueryPromise<any> {
        return $.post(`${this.url}/add`, data);
    }

    /**
     * TODO
     * @name delete
     * @description Delete products from database
     * 
     * @param {number} id
     * 
     * @memberOf ProductsService
     */
    public delete(id: number) {
        // ...
    }
}