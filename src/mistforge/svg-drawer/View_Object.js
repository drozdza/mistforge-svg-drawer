
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

MistForge.Classes.SvgDrawer.View.prototype.getObjectPosObj = function(objectName){
    var O = this.ObjectsTab[ objectName ];

    // jeśli mamy tablicę geometrii:
    var G = this.geoTab[ O.geoId ];
    return posObj = {x:G.x, y:G.y, z:G.z, q:G.q};
    // ....
    // jeśli na niczym nie leży


}
