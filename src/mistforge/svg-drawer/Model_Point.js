
MistForge.Classes.SvgDrawer.Model.prototype.setPoint = function(pointName = false,pointData){
    if(pointName === false)
        pointName = this.PointsTab.iPoints++;

    var Point = {
        N: pointName,
        subLines:[],
        S:{},
        Sclasses:{},
    };
    this.PointsTab[ pointName ] = Point;
}
MistForge.Classes.SvgDrawer.Model.prototype.switchPoint = function(pointName){
    this.currentPoint = pointName;
}
