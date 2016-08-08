MistForge.Classes.SvgEditor.ViewSettings = function(viewName){

    this.viewName = false;



    this.destruct = function(){
        delete MistForge.Objects.SvgEditor.ViewSettingsTab[this.viewName];
    }


    this.init = function(){

    }
    {   // Constructor
        this.viewName = viewName;
        this.init();
    }
}
