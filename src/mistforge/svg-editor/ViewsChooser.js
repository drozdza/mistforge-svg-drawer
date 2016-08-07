MistForge.Classes.SvgEditor.ViewsChooser = function(){

    this.myContent = false;
    this.myWindow = false;

    this.init = function(){
        this.myContent = MistForge.Objects.Windower.setNewContent({
            name:'ViewsChooser',
            proposedWidth: 300,
            minimalWidth: 250,
            proposedHeight: 150,
            contentClasses: 'MistForge_SvgEditor_ViewsChooser MistForge_Windower_MarginedContent'
        });
        this.buildWindow();

        this.myWindow = MistForge.Objects.Windower.setNewWindow();
        this.myWindow.addContent(this.myContent);

        this.buildActions();
    }

    this.buildWindow = function(){
        var html = '';

        html += '<div class="MistForge_SvgEditor_Label">Open View:</div>';
        html += '<div class="MistForge_SvgEditor_FieldSet">';
            html += '<select id="MistForge_SvgEditor_ViewsChooser_OpenView" style="width: 200px;">';
                html += '<option value="">--select--</option>';
            var ViewFiles = MistForge.Objects.SvgDrawer.Project.FilesLists.Views;
            for(var ViewFileName in ViewFiles)
                html += '<option value="'+ViewFileName+'">'+ViewFileName+'</option>';
            html += '</select>';
            html +='<div class="MistForge_SvgEditor_Button" id="MistForge_SvgEditor_ViewsChooser_OpenView_Button" id="">Open</div>';
        html += '</div>';

        html += '<div class="MistForge_SvgEditor_Label">Create New View:</div>';
        html += '<div class="MistForge_SvgEditor_FieldSet">';
            html +='<input type="text" id="MistForge_SvgEditor_ViewsChooser_NewView" value="" style="width: 200px;">';
            html +='<div class="MistForge_SvgEditor_Button" id="MistForge_SvgEditor_ViewsChooser_NewView_Button" id="">Add</div>';
        html += '</div>';


        this.myContent.putHtml(html);
    }

    this.buildActions = function(){
        $('.MistForge_SvgEditor_ViewsChooser').on('click','#MistForge_SvgEditor_ViewsChooser_OpenView_Button',function(){
            MistForge.Objects.SvgEditor.ViewsChooser.click_openView();
        });

        $('.MistForge_SvgEditor_ViewsChooser').on('click','#MistForge_SvgEditor_ViewsChooser_NewView_Button',function(){
            MistForge.Objects.SvgEditor.ViewsChooser.click_newView();
        });
    }

    this.click_openView = function(){
        var viewName = $('#MistForge_SvgEditor_ViewsChooser_OpenView').val();

        if(viewName.length == 0) return false;

        this.openView(viewName);
    }

    this.click_newView = function(){
        var viewName = $('#MistForge_SvgEditor_ViewsChooser_NewView').val();

        if(MistForge.Objects.Helper.check_fileName(viewName)) return false;
        if(this.check_viewName(viewName)) return false;

        this.createView(viewName);
    }

    this.check_viewName = function(viewName){
        var AjaxAnswer = MistForge.Objects.Ajaxier.ask('viewNameFree',{viewName:viewName});
        if(AjaxAnswer.viewNameFree == 'no') return true;
        return false;
    }

    this.openView = function(viewName){
        console.log('OpenView: '+viewName);
        var viewData = MistForge.Objects.Ajaxier.ask('viewData',{viewName:viewName});
        MistForge.Objects.SvgDrawer.setView(viewData);

        MistForge.Objects.SvgEditor.showViewsList();
    }

    this.createView = function(viewName){
        console.log('CreateView: '+viewName);
        var viewData = this.prepareNewViewData(viewName);
        MistForge.Objects.SvgDrawer.setView(viewData);

        MistForge.Objects.SvgEditor.showViewsList();
    }

    this.prepareNewViewData = function(viewName){
        var viewData = {};

        viewData.viewName = viewName;
        // ....
        // other data

        return viewData;
    }




    {   // Constructor
        this.init();
    }
}
