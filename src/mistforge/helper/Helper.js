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

function cloneObj(obj){
    var copy;
    if (null == obj || "object" != typeof obj) return obj;
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneObj(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = cloneObj(obj[attr]);
        }
        return copy;
    }
}
