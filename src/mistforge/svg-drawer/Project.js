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
        console.log('Project.loadProjectFromJSON(projectJSON)'); console.log(projectJSON);
        this.projectData = cloneObj(projectJSON);
        if(projectJSON.ViewsTab)
            this.ViewsTab = cloneObj(projectJSON.ViewsTab);
        // ...
    }

    this.saveProject = function(){
        console.log('Project.saveProject()');
        var projectJSON = cloneObj(this.projectData);
        projectJSON.ViewsTab = cloneObj(this.ViewsTab);

        // ....
        return projectJSON;
    }

    this.setView = function(viewName, viewCont){
        console.log('Project.setView("'+viewName+'", "'+viewCont+'")');

        this.ViewsTab[ viewName ] = new MistForge.Classes.SvgDrawer.View(viewName,viewCont,this);
        this.currentView = viewName;
        return this.ViewsTab[ viewName ];
    }
    this.setModel = function(modelName){
        console.log('Project.setModel("'+modelName+'")');
        this.ModelsTab[ modelName ] = new MistForge.Classes.SvgDrawer.Model(modelName,this);
        this.currentModel = modelName;
        return this.ModelsTab[ modelName ];

    }


    this.view = function(searchViewName){
        console.log('Project.view("'+searchViewName+'")');
        for(var v in this.ViewsTab)
            if(v == searchViewName)
                return this.ViewsTab[v];

        MisrForge.Objects.Errorer.E('SvgDrawer.Project.view('+searchViewName+'): not found.');
        return false;
    }

    this.model = function(searchModelName){
        console.log('Project.model("'+searchModelName+'")');
        for(var v in this.ModelsTab)
            if(v == searchModelName)
                return this.ModelsTab[v];

        MisrForge.Objects.Errorer.E('SvgDrawer.Project.model('+searchModelName+'): not found.');
        return false;
    }


    this.init = function(projectName){
        console.log('Project.init("'+projectName+'")');
        this.projectName = projectName;
    }
    {   // Constructor
        this.init(projectName);
    }
}
