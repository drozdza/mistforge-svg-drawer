MistForge.Classes.SvgDrawer.View = function(viewName,viewCont,Project){

    this.viewName = false;
    this.viewCont = false;
    this.Project = false;
    this.Canvas = false;

    this.funcName = false;
    this.func = false;
    this.geoTab = {};

    this.viewPoint={x:0,y:0,zoom:1,w:100,h:100};

    this.ObjectsTab = {};
    this.iObject = 0;
    this.currentObject = false;

    this.initCanvas = function(){
        console.log('View.initCanvas()');
        this.Canvas = 2;
    }

    this.setCenter = function(x,y){
        console.log('View.setCenter('+x+','+y+')');
        this.viewPoint.x = x;
        this.viewPoint.y = y;
    }
    this.zoom = function(zoom){
        console.log('View.zoom('+zoom+')');
        this.viewPoint.zoom = zoom;
    }
    this.resize = function(){
        console.log('View.resize()');
        var Cont = $(this.viewCont);
        if(Cont){
            this.viewPoint.w = Cont.width();
            this.viewPoint.h = Cont.height();
        } else {
            MistForge.Objects.Errorer.E('View.resize('+this.viewCont+'): no canvas container found.');
        }
    }
    this.draw = function(){
        console.log('View.draw()');
        var O,o;

        for(o in this.ObjectsTab){
            O = this.ObjectsTab[o];
            this.prepareObjPos(O);
            this.prepareGroups(O);
            this.preparePoints(O);
            this.drawLines(O);
        }
    }

    this.prepareObjPos = function(O){
        console.log('View.prepareObjPos(O)'); console.log(O);
        var G = this.geoTab[ O.geoId ];
        O.GeoPos = {x:G.x, y:G.y, z:G.z, q:G.q};
    }
    this.prepareGroups = function(O){
        console.log('View.prepareGroups(O)'); console.log(O);
        var G,g;
        for(g in O.GroupsTab){
            G = O.GroupsTab[g];
            if(!G.Parent){
                // grupa powinna mieć jakieś oddalenie
                G.C = {};
                G.C.x = O.GeoPos.x- -O.GeoPos.z*G.r*Math.cos((G.q- -O.GeoPos.q)/(180*Math.PI));
                G.C.y = O.GeoPos.y- -O.GeoPos.z*G.r*Math.sin((G.q- -O.GeoPos.q)/(180*Math.PI));
                G.C.z = G.z*O.GeoPos.z;
                G.C.q = 0;
            }else{
                console.log('View.prepareGroups(): Liczmy po rodzicach');
            }
        }
    }
    this.findGroupInObject = function(O,name,from){
        console.log('View.findGroupInObject(O,"'+name+'","'+from+'")'); console.log(O);
        var fr = from.split('|');

        if(typeof O.GroupsTab[ fr[0]+'|'+fr[1]+'|'+name ] != undefined){
            return O.GroupsTab[ fr[0]+'|'+fr[1]+'|'+name ];
        }else{
            console.log('View.findGroupInObject(): jakieś globalne zasady szukania by się przydały [problem drzewka modułowego]');
        }
    }

    this.countCoordObj = function(A,B){
        console.log('View.countCoordObj(A,B)'); console.log(A); console.log(B);
        var C={};
        C.x = A.x- -A.z*B.r * Math.cos((B.q- -A.q)/(180*Math.PI));
        C.y = A.y- -A.z*B.r * Math.sin((B.q- -A.q)/(180*Math.PI));
        C.z = A.z;
        if(typeof B.z != 'undefined') C.z *=B.z;
        return C;
    }

    this.preparePoints = function(O){
        console.log('View.preparePoints(O)'); console.log(O);
        var G,P,p;
        for(p in O.PointsTab){
            P = O.PointsTab[p];
            G = this.findGroupInObject(O,P.G,p);
            P.C = this.countCoordObj(G.C,P);
        }
    }
    this.drawLines = function(O){
        console.log('View.drawLines(O)'); console.log(O);
        console.log(O.GroupsTab);
        var L,l,D,SL,sl,d;
        for(l in O.LinesTab){
            L = O.LinesTab[l];
            D = '';
            for(sl in L.subLines){
                SL = L.subLines[sl];
                D += 'M '+this.pointToString(O, l, SL.M);

                for(d in SL.D){
                    if(SL.D[d].T=='L')
                        D += 'L '+this.pointToString(O, l, SL.D[d].P);
                }
                if(SL.Z) D +='z';
            }
            console.log(D);
        }
    }

    this.pointToString = function(O, groupName, pointName){
        console.log('View.pointToString(O, "'+pointName+'")'); console.log(O);
        var P = this.findPointInObject(O, groupName, pointName);

        return P.C.x.toFixed(2)+' '+P.C.y.toFixed(2)+' ';
    }
    this.findPointInObject = function(O, groupName, pointName){
        console.log('View.findPointInObject(O, "'+groupName+'", "'+pointName+'")');
        var gnTab = groupName.split('|');
        var fullName = gnTab[0]+'|'+gnTab[1]+'|'+pointName
        if(typeof O.PointsTab[fullName] != 'undefined'){
            return O.PointsTab[fullName];
        }else{
            if(isNaN(pointName))
                for(var i in O.PointsTab)
                    if(i.split('|')[2] == pointNmae)
                        return O.PointsTab[i];
        }
        return false;
    }

    this.init = function(viewName, viewCont, Project){
        console.log('View.init("'+viewName+'", "'+viewCont+'", Project)');
        this.viewName = viewName;
        this.viewCont = viewCont;
        this.Project = Project;
        this.initCanvas();
    }
    {   // Constructor
        this.init(viewName,viewCont,Project);
    }
}
