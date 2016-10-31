
MistForge.Classes.SvgDrawer.Model.prototype.setGroup = function(groupName){
    this.GroupsTab[groupName] = {
        N:groupName,
        P:false, //parentGroup
    };
    this.currentGroup = groupName;
}
MistForge.Classes.SvgDrawer.Model.prototype.switchGroup = function(groupName){
    this.currentGroup = groupName;
}
