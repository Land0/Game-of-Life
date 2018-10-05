function getState () {
    // arrays var row = [false, false, true, false, false, false, ...];
    /*
    var x = 0 - 9
    var y = 0 - 9
        var board = [
            [false, false, true, false, false, ...] // row 1
            [true, false, true, false, false, ...] // row 2
            ... // other rows
            ]
            board[0][0] = top left cell
            board[0][9] = top right cell
            board[9][0] = bottom left cell
            board[9][9] = bottom right cell
    */
   
    var board [
        [false, false, true, false, false, false, false, false, false, false,]
        [true, false, true,  false, false, false, false, false, false, false,]
        [ false, true, true, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        [ false, false, false, false, false, false, false, false, false, false,]
        
        ]
        //board[y][x]
        // board[0][2]
        //board[1][0]
        //board[1][2]
        //board[2][1]
        //board[2][2]
        }

function onBeginClicked() {
    console.log('Begin button clicked');    
    //Rules
    // any alive cell with less than 2 neigbors dies.
    // any alive ceel with 2 or 3 neighbors survives.
    // any dead cell with 3 alive neighbors becomes alive.
    // any alive cell with > 3 neighbors dies.
}


function initialize() {
    document.getElementById('begin').addEventListener('click', onBeginClicked);
}
