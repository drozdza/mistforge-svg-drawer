MistForge.Classes.Helper.Errorer = function(){

    this.E = function(x){
        console.log(x);
    }

    this.init = function(){
        MistForge.Objects.Errorer = this;
    }

    this.init();
}

new MistForge.Classes.Helper.Errorer();
