MistForge.Classes.Helper.Ajaxier = function(){

    this.ask = function(questionName,questionData){

        return this.fakeRequest(questionName,questionData);

    }


    this.fakeRequest = function(questionName,questionData){

        if(questionName == 'projectNameFree'){
            var answerData = {};
            answerData.projectNameFree = 'yes';
            return answerData;
        }

        if(questionName == 'viewNameFree'){
            var answerData = {};
            answerData.viewNameFree = 'yes';
            return answerData;
        }

        if(questionName == 'projectFileLists'){
            var answerData = {};
            answerData.Views = {'view1':1,'view2':2};
            answerData.Models = {};
            answerData.Animations = {};
            return answerData;
        }


        if(questionName == 'viewData'){
            var answerData = {};
            answerData.viewName = questionData.viewName;
            return answerData;
        }

    }


    this.init = function(){
        if(typeof MistForge.Objects == 'undefined')
            MistForge.Objects = {};
        MistForge.Objects.Ajaxier = this;
    }
    {   // Constructor
        this.init();
    }

}
