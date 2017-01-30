System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GroupService;
    return {
        setters:[],
        execute: function() {
            GroupService = (function () {
                function GroupService() {
                    this.groupUrl = 'http://products-api/groups';
                }
                GroupService.prototype.getAll = function () {
                    return $.getJSON("" + this.groupUrl);
                };
                GroupService.prototype.getById = function (id) {
                };
                return GroupService;
            }());
            exports_1("GroupService", GroupService);
        }
    }
});
//# sourceMappingURL=groups.service.js.map