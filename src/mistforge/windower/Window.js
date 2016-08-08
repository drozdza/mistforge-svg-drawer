MistForge.Classes.Windower.Window = function(i){

    this.iWindow = 0;
    this.ContentTab = {};
    this.iContentTab = 0;
    this.currentTab = false;

    this.positionX = 0;
    this.positionY = 0;

    this.positionW = 150;
    this.positionH = 300;

    this.dataClosed = {};



    this.addContent = function(ContentObject){
        var i = this.iContentTab++;
        ContentObject.addWindow(this);
        this.ContentTab[ i ] = ContentObject;

        console.log(ContentObject);

        this.getContentProperties();
        this.positionW = this.proposedWidth;
        this.positionH = this.proposedHeight;
        this.positionWindow();
        this.drawWindowContent();
    }

    this.getContentProperties = function(){
        var min = 30;
        this.proposedWidth = min;
        this.proposedHeight = min;
        this.minimalWidth = min;
        this.minimalHeight = min;

        for(var i in this.ContentTab)
            for(var j in {proposedWidth:1, proposedHeight:1, minimalWidth:1, minimalHeight:1})
                if(this.ContentTab[i][j] > this[j]) this[j] = this.ContentTab[i][j];
    }

    this.drawWindow = function(){
        var html='';

        html += '<div id="MistForge_Windower_Window_'+this.iWindow+'" class="MistForge_Windower_Window">';
            html += '<span class="MistForge_Windower_Window_Menu">';
                html += '<span id="MistForge_Windower_Window_TabNames_'+this.iWindow+'" class="MistForge_Windower_Window_TabNames"></span>';
                html += '<div class="MistForge_Windower_Window_Move" iWindow="'+this.iWindow+'">M</div>';
                html += '<div class="MistForge_Windower_Window_Close" iWindow="'+this.iWindow+'">X</div>';
                html += '<div class="MistForge_Windower_Window_Resize" iWindow="'+this.iWindow+'">U</div>';
            html += '</span>';
            html += '<div class="MistForge_Windower_Window_Content" iWindow="'+this.iWindow+'"></div>';
        html += '</div>';

        $('#MistForge_Windower_MainContainer').append(html);

        this.positionWindow();
    }

    this.moveToCenter = function(){
        this.positionX = parseInt((MistForge.Objects.Windower.MainContainer.sizeX - this.positionW)/2);
        this.positionY = parseInt((MistForge.Objects.Windower.MainContainer.sizeY - this.positionH)/2);
        this.positionWindow();
    }

    this.positionWindow = function(){
        $('#MistForge_Windower_Window_'+this.iWindow).css({
            top: this.positionY+'px',
            left: this.positionX+'px',
            width: this.positionW+'px',
            height: this.positionH+'px'
        });
    }

    this.drawWindowContent = function(){
        var html = '';
        var tabNamesHtml = '';
        var windowsNum = 0;
        var firstTab = false;
        for(var i in this.ContentTab){
            ++windowsNum;
            if(firstTab === false) firstTab = i;
        }

        if(windowsNum < 2){
            html = this.ContentTab[ firstTab ].printHtml();
        }else{
            for(var i in this.ContentTab)
                html += '<div class="MistForge_Windower_Window_TabContent MistForge_Windower_Window_TabContent_'+i+'">'+this.ContentTab[ i ].printHtml()+'</div>';
        }

        for(var i in this.ContentTab){
            tabNamesHtml += '<div class="MistForge_Windower_Window_TabName" id="MistForge_Windower_Window_'+this.iWindow+'_TabName_'+i+'" ';
            tabNamesHtml += 'iWindow="'+this.iWindow+'" iTab="'+i+'">'+this.ContentTab[ i ].printName()+'</div>';
        }


        var Id = '#MistForge_Windower_Window_'+this.iWindow+' .MistForge_Windower_Window_Content';
        $(Id).html(html);

        for(var i in this.ContentTab)
            $(Id).addClass(this.ContentTab[ i ].printClasses());

        var Id2 = '#MistForge_Windower_Window_TabNames_'+this.iWindow;
        $(Id2).html(tabNamesHtml);

        if(this.currentTab!== false && typeof this.ContentTab[this.currentTab] != 'undefined'){
            firstTab = this.currentTab;
        }

        this.openTab(firstTab);
    }

    this.changeWindowPosition = function(x,y){
        this.positionX = x;
        this.positionY = y;
        this.positionWindow();
    }

    this.changeWindowSize = function(w,h){
        this.positionW = w;
        this.positionH = h;
        this.positionWindow();
    }


    this.closeWindow = function(){
        this.dataClosed = {
            X: this.positionX,
            Y: this.positionY,
            W: this.positionW,
            H: this.positionH,
        }
        this.positionX = -1000;
        this.positionY = -1000;
        this.positionW = 0;
        this.positionH = 0;

        this.positionWindow();
    }

    this.openWindow = function(){
        this.positionX = this.dataClosed.X;
        this.positionY = this.dataClosed.Y;
        this.positionW = this.dataClosed.W;
        this.positionH = this.dataClosed.H;

        this.positionWindow();
    }


    this.openTab = function(iTab){

        $('#MistForge_Windower_Window_'+this.iWindow+' .MistForge_Windower_Window_TabContent').hide();
        $('#MistForge_Windower_Window_'+this.iWindow+' .MistForge_Windower_Window_TabContent_'+iTab).show();

        $('#MistForge_Windower_Window_'+this.iWindow+' .MistForge_Windower_Window_TabName').removeClass('MistForge_Windower_Window_TabName_Selected');
        $('#MistForge_Windower_Window_'+this.iWindow+'_TabName_'+iTab).addClass('MistForge_Windower_Window_TabName_Selected');


        this.currentTab = iTab;

    }

    this.init = function(){
        this.drawWindow();
    }
    {   // Constructor
        this.iWindow = i;
        this.init();
    }
}
