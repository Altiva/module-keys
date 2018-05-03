(function () {

	const keyEvent = function ( code ) {

		return function ( node, callback ) {

			function keydownHandler ( event ) {
				if ( event.which === code ) callback.call( this, event );
			}

			node.addEventListener( 'keydown', keydownHandler, false );

			return {
				teardown () {
					node.removeEventListener( 'keydown', keydownHandler, false );
				}
			};
		};
	}

	const enter 	= keyEvent( 13 );
	const tab 		= keyEvent( 9 );
	const escape 	= keyEvent( 27 );
	const space 	= keyEvent( 32 );

	const leftarrow 	= keyEvent( 37 );
	const rightarrow 	= keyEvent( 39 );
	const downarrow 	= keyEvent( 40 );
	const uparrow 		= keyEvent( 38 );

	return { enter, tab, escape, space, leftarrow, rightarrow, downarrow, uparrow };

})()