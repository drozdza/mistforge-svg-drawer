MistForge.Classes.SvgDrawer.Model = function(modelName){

    this.modelName = false;

    this.GroupsTab = {iGroup:0};
    this.LinesTab = {iLine:0};
    this.PointsTab = {iPoint:0};

    this.currentGroup = false;
    this.currentLine = false;
    this.currentPoint = false;

    this.getName = function(){
        return this.modelName;
    }

    this.init = function(modelName){
        this.modelName = modelName;
    }
    this.init(modelName);
}
