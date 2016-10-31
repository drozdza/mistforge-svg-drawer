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

    // this.getFilesLists = function(){
    //     this.FilesLists = {
    //         Views: {},
    //         Models: {},
    //         Animations: {}
    //     };
    //
    //     var AjaxAnswer = MistForge.Objects.Ajaxier.ask('projectFileLists',{projectName: this.projectName});
    //
    //     this.FilesLists.Views = AjaxAnswer.Views;
    //     this.FilesLists.Models = AjaxAnswer.Models;
    //     this.FilesLists.Animations = AjaxAnswer.Animations;
    //
    //     // ....
    // }

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

    this.setView = function(viewName){
        this.ViewsTab[ viewName ] = new MistForge.Classes.SvgDrawer.View(viewName);
        return this.ViewsTab[ viewName ];
    }
    this.setModel = function(modelName){
        this.ModelsTab[ modelName ] = new MistForge.Classes.SvgDrawer.Model(modelName);
        return this.ModelsTab[ modelName ];

    }

    this.init = function(projectName){
        this.projectName = projectName;
    }
    {   // Constructor
        this.init(projectName);
    }
}
