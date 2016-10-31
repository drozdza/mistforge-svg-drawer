
MistForge.Classes.SvgDrawer.View.prototype.setObject = function(objectName){
    if(objectName === false)
        objectName = this.ObjectsTab.iObject++;

    this.ObjectsTab[ objectName ]={
        ModelsTab: {},
        geoId: false,
    };
    this.currentObject = objectName;
}
MistForge.Classes.SvgDrawer.View.prototype.switchObject = function(objectName){
    this.currentObject = objectName;
}

MistForge.Classes.SvgDrawer.View.prototype.addObjectToPoint = function(geoId){
    this.ObjectsTab[ this.currentObject ].geoId = geoId;
}

MistForge.Classes.SvgDrawer.View.prototype.addModelToObject = function(modelName){
    var O = this.ObjectsTab[ this.currentObject ];
    O.ModelsTab[ modelName ] = false;
}
