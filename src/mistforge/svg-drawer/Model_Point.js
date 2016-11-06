
MistForge.Classes.SvgDrawer.Model.prototype.setPoint = function(pointName = false,pointData){
    console.log('Model.setPoint("'+pointName+'", pointData)'); console.log(pointData);
    if(pointName === false)
        pointName = this.iPoint++;

    if(pointData.T=='raw'){
        var groupPosObj = this.getGroupPosObj(this.currentGroup);
        pointRadObj = this.getPointRadObjRaw(groupPosObj, pointData.x, pointData.y);
    }

    var Point = pointRadObj;
    Point.N = pointName;
    Point.G = this.currentGroup;
    Point.C = {}; // counted positions
    Point.C.x = pointData.x;
    Point.C.y = pointData.y;
    this.PointsTab[ pointName ] = Point;
    this.currentPoint = pointName;
}
MistForge.Classes.SvgDrawer.Model.prototype.switchPoint = function(pointName){
    console.log('Model.switchPoint("'+pointName+'")');
    this.currentPoint = pointName;
}

MistForge.Classes.SvgDrawer.Model.prototype.getPointRadObjRaw = function(groupPosObj,x,y){
    console.log('Model.getPointRadObjRaw(groupPosObj, '+x+', '+y+')'); console.log(groupPosObj);
    var vX = groupPosObj.x - x;
    var vY = groupPosObj.y - y;

    var Q = Math.atan2(vX,vY)*180/Math.PI;
    var R = Math.sqrt(vX*vX- -vY*vY)/groupPosObj.z;

    return posObj = {q:Q, r:R};
}
