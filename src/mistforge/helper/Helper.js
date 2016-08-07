MistForge = {};
MistForge.Classes = {};
MistForge.Objects = {};

MistForge.Classes.Helper = {};


MistForge.Classes.Helper.Helper = function(){

    this.check_fileName = function(fileName){
        if(fileName.length == 0) return true;
        // ....
        // other validation methods
        return false;
    }

    this.init = function(){
        MistForge.Objects.Helper = this;
    }
    {   // Constructor
        this.init();
    }
}


new MistForge.Classes.Helper.Helper();
