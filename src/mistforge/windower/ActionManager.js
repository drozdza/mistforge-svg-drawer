MistForge.Classes.Windower.ActionManager = function(){

    this.doingAction = false;
    this.moving = false;
    this.resizing = false;
    this.windowModifying = false;

    this.startingX = 0;
    this.startingY = 0;

    this.closeAs = 10;

    this.LinesOfInterest = {X:[0],Y:[0]};

    this.init = function(){

        $('body').append('<div id="MistForge_Windower_ActionHelper"></div>');  // !!!! 'body' to change

        $('body').on('mousedown','.MistForge_Windower_Window_Move', function(e){
            MistForge.Objects.Windower.ActionManager.mousedown_Window_Move(e, $(this).attr('iWindow') );
        });
        $('body').on('mousedown','.MistForge_Windower_Window_Resize', function(e){
            MistForge.Objects.Windower.ActionManager.mousedown_Window_Resize(e, $(this).attr('iWindow') );
        });
        $('body').on('click','.MistForge_Windower_Window_Content', function(){
            MistForge.Objects.Windower.ActionManager.mousedown_Window_Click( $(this).attr('iWindow') );
        });

        $('body').on('click','.MistForge_Windower_Window_TabName', function(){
            MistForge.Objects.Windower.ActionManager.click_Window_TabName( $(this).attr('iWindow'), $(this).attr('iTab') );
        });


        $('body').on('mouseup', function(){
            MistForge.Objects.Windower.ActionManager.mouseup();
        });
        $('body').on('mousemove', function(e){
            MistForge.Objects.Windower.ActionManager.mousemove(e);
        });

        this.hideActionHelper();
    }

    this.mousedown_Window_Move = function(e,iWindow){
        this.doingAction = true;
        this.moving = true;

        this.windowModifying = iWindow;

        this.buildLinesOfInterest();
        this.getWindowProps();
        this.showActionHelper();
    }

    this.mousedown_Window_Resize = function(e,iWindow){
        this.doingAction = true;
        this.resizing = true;

        this.windowModifying = iWindow;

        this.buildLinesOfInterest();
        this.getWindowProps();
        this.showActionHelper();
    }

    this.mousedown_Window_Click = function(iWindow){
        MistForge.Objects.Windower.windowToTop(iWindow);
    }

    this.mouseup = function(){
        if(!this.doingAction) return 1;

        if(this.moving){
            MistForge.Objects.Windower.WindowTab[ this.windowModifying ].changeWindowPosition(this.newX,this.newY);
            this.moving = false;
        }

        if(this.resizing){
            MistForge.Objects.Windower.WindowTab[ this.windowModifying ].changeWindowSize(this.newW,this.newH);
            this.resizing = false;
        }

        this.doingAction = false;
        this.hideActionHelper();
    }

    this.mousemove = function(e){
        if(!this.doingAction) return 1;

        if(this.moving)   this.tryMove(e.clientX,e.clientY);
        if(this.resizing) this.tryResize(e.clientX,e.clientY);

        this.showActionHelper();
    }

    this.buildLinesOfInterest = function(){
        this.LinesOfInterest = {X:[0],Y:[0]};
        var WinT = MistForge.Objects.Windower.WindowTab;
        for(var w in WinT){
            var W = WinT[w];
            this.LinesOfInterest.X[ this.LinesOfInterest.X.length ] = W.positionX;
            this.LinesOfInterest.X[ this.LinesOfInterest.X.length ] = W.positionX- -W.positionW;
            this.LinesOfInterest.Y[ this.LinesOfInterest.Y.length ] = W.positionY;
            this.LinesOfInterest.Y[ this.LinesOfInterest.Y.length ] = W.positionY- -W.positionH;
        }
    }

    this.tryMove = function(X,Y){
        var Win = MistForge.Objects.Windower.WindowTab[ this.windowModifying ];

        var boundaryX = MistForge.Objects.Windower.MainContainer.sizeX - this.newW;
        var boundaryY = MistForge.Objects.Windower.MainContainer.sizeY - this.newH;
        if(X > boundaryX) X = boundaryX;
        if(Y > boundaryY) Y = boundaryY;

        for(var iX in this.LinesOfInterest.X){
            var uX = this.LinesOfInterest.X[iX];
            if(uX - this.closeAs < X && uX- -this.closeAs > X) X = uX;
            if(uX - this.closeAs < X- -this.newW && uX- -this.closeAs > X- -this.newW) X = uX-this.newW;
        }
        for(var iY in this.LinesOfInterest.Y){
            var uY = this.LinesOfInterest.Y[iY];
            if(uY - this.closeAs < Y && uY- -this.closeAs > Y) Y = uY;
            if(uY - this.closeAs < Y- -this.newH && uY- -this.closeAs > Y- -this.newH) Y = uY-this.newH;
        }

        this.newX = X;
        this.newY = Y;
    }
    this.tryResize = function(x,y){
        var Win = MistForge.Objects.Windower.WindowTab[ this.windowModifying ];
        var W = x - this.newX;
        var H = y - this.newY;

        if(Win.minimalWidth > W) W = Win.minimalWidth;
        if(Win.minimalHeight > H) H = Win.minimalHeight;


        for(var iX in this.LinesOfInterest.X){
            var uX = this.LinesOfInterest.X[iX];
            if(uX - this.closeAs < x && uX- -this.closeAs > x) W = uX-this.newX;
        }
        for(var iY in this.LinesOfInterest.Y){
            var uY = this.LinesOfInterest.Y[iY];
            if(uY - this.closeAs < y && uY- -this.closeAs > y) H = uY-this.newY;
        }

        if(Win.proposedWidth - this.closeAs < W && Win.proposedWidth- -this.closeAs > W) W = Win.proposedWidth;
        if(Win.proposedHeight - this.closeAs < H && Win.proposedHeight- -this.closeAs > H) H = Win.proposedHeight;

        this.newW = W;
        this.newH = H;
    }


    this.click_Window_TabName = function(iWindow, iTab){
        MistForge.Objects.Windower.openTabInWindow(iWindow,iTab);
    }


    this.getWindowProps = function(){
        var Win = MistForge.Objects.Windower.WindowTab[ this.windowModifying ];
        this.newX = Win.positionX;
        this.newY = Win.positionY;
        this.newW = Win.positionW;
        this.newH = Win.positionH;
    }

    this.showActionHelper = function(){
        $('#MistForge_Windower_ActionHelper').css({
            top: this.newY+'px',
            left: this.newX+'px',
            width: this.newW+'px',
            height: this.newH+'px'
        });
    }
    this.hideActionHelper = function(){
        $('#MistForge_Windower_ActionHelper').css({
            top: '-100px',
            left: '-100px',
            width: '0px',
            height: '0px'
        });
    }

    {   // Constructor
        this.init();
    }
}
