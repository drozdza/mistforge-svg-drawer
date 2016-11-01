
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

MistForge.Classes.SvgDrawer.View.prototype.addObjectToGeoPoint = function(geoId){
    this.ObjectsTab[ this.currentObject ].geoId = geoId;
}

MistForge.Classes.SvgDrawer.View.prototype.addModelToObject = function(modelName, motherGroup = false){
    var O = this.ObjectsTab[ this.currentObject ];
    O.ModelsTab[ modelName ] = motherGroup;

    var M = this.Project.ModelsTab[ modelName ];
    M.setObjectUse(this.viewName, this.currentObject);

    this.updateModelInObject(M);
}

MistForge.Classes.SvgDrawer.View.prototype.getObjectPosObj = function(objectName){
    var O = this.ObjectsTab[ objectName ];

    // jeśli mamy tablicę geometrii:
    var G = this.geoTab[ O.geoId ];
    return posObj = {x:G.x, y:G.y, z:G.z, q:G.q};
    // ....
    // jeśli na niczym nie leży
}

MistForge.Classes.SvgDrawer.View.prototype.updateModelInObject = function(Model){
    console.log(Model);



}
// MistForge.Classes.SvgDrawer.View.prototype.
// MistForge.Classes.SvgDrawer.View.prototype.
