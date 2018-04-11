import React, { Component } from 'react';

class TicTacToe extends Component {

	constructor(props) {
		super(props);
		this.state = {
			board: [
				['','',''],
				['','',''],
				['','','']
			],
			p1turn: true,
			gameOver: false,
			lightState: 0
		};
	}

	isOccupied(x,y,board) {
		return board[y][x] !== '';
	}

	markSpot(x,y,board,p1turn) {
		if (p1turn) {
			board[y][x] = 'x';
		} else {
			board[y][x] = 'o';
		}
	}

	onBoxClick(x,y) {
		const { board, p1turn, gameOver } = this.state
		if (gameOver || this.isOccupied(x,y,board)) {
			return;
		} else {
			this.markSpot(x,y,board,p1turn);
		}
		if (this.checkGameOver(board, p1turn)) {
			this.gameOver(board, p1turn);
		} else {
			this.setState({
				board, 
				p1turn: !p1turn
			});
		}
	}

	checkGameOver(board, p1turn) {
		if(this.checkCross(n, board)) {
			return true;
		}
		for (var n = 0; n < 3; n++) {
			if (this.checkRow(n, board) || this.checkCol(n, board)) {
				return true;
			}
		}
		return false;
	}

	gameOver(board, p1turn) {
		this.setState({
			board,
			gameOver: true
		});
	}

	checkRow(n, board) {
		var x_marks = 0
		var o_marks = 0;
		const row = board[n];
		for (var x = 0; x < 3; x++) {
			if (row[x] === 'x') {
				x_marks++;
			} else if (row[x] === 'o') {
				o_marks++;
			}
		}
		return x_marks > 2 || o_marks > 2;
	}

	checkCol(n, board) {
		var x_marks = 0;
		var o_marks = 0;
		for (var x = 0; x < 3; x++) {
			let entry = board[x][n];
			if (entry === 'x') {
				x_marks++;
			} else if (entry === 'o') {
				o_marks++;
			}
		}
		return x_marks > 2 || o_marks > 2;
	}

	checkCross(board) {

		if (board[1][1] === '') {
			// If center is empty, there can be no cross.
			return false;
		}
		//Left to right
		//x
		// x
		//  x
		var ltr_x_marks = 0;
		var ltr_o_marks = 0;
		//Right to left
		//  x
		// x
		//x
		var rtl_x_marks = 0;
		var rtl_o_marks = 0;
		for (var i = 0; i < 3; i++) {
			let ltr_entry = board[i][i];
			let rtl_entry = board[i][2-i];
			if (ltr_entry === 'x') {
				ltr_x_marks++;
			} else if (ltr_entry === 'o') {
				ltr_o_marks++;
			}
			if (rtl_entry === 'x') {
				rtl_x_marks++;
			} else if (rtl_entry === 'o') {
				rtl_o_marks++;
			}		 				
		}
		return (ltr_x_marks > 2 || rtl_x_marks > 2) || (ltr_o_marks > 2 || rtl_o_marks > 2);
	}

	reset() {
		this.setState({
			board: [
				['','',''],
				['','',''],
				['','','']
			],
			p1turn: true,
			gameOver: false
		});
	}

	renderWinner(player) {
		return (
			<div>
				<h1 className="blinking">Player {player} wins!</h1>
				<button className="resetbutton" onClick={() => this.reset()}>Reset</button>
			</div>
		)
	}

	render() {
		const FIRST_ROW = this.state.board[0];
		const SEC_ROW = this.state.board[1];
		const THRD_ROW = this.state.board[2];
		const { gameOver, p1turn } = this.state;
		const p = p1turn ? 1 : 2;

		return(
			<div>
				<h1> Basic Tic Tac Toe </h1>
				<div className="gamebox">
					<div className="row">
						<div onClick={ () => { this.onBoxClick(0,0)} } className="box">{ FIRST_ROW[0] }</div>
						<div onClick={ () => { this.onBoxClick(1,0)} } className="box">{ FIRST_ROW[1] }</div>  
						<div onClick={ () => { this.onBoxClick(2,0)} } className="box">{ FIRST_ROW[2] }</div>
					</div>
					<div className="row">
						<div onClick={ () => { this.onBoxClick(0,1)} } className="box">{ SEC_ROW[0]}< /div>
						<div onClick={ () => { this.onBoxClick(1,1)} } className="box">{ SEC_ROW[1]}< /div>  
						<div onClick={ () => { this.onBoxClick(2,1)} } className="box">{ SEC_ROW[2]}< /div>					
					</div>
					<div className="row">
						<div onClick={ () => { this.onBoxClick(0,2)} } className="box">{ THRD_ROW[0]} </div>
						<div onClick={ () => { this.onBoxClick(1,2)} } className="box">{ THRD_ROW[1]} </div>  
						<div onClick={ () => { this.onBoxClick(2,2)} } className="box">{ THRD_ROW[2]} </div>					
					</div>
				</div>
				{gameOver ? this.renderWinner(p) : ''}
			</div>			
			)
	}
}

export default TicTacToe;