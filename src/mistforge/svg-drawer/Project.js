MistForge.Classes.SvgDrawer.Project = function(projectName){

    this.projectName = false;
    this.projectData = {};

    this.FilesLists = {
        Views: {},
        Models: {},
        Animations: {}
    };
    this.ViewsTab = {};
    this.ModelsTab = {};

    this.currentView = false;
    this.currentMode = false;

    this.loadProjectFromJSON = function(projectJSON){
        this.projectData = cloneObj(projectJSON);
        if(projectJSON.ViewsTab)
            this.ViewsTab = cloneObj(projectJSON.ViewsTab);
        // ...
    }

    this.saveProject = function(){
        var projectJSON = cloneObj(this.projectData);
        projectJSON.ViewsTab = cloneObj(this.ViewsTab);

        // ....
        return projectJSON;
    }

    this.setView = function(viewName, viewCont){
        this.ViewsTab[ viewName ] = new MistForge.Classes.SvgDrawer.View(viewName,viewCont,this);
        this.currentView = viewName;
        return this.ViewsTab[ viewName ];
    }
    this.setModel = function(modelName){
        this.ModelsTab[ modelName ] = new MistForge.Classes.SvgDrawer.Model(modelName,this);
        this.currentModel = modelName;
        return this.ModelsTab[ modelName ];

    }


    this.view = function(searchViewName){
        for(var v in this.ViewsTab)
            if(v == searchViewName)
                return this.ViewsTab[v];

        MisrForge.Objects.Errorer.E('SvgDrawer.Project.view('+searchViewName+'): not found.');
        return false;
    }

    this.model = function(searchModelName){
        for(var v in this.ModelsTab)
            if(v == searchModelName)
                return this.ModelsTab[v];

        MisrForge.Objects.Errorer.E('SvgDrawer.Project.model('+searchModelName+'): not found.');
        return false;
    }


    this.init = function(projectName){
        this.projectName = projectName;
    }
    {   // Constructor
        this.init(projectName);
    }
}
