MistForge.Classes.Windower.MainContainer = function( container_path ){

    this.container_path = false;
    this.sizeX = 0;
    this.sizeY = 0;

    this.init = function(){
        this.checkSize();

        if( !this.container_path ){
            this.container_path = 'body';
            $( window ).resize(function(){ MistForge.Objects.Windower.MainContainer.checkSize();  });
        } else {
            $( this.container_path ).resize(function(){ MistForge.Objects.Windower.MainContainer.checkSize();  });
        }

        $( this.container_path )
            .css({ overflow: 'hidden', position: 'relative' })
            .html('<div style="position: absolute; top: 0px; left: 0px; width: '+this.sizeX+'px; height: '+this.sizeY+'px;" id="MistForge_Windower_MainContainer"></div>');
    }

    this.checkSize = function(){
        var container = 'body';
        if(this.container_path) container = this.container_path
        this.sizeY = $( container ).height();
        this.sizeX = $( container ).width();
    }

    {   // Constructor
        this.container_path = container_path;
        this.init();
    }
}
