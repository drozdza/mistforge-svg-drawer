
MistForge.Classes.SvgDrawer.Model.prototype.setLine = function(lineName = false){
    if(lineName === false)
        lineName = this.LinesTab.iLines++;

    var Line = {
        N: lineName,
        subLines:[],
        S:{},
        Sclasses:{},
    };
    this.LinesTab[ lineName ] = Line;
}
MistForge.Classes.SvgDrawer.Model.prototype.switchLine = function(lineName){
    this.currentLine = lineName;
}

MistForge.Classes.SvgDrawer.Model.prototype.addPointToLine = function(){
    var L = this.LinesTab[ this.currentLine ];
    var pointName = this.currentPoint;

}

MistForge.Classes.SvgDrawer.Model.prototype.closeLine = function(){
    
}
