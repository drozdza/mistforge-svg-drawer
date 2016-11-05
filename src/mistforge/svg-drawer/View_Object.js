
MistForge.Classes.SvgDrawer.View.prototype.setObject = function(objectName){
    if(objectName === false)
        objectName = this.iObject++;

    this.ObjectsTab[ objectName ]={
        ModelsTab: {},
        geoId: false,
        GeoPos: false,
        GroupsTab: {},
        PointsTab: {},
        LinesTab: {},
        ImgsTab: {},

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
    var x,O = this.ObjectsTab[ this.currentObject ];
    var modelI=0;
    while(typeof O.ModelsTab[modelName+'|'+modelI] != 'undefined') ++modelI;
    var mName = modelName+'|'+modelI;
    O.ModelsTab[ mName ] = motherGroup;

    var M = this.Project.ModelsTab[ modelName ];
    M.setObjectUse(this.viewName, this.currentObject);


    for(x in M.GroupsTab)
        O.GroupsTab[ mName+'|'+x ] = cloneObj(M.GroupsTab[x]);
    for(x in M.PointsTab)
        O.PointsTab[ mName+'|'+x ] = cloneObj(M.PointsTab[x]);
    for(x in M.LinesTab)
        O.LinesTab[ mName+'|'+x ] = cloneObj(M.LinesTab[x]);
    for(x in M.ImgsTab)
        O.ImgsTab[ mName+'|'+x ] = cloneObj(M.ImgsTab[x]);

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

MistForge.Classes.SvgDrawer.View.prototype.updateModelInObject = function(M, objectName = false){
    var mName,O;
    if(objectName)  O = this.ObjectsTab[ objectName ];
        else        O = this.ObjectsTab[ this.currentObject ];

    for(mName in O.ModelsTab)if(mName.split('|')[0] == M.modelName){
        for(x in M.GroupsTab)
            O.GroupsTab[ mName+'|'+x ] = cloneObj(M.GroupsTab[x]);
        for(x in M.PointsTab)
            O.PointsTab[ mName+'|'+x ] = cloneObj(M.PointsTab[x]);
        for(x in M.LinesTab)
            O.LinesTab[ mName+'|'+x ] = cloneObj(M.LinesTab[x]);
        for(x in M.ImgsTab)
            O.ImgsTab[ mName+'|'+x ] = cloneObj(M.ImgsTab[x]);
    }
    // console.log(Model);
}
MistForge.Classes.SvgDrawer.View.prototype.deleteModelFromObject = function(M, objectName = false){
    // ....
}

// MistForge.Classes.SvgDrawer.View.prototype.
// MistForge.Classes.SvgDrawer.View.prototype.
