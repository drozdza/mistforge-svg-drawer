MistForge.Classes.SvgEditor = {};
MistForge.Classes.SvgEditor.SvgEditor = function(){

    this.ProjectChooser = false;

    this.ViewsChooser = false;
    this.ViewsList = false;


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
