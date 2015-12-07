/*globals DLG, $ */
$(function() {
  if(window.location.search.indexOf('example') !== -1){
    $.get( 'example.csv', function(data) {
      consumeData(data);
    });
  }

  $('#upload_csv').change(function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      consumeData(this.result);
    };
    reader.readAsText(file);
  });

  function consumeData(data){
    DLG.players = DLG.csvJSON(data);
    console.log(DLG.csvJSON(data));
    DLG.updatePlayerList();
  }

});