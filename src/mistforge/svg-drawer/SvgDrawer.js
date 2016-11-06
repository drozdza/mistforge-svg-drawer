MistForge.Classes.SvgDrawer = {};
MistForge.Classes.SvgDrawer.SvgDrawer = function(){

    this.Project = false;

    this.init = function(){
        console.log('SvgDrawer.init()');
        if(typeof MistForge.Objects == 'undefined')
            MistForge.Objects = {};
        MistForge.Objects.SvgDrawer = this;
    }
    {   // Constructor
        this.init();
    }

    this.setProject = function(projectName){
        console.log('SvgDrawer.setProject("'+projectName+'")');
        this.Project = new MistForge.Classes.SvgDrawer.Project(projectName);
        return this.Project;
    }

    this.setView = function(viewName, viewContainer){
        console.log('SvgDrawer.setView("'+viewName+'", "'+viewContainer+'")');
        this.Project.setView(viewName, viewContainer);
    }


    this.project = function(searchProjectName){
        console.log('SvgDrawer.project("'+searchProjectName+'")');

        if(this.Project.projectName == searchProjectName){
            return this.Project;
        } else {
            MistForge.Objects.Errorer.E('SvgDrawer.project('+searchProjectName+'): no sush project.');
        }
    }

    this.view = function(searchViewName){
        console.log('SvgDrawer.view("'+searchViewName+'")');
        if(this.Project === false){
            MistForge.Objects.Errorer.E('SvgDrawer.view('+searchViewName+'): Project not set.')
            return false;
        }

        return this.Project.view(searchViewName);
    }

    this.model = function(searchModelName){
        console.log('SvgDrawer.model("'+searchModelName+'")');
        if(this.Project === false){
            MistForge.Objects.Errorer.E('SvgDrawer.model('+searchModelName+'): Project not set.')
            return false;
        }

        return this.Project.model(searchModelName);
    }

}
