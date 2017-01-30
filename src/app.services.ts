import { GroupService } from './services/groups.service';
import { ProductsService } from './services/products.service';

export const AppServices = {
    Groups: new GroupService(),
    Products: new ProductsService()
}