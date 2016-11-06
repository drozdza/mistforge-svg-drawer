
MistForge.Classes.SvgDrawer.Model.prototype.setLine = function(lineName = false){
    console.log('Model.setLine("'+lineName+'")');
    if(lineName === false)
        lineName = this.iLine++;

    var Line = {
        N: lineName,
        subLines:[],
        S:{},
        Sclasses:{},
    };
    this.LinesTab[ lineName ] = Line;
    this.currentLine = lineName;
}
MistForge.Classes.SvgDrawer.Model.prototype.switchLine = function(lineName){
    console.log('Model.switchLine("'+lineName+'")');

    this.currentLine = lineName;
}

MistForge.Classes.SvgDrawer.Model.prototype.startLineAtPoint = function(){
    console.log('Model.startLineAtPoint()');
    var L = this.LinesTab[ this.currentLine ];
    var pointName = this.currentPoint;

    var sli = L.subLines.length;
    L.subLines[ sli ] = {
        M: pointName,
        D:[],
        Z:false,
    };

    this.currentSubLine = sli;
}

MistForge.Classes.SvgDrawer.Model.prototype.addPointToLine = function(lineType){
    console.log('Model.addPointToLine("'+lineType+'")');
    var L = this.LinesTab[ this.currentLine ];
    var pointName = this.currentPoint;

    var SL = L.subLines[ this.currentSubLine ];

    SL.D[ SL.D.length ]={
        T: lineType,
        P: pointName,
    };

    // console.log(L);
}

MistForge.Classes.SvgDrawer.Model.prototype.closeLine = function(){
    console.log('Model.closeLine()');
    var L = this.LinesTab[ this.currentLine ];
    if(L.subLines.length == 0){
        L.subLines[0] = {Z:true, T:[]};
    }else{
        L.subLines[ L.subLines.length -1].Z=true;
    }
}

MistForge.Classes.SvgDrawer.Model.prototype.openLine = function(){
    console.log('Model.openLine()');
    var L = this.LinesTab[ this.currentLine ];
    if(L.subLines.length == 0){
        L.subLines[0] = {Z:false, T:[]};
    }else{
        L.subLines[ L.subLines.length -1].Z=false;
    }
}
