MistForge.Classes.SvgDrawer.View.prototype.geometry_setFunction = function(funcName, func){
    this.funcName = funcName;
    this.func = func;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_setTable = function(){
    this.funcName = false;
    this.func = false;
    this.geoTab = {};
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_addTablePoint = function(x,y,pointData){
    var geoId = x+'_'+y;
    this.geoTab[ geoId ]= {x:x, y:y, D:pointData };
    this.currentGeoId = geoId;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_getCurrentPoint = function(){
    return this.currentGeoId;
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_findNearestPoint = function(x,y){

    if(this.funcName === false){
        return this.geometry_findNearestPointInTab(x,y);
    }
}
MistForge.Classes.SvgDrawer.View.prototype.geometry_findNearestPointInTab = function(x,y){
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
    if(typeof this.geoTab[geoId] !== 'undefined'){
        delete(this.geoTab[geoId]);
    } else {
        MistForge.Objects.Errorer.E('View.geometry_removeTablePoint('+geoId+'): nothing to remove');
    }
}
