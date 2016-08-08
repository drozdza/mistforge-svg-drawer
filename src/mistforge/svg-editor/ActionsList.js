MistForge.Classes.SvgEditor.ActionsList = function(viewName){

    this.viewName = false;



    this.destruct = function(){
        delete MistForge.Objects.SvgEditor.ActionsListTab[this.viewName];
    }


    this.init = function(){

    }
    {   // Constructor
        this.viewName = viewName;
        this.init();
    }
}
