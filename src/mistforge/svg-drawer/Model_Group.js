
MistForge.Classes.SvgDrawer.Model.prototype.setGroup = function(groupName){
    this.GroupsTab[groupName] = {
        N:groupName,
        Parent:false, //parentGroup
        r:0,
        q:0,
        z:1,
    };
    this.currentGroup = groupName;
}
MistForge.Classes.SvgDrawer.Model.prototype.switchGroup = function(groupName){
    this.currentGroup = groupName;
}

MistForge.Classes.SvgDrawer.Model.prototype.getGroupPosObj = function(groupName){
    var G = this.GroupsTab[groupName];

    if(G.Parent){
        console.log('tu cos: szukamy ge');
    }else{
        var P = MistForge.Objects.SvgDrawer.Project;
        var V = P.ViewsTab[ P.currentView ];
        return V.getObjectPosObj(V.currentObject);
    }

    return {};
}
