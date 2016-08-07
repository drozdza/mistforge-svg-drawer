MistForge.Classes.Windower.ContentContainer = function(dataSet){

    this.name = false;
    this.proposedWidth = false;
    this.proposedHeight = false;
    this.minimalWidth = false;
    this.minimalHeight = false;
    this.contentClasses = false;

    this.Window = false;

    this.html = '';

    this.init = function(dataSet){

        this.name = dataSet.name;

        for(var i in {proposedWidth:1, proposedHeight:1, minimalWidth:1, minimalHeight:1})
            if(typeof dataSet[i] != 'undefined')
                this[i] = dataSet[i];

        if(typeof dataSet.contentClasses != 'undefined')
            this.contentClasses = dataSet.contentClasses;
    }

    {   // Constructor
        this.init(dataSet);
    }

    this.addWindow = function(WindowObject){
        this.Window = WindowObject;
    }


    this.putHtml = function(aHtml){
        this.html = aHtml;
        this.forcePrintHtml();
    }
    this.addHtmlBefore = function(aHtml){
        this.html = aHtml + this.html;
        this.forcePrintHtml();
    }
    this.addHtmlAfter = function(aHtml){
        this.html += aHtml;
        this.forcePrintHtml();
    }

    this.forcePrintHtml = function(){
        if(this.Window)
            this.Window.drawWindowContent();
    }

    this.printName = function(){
        return this.name;
    }
    this.printHtml = function(){
        return this.html;
    }
    this.printClasses = function(){
        return this.contentClasses;
    }

}
