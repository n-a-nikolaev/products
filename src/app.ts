import { AppServices } from './app.services';
import { GroupsComponent } from './components/groups.component';
import { ListProductsComponent } from './components/list-products.component';

class App {
    constructor() {
        new GroupsComponent();    
        new ListProductsComponent();
    }
}

new App();