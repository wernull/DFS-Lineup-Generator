/*globals DLG, $ */
$(function() {
  if(window.location.search.indexOf('example') !== -1){
    $.get( 'example.csv', function(data) {
      console.log(DLG.csvJSON(data));
    });
  }

  $('#upload_csv').change(function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
      console.log(DLG.csvJSON(this.result));
    };
    console.log(file);
    reader.readAsText(file);
  });

});