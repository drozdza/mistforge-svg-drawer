MistForge.Classes.SvgEditor.ViewsList = function(){

    this.myContent = false;


    this.init = function(){
        this.myContent = MistForge.Objects.Windower.setNewContent({
            name:'ViewsList',
            proposedWidth: 300,
            minimalWidth: 250,
            proposedHeight: 150,
            contentClasses: 'MistForge_SvgEditor_ViewsList MistForge_Windower_MarginedContent'
        });
        this.buildWindow();

        MistForge.Objects.SvgEditor.ViewsChooser.myWindow.addContent(this.myContent);

        this.buildActions();
    }

    this.refresh = function(){
        this.buildWindow();
    }

    this.buildWindow = function(){
        var html = 'Ello:<br/>Ollo';

        var ViewsTab = MistForge.Objects.SvgDrawer.Project.ViewsTab;

        for(var i in ViewsTab){
            html +=i+' '+ViewsTab[i]+'<br>';
        }

        this.myContent.putHtml(html);
    }

    this.buildActions = function(){
        // $('.MistForge_SvgEditor_ViewsChooser').on('click','#MistForge_SvgEditor_ViewsChooser_OpenView_Button',function(){
        //     MistForge.Objects.SvgEditor.ViewsChooser.click_openView();
        // });
    }

    // this.click_openView = function(){
    //     var viewName = $('#MistForge_SvgEditor_ViewsChooser_OpenView').val();
    //
    //     if(viewName.length == 0) return false;
    //
    //     this.openView(viewName);
    // }



    {   // Constructor
        this.init();
    }
}
