MistForge.Classes.Windower = {};
MistForge.Classes.Windower.Windower = function(container_path){

    this.container_path = false;

    this.MainContainer = false;
    this.MenuBar = false;
    this.ActionManager = false;

    this.WindowTab = {};
    this.ContentContainerTab = {};
    this.iWindowTab = 0;

    this.WindowLayers = [];

    this.init = function(){
        if(typeof MistForge.Objects == 'undefined'){
            MistForge.Objects = {};
        }
        MistForge.Objects.Windower = this;

        if(this.container_path) this.MainContainer = new MistForge.Classes.Windower.MainContainer(this.container_path);
                else            this.MainContainer = new MistForge.Classes.Windower.MainContainer();

        this.MenuBar = new MistForge.Classes.Windower.MenuBar();
        this.ActionManager = new MistForge.Classes.Windower.ActionManager();
    }

    {   // Constructor
        this.container_path = container_path;
        this.init();
    }

    this.setNewContent = function(dataSet){
        var name = dataSet.name;

        this.ContentContainerTab[ name ] = new MistForge.Classes.Windower.ContentContainer(dataSet);

        return this.ContentContainerTab[ name ];
    }

    this.setNewWindow = function(){
        var i = this.iWindowTab++;
        this.WindowTab[ i ] = new MistForge.Classes.Windower.Window(i);
        this.WindowLayers[ i ] = i;
        return this.WindowTab[ i ];
    }

    this.setMenuBarPosition = function(vertical,horizontal,orientation){
        this.MenuBar.setPosition(vertical,horizontal,orientation);
    }

    this.windowToTop = function(iU){
        var iMax = 0;
        var iLast = 0;
        var go=false;

        for(var i in this.WindowLayers){
            iMax = i;
            if(go)
                this.WindowLayers[iLast] = this.WindowLayers[i];
            if(this.WindowLayers[i] == iU)
                go = true;
            iLast = i;
        }
        this.WindowLayers[iMax] = iU;

        for(var i in this.WindowLayers){
            $('#MistForge_Windower_Window_'+this.WindowLayers[i]).css({"z-index": i});
        }
    }

    this.openTabInWindow = function(iWindow,iTab){
        this.WindowTab[ iWindow ].openTab(iTab);
    }
}
