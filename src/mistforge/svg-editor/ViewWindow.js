MistForge.Classes.SvgEditor.ViewWindow = function(viewName){

    this.viewName = false;



    this.destruct = function(){
        delete MistForge.Objects.SvgEditor.ViewWindowTab[this.viewName];
    }


    this.init = function(){

    }
    {   // Constructor
        this.viewName = viewName;
        this.init();
    }

}
