MistForge.Classes.SvgDrawer.Project = function(){

    this.FilesLists = {
        Views: {},
        Models: {},
        Animations: {}
    };
    this.projectName = false;

    this.ViewsTab = {};

    this.getFilesLists = function(){
        this.FilesLists = {
            Views: {},
            Models: {},
            Animations: {}
        };

        var AjaxAnswer = MistForge.Objects.Ajaxier.ask('projectFileLists',{projectName: this.projectName});

        this.FilesLists.Views = AjaxAnswer.Views;
        this.FilesLists.Models = AjaxAnswer.Models;
        this.FilesLists.Animations = AjaxAnswer.Animations;

        // ....
    }

    this.setProject = function(projectData){
        this.projectName = projectData.projectName;
        this.getFilesLists();
    }

    this.setView = function(viewData){
        var name = viewData.viewName;
        this.ViewsTab[ name ] = new MistForge.Classes.SvgDrawer.View(viewData);
    }

    this.init = function(){}
    {   // Constructor
        this.init();
    }
}
