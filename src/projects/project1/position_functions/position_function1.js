function Position1(){

    // Return: Array of positions that can be
    this.getVisiblePositions = function(viewX,viewY,screenW,screenH){
        var Data = {};




        return Data;
    }

    this.getPositionData = function(posId,viewX,viewY){
        var Data = {};

        var PosTab = posId.split('_');
        var PosX = posTab[0];
        var PosY = posTab[1];

        Data['X'] = PosX*100;
        Data['Y'] = PosY*100;

        return Data;
    }
}
