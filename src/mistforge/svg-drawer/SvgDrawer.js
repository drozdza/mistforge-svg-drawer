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


    this.setProject = function(projectData){
        this.Project = new MistForge.Classes.SvgDrawer.Project();
        this.Project.setProject(projectData);
    }

    this.setProjectByName = function(projectName){
        this.Project = new MistForge.Classes.SvgDrawer.Project();
        this.Project.setProject({projectName: projectName});
    }


    this.setView = function(viewData){
        this.Project.setView(viewData);
    }

}
