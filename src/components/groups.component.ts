import { AppServices } from '../app.services';
import { IProductGroup } from '../interfaces/group.interface';

export class GroupsComponent {

    public groups: IProductGroup[] = [];
    public $groupsList = $('.list-groups');

    constructor() {
        AppServices.Groups.getAll()
            .then(response => {
                if (response.success) {
                    this.groups = response.data as IProductGroup[];
                    this.addGroupsToDOM();
                    // ...... 
                } else {
                    // ......
                }
            })
            .fail(e => {
                console.error(e);
            });
    }

    /**
     * @name addGroupsToDOM
     * @description Add groups to $groupsList
     * 
     * @memberOf GroupsComponent
     */
    public addGroupsToDOM() {
        let docFrag = document.createDocumentFragment();

        this.groups.forEach((group: IProductGroup) => {
            docFrag.appendChild(this.buildGroupHTML(group));
        });
        
        this.$groupsList.append(docFrag);
    }

    /**
     * @name buildGroupHTML
     * @description build group html
     * 
     * @param {IProductGroup} groupObj
     * @returns
     * 
     * @memberOf GroupsComponent
     */
    public buildGroupHTML(groupObj: IProductGroup) {
        let li = document.createElement('LI');
        li.innerHTML = groupObj.title;
        // .....
        return li;
    }

    /**
     * @name initEvents
     * @description Initialization method for events of group component
     * 
     * 
     * @memberOf GroupsComponent
     */
    public initEvents() {
        $('.view-all-prods-from-group').on('click', function () {
            $(document).trigger('show::products', [this.getAttribute('group-id')]);
        });
    }

    /**
     * @name initGroupsCarousel
     * @description Initialization method for bootstrap carousel
     * 
     * @param {*} options
     * 
     * @memberOf GroupsComponent
     */
    public initGroupsCarousel(options: any) {
        this.$groupsList.carousel(options);
    }
}