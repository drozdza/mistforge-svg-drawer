MistForge.Classes.SvgDrawer.View = function(viewName,viewCont,Project){

    this.viewName = false;
    this.viewCont = false;
    this.Project = false;
    this.Canvas = false;

    this.funcName = false;
    this.func = false;
    this.geoTab = {};

    this.viewPoint={x:0,y:0,zoom:1,w:100,h:100};

    this.ObjectsTab={iObject:0};
    this.currentObject = false;

    this.initCanvas = function(){
        this.Canvas = 2;
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
        if(Cont){
            this.viewPoint.w = Cont.width();
            this.viewPoint.h = Cont.height();
        } else {
            MistForge.Objects.Errorer.E('View.resize('+this.viewCont+'): no canvas container found.');
        }
    }
    this.draw = function(){
        console.log(this);
        // ....
    }

    this.init = function(viewName, viewCont, Project){
        this.viewName = viewName;
        this.viewCont = viewCont;
        this.Project = Project;
        this.initCanvas();
    }
    {   // Constructor
        this.init(viewName,viewCont,Project);
    }
}
