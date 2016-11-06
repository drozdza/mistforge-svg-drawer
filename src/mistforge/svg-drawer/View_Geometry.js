MistForge.Classes.SvgDrawer.View.prototype.geometry_setFunction = function(funcName, func){
    console.log('View.geometry_setFunction("'+funcName+'", func)');
    this.funcName = funcName;
    this.func = func;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_setTable = function(){
    console.log('View.geometry_setTable()');
    this.funcName = false;
    this.func = false;
    this.geoTab = {};
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_addTablePoint = function(x,y,pointData){
    console.log('View.geometry_addTablePoint('+x+', '+y+', pointData)'); console.log(pointData);
    var geoId = x+'_'+y;
    this.geoTab[ geoId ]= {x:x, y:y, q:0, z:1, D:pointData };
    this.currentGeoId = geoId;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_getCurrentPoint = function(){
    console.log('View.geometry_getCurrentPoint()');
    return this.currentGeoId;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_findNearestPoint = function(x,y){
    console.log('View.geometry_findNearestPoint("'+x+'", "'+y+'")');
    if(this.funcName === false){
        return this.geometry_findNearestPointInTab(x,y);
    }
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_findNearestPointInTab = function(x,y){
    console.log('View.geometry_findNearestPointInTab("'+x+'", "'+y+'")');
    var geoId = false;
    var uX,uY,uR = 1000000;
    for(var id in this.geoTab){
        uX = x - this.geoTab[id].x;
        uY = y - this.geoTab[id].y;
        uT = Math.sqrt(uX*uX- -uY*uY);
        if(uR > uT){
            geoId = id;
            uR = uT;
        }
    }
    if(geoId === false){
        MistForge.Objects.Errorer.E('View.geometry_findNearestPoint('+x+','+y+'): no point  found.');
        return false;
    }
    return geoId;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_removeTablePoint = function(geoId){
    console.log('View.geometry_removeTablePoint("'+geoId+'")');
    if(typeof this.geoTab[geoId] !== 'undefined'){
        delete(this.geoTab[geoId]);
    } else {
        MistForge.Objects.Errorer.E('View.geometry_removeTablePoint('+geoId+'): nothing to remove');
    }
}
