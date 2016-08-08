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
        var html = '';

        var ViewsTab = MistForge.Objects.SvgDrawer.Project.ViewsTab;

        for(var i in ViewsTab){
            html += '<div class="MistForge_SvgEditor_FieldSet">';
                html += '<div class="MistForge_SvgEditor_Label">'+i+'</div>';
                html += '<div class="MistForge_SvgEditor_Button MistForge_SvgEditor_ViewsList_OpenWindow';
                    if(typeof MistForge.Objects.SvgEditor.ViewWindowTab[i] != 'undefined') html += ' disabled';
                html += '" viewName="'+i+'">Window</div>';
                html += '<div class="MistForge_SvgEditor_Button MistForge_SvgEditor_ViewsList_OpenSettings';
                    if(typeof MistForge.Objects.SvgEditor.ViewSettingsTab[i] != 'undefined') html += ' disabled';
                html += '" viewName="'+i+'">Settings</div>';
                html += '<div class="MistForge_SvgEditor_Button MistForge_SvgEditor_ViewsList_OpenModels';
                    if(typeof MistForge.Objects.SvgEditor.ModelsListTab[i] != 'undefined') html += ' disabled';
                html += '" viewName="'+i+'">Models</div>';
                html += '<div class="MistForge_SvgEditor_Button MistForge_SvgEditor_ViewsList_OpenActions';
                    if(typeof MistForge.Objects.SvgEditor.ActionsListTab[i] != 'undefined') html += ' disabled';
                html += '" viewName="'+i+'">Actions</div>';
            html += '</div>';
            // html +=i+' '+ViewsTab[i]+'<br>';
        }

        this.myContent.putHtml(html);
    }

    this.buildActions = function(){
         $('.MistForge_SvgEditor_ViewsList').on('click','.MistForge_SvgEditor_ViewsList_OpenWindow',function(){
             MistForge.Objects.SvgEditor.ViewsList.click_openWindow($(this).attr('viewName'));
         });
         $('.MistForge_SvgEditor_ViewsList').on('click','.MistForge_SvgEditor_ViewsList_OpenSettings',function(){
             MistForge.Objects.SvgEditor.ViewsList.click_openSettings($(this).attr('viewName'));
         });
         $('.MistForge_SvgEditor_ViewsList').on('click','.MistForge_SvgEditor_ViewsList_OpenModels',function(){
             MistForge.Objects.SvgEditor.ViewsList.click_openModels($(this).attr('viewName'));
         });
         $('.MistForge_SvgEditor_ViewsList').on('click','.MistForge_SvgEditor_ViewsList_OpenActions',function(){
             MistForge.Objects.SvgEditor.ViewsList.click_openActions($(this).attr('viewName'));
         });
    }

    this.click_openWindow = function(viewName){
        console.log('View:openWindow: '+viewName);

        if(typeof MistForge.Objects.SvgEditor.ViewWindowTab[viewName] == 'undefined'){
            MistForge.Objects.SvgEditor.new_ViewWindow(viewName);
        } else {
            MistForge.Objects.SvgEditor.ViewWindowTab[viewName].destruct();
        }

        this.buildWindow();
    }

    this.click_openSettings = function(viewName){
        console.log('View:openSettings: '+viewName);

        if(typeof MistForge.Objects.SvgEditor.ViewSettingsTab[viewName] == 'undefined'){
            MistForge.Objects.SvgEditor.new_ViewSettings(viewName);
        } else {
            MistForge.Objects.SvgEditor.ViewSettingsTab[viewName].destruct();
        }

        this.buildWindow();
    }

    this.click_openModels = function(viewName){
        console.log('View:openModels: '+viewName);

        if(typeof MistForge.Objects.SvgEditor.ModelsListTab[viewName] == 'undefined'){
            MistForge.Objects.SvgEditor.new_ModelsList(viewName);
        } else {
            MistForge.Objects.SvgEditor.ModelsListTab[viewName].destruct();
        }

        this.buildWindow();
    }

    this.click_openActions = function(viewName){
        console.log('View:openActions: '+viewName);

        if(typeof MistForge.Objects.SvgEditor.ActionsListTab[viewName] == 'undefined'){
            MistForge.Objects.SvgEditor.new_ActionsList(viewName);
        } else {
            MistForge.Objects.SvgEditor.ActionsListTab[viewName].destruct();
        }

        this.buildWindow();
    }


    {   // Constructor
        this.init();
    }
}
