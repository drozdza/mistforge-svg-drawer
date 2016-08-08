MistForge.Classes.SvgEditor.ModelsList = function(viewName){

    this.viewName = false;



    this.destruct = function(){
        delete MistForge.Objects.SvgEditor.ModelsListTab[this.viewName];
    }


    this.init = function(){

    }
    {   // Constructor
        this.viewName = viewName;
        this.init();
    }
}
