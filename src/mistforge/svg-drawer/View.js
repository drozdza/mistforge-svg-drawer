MistForge.Classes.SvgDrawer.View = function(viewName){

    this.viewName = false;
    this.viewCont = false;
    this.Canvas = false;

    this.funcName = false;
    this.func = false;
    this.geoTab = {};

    this.viewPoint={x:0,y:0,zoom:1,w:100,h:100};

    this.ObjectsTab={iObject:0};
    this.currentObject = false;

    this.init = function(viewName, viewCont){
        this.viewName = viewName;
        this.viewCont = viewCont;
        this.Canvas = 2;
    }
    {   // Constructor
        this.init(viewName);
    }


    this.setCenter = function(x,y){
        this.viewPoint.x = x;
        this.viewPoint.y = y;
    }
    this.zoom = function(zoom){
        this.viewPoint.zoom = zoom;
    }
    this.resize = function(){
        var Cont = $(this.viewCont);
        this.viewPoint.w = Cont.width();
        this.viewPoint.h = Cont.height();
    }
    this.draw = function(){
        // ....
    }

}
