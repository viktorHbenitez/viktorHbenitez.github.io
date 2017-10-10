function pdfToHTML(){
var pdf = new jsPDF('p', 'pt', 'letter');
source = $('#pdf2htmldiv')[0];
specialElementHandlers = {
	'#editor': function(element, renderer){
		return true
	}
};
margins = {
    top: 50,
    left: 60,
    width: 545
  };
pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
        pdf.save('curriculumVitae.pdf');
      }
  )
}

//
// function pdfToHTML() {
//     html2canvas(document.getElementById('pdf2htmldiv'),{
//         onrendered:function(canvas){
//
//             var img=canvas.toDataURL("image/png");
//             img.width = 500;
//             var doc = new jsPDF();
//             doc.addImage(img,'JPEG',20,20);
//
//
//             doc.save('test.pdf');
//         }
//         // width: 700,
//         // height: 300
//
//     });
// }
//
// function pdfToHTML() {
//     html2canvas($("#pdf2htmldiv"), {
//         onrendered: function(canvas) {
//             var imgData = canvas.toDataURL(
//                 'image/png');
//             var doc = new jsPDF('p', 'pt', 'letter');
//             doc.addImage(imgData, 'PNG', 5, 0);
//
//             //output is 96dpi, additional pages added if output is greater than 816 pixels (816p/96dpi = 8.5 inches)
//             if(canvas.height > 816){
//                 for(i=1; i*816<canvas.height; i++){
//                     doc.addPage();
//                     //-215.89mm which is -8.5inches
//                     doc.addImage(imgData, 'PNG',5,-215.89*i);
//                 }
//             }
//             doc.save('formoutput.pdf');
//         }
//     });
// }



// }
// function pdfToHTML() {
//     var pdf = new jsPDF('p', 'pt', 'letter');
//     pdf.addHTML($('#pdf2htmldiv')[0], function () {
//         pdf.save('Test.pdf');
//     });
//
// }
