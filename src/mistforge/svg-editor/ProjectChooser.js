MistForge.Classes.SvgEditor.ProjectChooser = function(){

    this.myContent = false;
    this.myWindow = false;

    this.init = function(){
        this.myContent = MistForge.Objects.Windower.setNewContent({
            name:'ProjectChooser',
            proposedWidth: 300,
            minimalWidth: 250,
            proposedHeight: 150,
            contentClasses: 'MistForge_SvgEditor_ProjectChooser MistForge_Windower_MarginedContent'
        });
        this.buildWindow();


        this.myWindow = MistForge.Objects.Windower.setNewWindow();
        this.myWindow.addContent(this.myContent);
        this.myWindow.moveToCenter();

        this.buildActions();
    }

    this.buildWindow = function(){
        var html = '';

        html += '<div class="MistForge_SvgEditor_Label">Create new Project:</div>';
        html += '<div class="MistForge_SvgEditor_FieldSet">';
            html +='<input type="text" id="MistForge_SvgEditor_ProjectChooser_NewProject" value="" style="width: 200px;">';
            html +='<div class="MistForge_SvgEditor_Button" id="MistForge_SvgEditor_ProjectChooser_NewProject_Button" id="">Add</div>';
        html += '</div>';

        this.myContent.putHtml(html);
    }


    this.buildActions = function(){
        $('.MistForge_SvgEditor_ProjectChooser').on('click','#MistForge_SvgEditor_ProjectChooser_NewProject_Button',function(){
            MistForge.Objects.SvgEditor.ProjectChooser.click_newProject();
        });
    }

    this.click_newProject = function(){
        var projectName = $('#MistForge_SvgEditor_ProjectChooser_NewProject').val();

        if(MistForge.Objects.Helper.check_fileName(projectName)) return false;
        if(this.check_projectName(projectName)) return false;

        this.createProject(projectName);

        MistForge.Objects.SvgEditor.openProject();

    }

    this.check_projectName = function(projectName){
        var AjaxAnswer = MistForge.Objects.Ajaxier.ask('projectNameFree',{projectName:projectName});
        if(AjaxAnswer.projectNameFree == 'no') return true;
        return false;
    }


    this.createProject = function(projectName){
        var projectData = this.prepareNewProjectData(projectName);
        MistForge.Objects.SvgDrawer.setProject(projectData);
    }

    this.prepareNewProjectData = function(projectName){
        var projectData = {};

        projectData.projectName = projectName;
        // ....
        // other data

        return projectData;
    }


    this.closePanel = function(){
        this.myWindow.closeWindow();
    }


    {   // Constructor
        this.init();
    }
}
