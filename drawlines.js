/*
Module by Titanium Mobile
author: Krishna Pennacchioni
subject: Draw lines for iphone environment
*/
exports.drawline = function(Ax,Ay,Bx,By, win, color) {

	// Ax,Ay,Bx,By = integer
	// win = window to which the grid will be added
	// color = optional color for lines

	var clr = (color) ? color : '#dedede';
	var Ax  = (Ax) ? Ax : 1;
	var Ay  = (Ay) ? Ay : 1;
	var Bx  = (Bx) ? Bx : 100;
	var By  = (By) ? By : 100;

	var lineLength = Math.sqrt( (Ax-Bx)*(Ax-Bx)+(Ay-By)*(Ay-By) );
	
	for( var i=0; i<lineLength; i++ ){
       	var vline = Ti.UI.createView({
			width:1,
			height:1,
			backgroundColor:clr,
			left: Math.round( Ax+(Bx-Ax)*i/lineLength  ),
			top:  Math.round( Ay+(By-Ay)*i/lineLength  )
		});
		win.add(vline);
    }
}