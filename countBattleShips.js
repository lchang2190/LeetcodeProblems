var input = [["X",".","X"],
             [".","X","."],
             ["X",".","X"]];
var input2 = [["X","X","X"],
              [".",".","."],
              ["X","X","X"]];

var input3 = [["X",".","X"],
              ["X",".","."],
              ["X",".","X"]];

var input4 = [["X",".","X"],
             [".",".","X"],
             ["X","X","."]];


var countShips = function(board) {
  var count = 0;
  var previous = [];
  var current = [];
  for ( var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === board[i][j-1]) {
        
      } else if (previous.indexOf(j) < 0 && board[i][j] === 'X') {
        current.push(j);
        count++;
      }
      
      if (board[i][j] === 'X') {
        current.push(j);
      }
    }
    console.log(current);
    previous = current;
    current = [];
  }
  
  return count;
}

console.log(countShips(input));
console.log(countShips(input2));
console.log(countShips(input3));
console.log(countShips(input4));