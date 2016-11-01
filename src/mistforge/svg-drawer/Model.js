MistForge.Classes.SvgDrawer.Model = function(modelName,Project){

    this.modelName = false;
    this.Project = false;

    this.GroupsTab = {iGroup:0};
    this.LinesTab = {iLine:0};
    this.PointsTab = {iPoint:0};

    this.usedInObjects = {};

    this.currentGroup = false;
    this.currentLine = false;
    this.currentPoint = false;

    this.getName = function(){
        return this.modelName;
    }

    this.setObjectUse = function(view,object){
        if(typeof this.usedInObjects[view] == 'undefined')
            this.usedInObjects[view] = {};
        this.usedInObjects[view][object] = true;
    }
    this.unsetObjectUse = function(view,object){
        delete(this.usedInObjects[view][object]);
        if(objectEmpty(this.usedInObjects[view]))
            delete(this.usedInObjects[view]);
    }
    this.updateObjects = function(){
        for(var v in this.usedInObjects){
            var V = this.Project.view(v);
            for(var o in this.usedInObjects[v])
                V.updateModelInObject(o,this);
        }
    }



    this.init = function(modelName,Project){
        this.modelName = modelName;
        this.Project = Project;
    }
    this.init(modelName,Project);
}
