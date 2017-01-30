import { AppServices } from '../app.services';
import { IProduct } from '../interfaces/product.interface';

export class ListProductsComponent {
    public productsList: IProduct[] = [];
    public $productsList: any = $('.products-list');

    constructor() {
        AppServices.Products.getAll()
            .then(response => {
                if (response.success) {
                    this.productsList = response.data as IProduct[];
                    this.addProductsToDOM();
                } else {
                    //.....
                }
            })
            .fail(e => {
                console.error(e);
            })
    }

    public addProductsToDOM() {
        let docFrag = document.createDocumentFragment();

        this.productsList.forEach((product: IProduct) => {
            docFrag.appendChild(this.buildProductHTML(product));
        });

        this.$productsList.append(docFrag);
    }

    public buildProductHTML(prodObj: IProduct) {
        let li = document.createElement('LI');
        li.innerHTML = prodObj.title;
        // .....
        return li;
    }
}