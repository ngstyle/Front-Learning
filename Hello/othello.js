class OthelloPattern {
    constructor() {
        this.board = [
            [0,0,0,0,0,0,0,0],    
            [0,0,0,0,0,0,0,0],    
            [0,0,0,0,0,0,0,0],    
            [0,0,0,0,0,0,0,0],    
            [0,0,0,0,0,0,0,0],    
            [0,0,0,0,0,1,2,0],    
            [0,0,0,0,0,0,2,2],    
            [0,0,0,0,0,2,2,2],    
        ];
    }

    move(x, y, color, checkOnly = false) {
        if(this.board[y][x] !== 0)
            return false;

        let ox = x, oy = y;
        let canMove = false;

        // 8个方向移动
        let directions = [
            [-1 , -1],
            [-1 , 0],
            [-1 , 1],
            [0 , -1],
            [0 , 1],
            [1 , -1],
            [1 , 0],
            [1 , 1],
        ];

        for (const direction of directions) {
            x = ox;
            y = oy;
            let hasOpposite = false;
            let directionCanMove = false;
            while(true) {
                x += direction[0];
                y += direction[1];

                if (x < 0 || x >= 8 || y < 0 || y >= 8) {
                    break;
                }

                if (this.board[y][x] === 3 - color) {
                    hasOpposite = true;
                }

                if (this.board[y][x] === color) {
                    if (hasOpposite) {
                        directionCanMove = true;
                    }
                    break;
                }

                if (this.board[y][x] === 0) {
                    // console.log("空白格：" + x + "," + y);
                    break;
                }
            }

            if (directionCanMove && !checkOnly) {
                while(true) {
                    x -= direction[0];
                    y -= direction[1];
                    this.board[y][x] = color;
                    if (x === ox && y === oy) {
                        break;
                    }
                }
            }

            canMove = canMove || directionCanMove;
        }
        

        if (canMove && !checkOnly) {
            color = 3 - color;
            console.log(this.board);
        } 

        return canMove;
    }
}

class OthelloGame {
    constructor() {
        this.pattern = new OthelloPattern();
        this.color = 1;
    }

    checkPass() {
        for(let y = 0; y < 8; y++) {
            for(let x = 0; x < 8; x++) {
                if(this.pattern.move(x, y, this.color, true)) {
                    console.log(x + "," + y + ", avaliable: " + this.color);
                    return false;
                }
            }
        }
        return true;
    }

    move(x, y) {
        if (this.pattern.move(x, y, this.color, false)) {
            this.color = 3 - this.color;
        }

        if (this.checkPass()) {
            this.color = 3 - this.color;
            if (this.checkPass()) {
                alert("Game Over");
            }
        }
    }
}

// let game = new OthelloGame();
// game.move(7,5);

// console.log(game.pattern.board.join("\n"));