System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor) {
                    this._element = $(seletor);
                }
                update(model) {
                    this._element.html(this.template(model));
                }
            };
            exports_1("View", View);
        }
    };
});
