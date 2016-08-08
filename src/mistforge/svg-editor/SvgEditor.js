MistForge.Classes.SvgEditor = {};
MistForge.Classes.SvgEditor.SvgEditor = function(){

    this.ProjectChooser = false;

    this.ViewsChooser = false;
    this.ViewsList = false;

    this.ViewWindowTab = {};
    this.ViewSettingsTab = {};
    this.ModelsListTab = {};
    this.ActionsListTab = {};


    this.chooseProject = function(){
        this.ProjectChooser = new MistForge.Classes.SvgEditor.ProjectChooser();
    }

    this.openProject = function(){
        this.ProjectChooser.closePanel();

        this.ViewsChooser = new MistForge.Classes.SvgEditor.ViewsChooser();
    }

    this.showViewsList = function(){
        if(this.ViewsList === false){
            this.ViewsList = new MistForge.Classes.SvgEditor.ViewsList();
        }
        this.ViewsList.refresh();
    }

    this.new_ViewWindow = function(viewName){
        this.ViewWindowTab[viewName] = new MistForge.Classes.SvgEditor.ViewWindow(viewName);
    }

    this.new_ViewSettings = function(viewName){
        this.ViewSettingsTab[viewName] = new MistForge.Classes.SvgEditor.ViewSettings(viewName);
    }

    this.new_ModelsList = function(viewName){
        this.ModelsListTab[viewName] = new MistForge.Classes.SvgEditor.ModelsList(viewName);
    }

    this.new_ActionsList = function(viewName){
        this.ActionsListTab[viewName] = new MistForge.Classes.SvgEditor.ActionsList(viewName);
    }


    this.init = function(){
        if(typeof MistForge.Objects == 'undefined')
            MistForge.Objects = {};
        MistForge.Objects.SvgEditor = this;

        new MistForge.Classes.Windower.Windower();
        this.chooseProject();
    }
    {   // Constructor
        this.init();
    }






}
