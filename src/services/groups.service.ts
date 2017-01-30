import { AppConfig } from '../app.config';

export class GroupService {
    private url: string = `${AppConfig.apiUrl}/groups`;

    /**
     * @name getAll
     * @description Get all product groups
     * 
     * @returns {JQueryPromise<any>}
     * 
     * @memberOf GroupService
     */
    public getAll(): JQueryPromise<any> {
        return $.getJSON(`${this.url}`);
    }

    /**
     * @name getById
     * @description Get product group by it's id
     * 
     * @param {number} id - id of the group
     * @returns {JQueryPromise}
     * 
     * @memberOf GroupService
     */
    public getById(id: number): JQueryPromise<any> {
        return $.getJSON(`${this.url}/${id}`);
    }
}