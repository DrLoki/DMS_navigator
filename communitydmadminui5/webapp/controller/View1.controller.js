sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";
    return Controller.extend("com.sap.sample.sdm", {
        onInit: function () {
            /* OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps */
            //this.getView().byId("sdi-container").setSettings({
            //    "repositoryId": "958dc972-c845-44ff-8a97-4badab151bfe", // REPOSITORY_ID
            //    "objectId": "b4725a7000298277c993cc26", // OBJECT_ID
            //    "forceLoad": false
            //});
        },
        // registered event handler for 'componentCreated' event of Component Container
        onComponentCreated: function (oEvent) {
            this._oDocumentTable = oEvent.getParameter("component");
            /* OPTIONAL: set a folder as home folder */
            //this._oDocumentTable.setHomeFolder("b4725a7000298277c993cc26"); // OBJECT_ID
            /* OPTIONAL: request a navigation to a repository & folder during runtime */
            //this._oDocumentTable.requestNavigationAndOpen("958dc972-c845-44ff-8a97-4badab151bfe", "b4725a7000298277c993cc26"); // REPOSITORY_ID, OBJECT_ID
        }
    });
});
