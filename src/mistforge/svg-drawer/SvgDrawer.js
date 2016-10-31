MistForge.Classes.SvgDrawer = {};
MistForge.Classes.SvgDrawer.SvgDrawer = function(){

    this.Project = false;

    this.init = function(){
        if(typeof MistForge.Objects == 'undefined')
            MistForge.Objects = {};
        MistForge.Objects.SvgDrawer = this;
    }
    {   // Constructor
        this.init();
    }

    this.setProject = function(projectName){
        this.Project = new MistForge.Classes.SvgDrawer.Project(projectName);
        return this.Project;
    }

    this.setView = function(viewName, viewContainer){
        this.Project.setView(viewName, viewContainer);
    }


    this.project = function(searchProjectName){
        if(this.Project.projectName == searchProjectName){
            return this.Project;
        } else {
            MistForge.Objects.Errorer.E('SvgDrawer.project('+searchProjectName+'): no sush project.');
        }
    }

    this.view = function(searchViewName){
        if(this.Project === false){
            MistForge.Objects.Errorer.E('SvgDrawer.view('+searchViewName+'): Project not set.')
            return false;
        }

        for(var v in this.Project.ViewsTab)
            if(v == searchViewName)
                return this.Project.ViewsTab[v];

        MisrForge.Objects.Errorer.E('SvgDrawer.view('+searchViewName+'): not found.');
        return false;

    }

}
