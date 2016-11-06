MistForge.Classes.SvgDrawer.Model = function(modelName,Project){

    this.modelName = false;
    this.Project = false;

    this.GroupsTab = {};
    this.iGroup = 0;
    this.LinesTab = {};
    this.iLine = 0;
    this.PointsTab = {};
    this.iPoint = 0;

    this.usedInObjects = {};

    this.currentGroup = false;
    this.currentPoint = false;
    this.currentLine = false;
    this.currentSubLine = false;

    this.getName = function(){
        console.log('Model.getName()');
        return this.modelName;
    }

    this.setObjectUse = function(viewName, objectName){
        console.log('Model.setObjectUse("'+viewName+'", "'+objectName+'")');
        if(typeof this.usedInObjects[viewName] == 'undefined')
            this.usedInObjects[viewName] = {};
        this.usedInObjects[viewName][objectName] = true;
    }
    this.unsetObjectUse = function(viewName, objectName){
        console.log('Model.unsetObjectUse("'+viewName+'", "'+objectName+'")');
        delete(this.usedInObjects[viewName][objectName]);
        if(objectEmpty(this.usedInObjects[viewName]))
            delete(this.usedInObjects[viewName]);
    }
    this.updateObjects = function(){
        console.log('Model.updateObjects()');
        for(var v in this.usedInObjects){
            var V = this.Project.view(v);
            for(var o in this.usedInObjects[v])
                V.updateModelInObject(this,o);
        }
    }



    this.init = function(modelName,Project){
        console.log('Model.init("'+modelName+'", Project)');
        this.modelName = modelName;
        this.Project = Project;
    }
    this.init(modelName,Project);
}
