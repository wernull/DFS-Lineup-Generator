/*globals DLG, $ */
DLG.updatePlayerList = function(){
  var listDom = $('.player-list');
  listDom.empty();
  var addDom = '<table><tr>';
  var listKeys = Object.keys(DLG.players[0]);
  listKeys.forEach(function(key){
    addDom += '<th>' + key + '</th>';
  });
  addDom += '</tr>';

  DLG.players.forEach(function(player){
    addDom += '<tr>';
    listKeys.forEach(function(key){
      addDom += '<td>' + player[key] + '</td>';
    });
    addDom += '</tr>';
  });

  addDom += '</table>';
  listDom.append(addDom);
};