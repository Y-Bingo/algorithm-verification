import { knuthDurstenfeldShuffle } from "../ algorithm/Shuffle";
import { arrUtils } from '../utils';

enum EMineType {
	NONE = '', // 没有任何东西
	BLOCK = '○', //
	MINE = '●',
	FLAG = '▲',
}

class MineSweeper {
	private row: number;
	private col: number;
	private mineMap: EMineType[];

	public start(): void {
		console.log('>>>>>>>>>> 开始埋雷........');
		this.row = 10;
		this.col = 10;
		this.mineMap = this.generateMineMap(25, 10, 10);
		console.log(mineSweeper.toString());
		console.log('>>>>>>>>>> 开始洗牌........');
		knuthDurstenfeldShuffle( this.mineMap )
		console.log(mineSweeper.toString());
	}

	private generateMineMap(mineCount: number, row: number, col: number): EMineType[] {
		const map = [];
		const len = row * col;
		if (mineCount > len) return [];
		// 生成雷
		arrUtils.fill(map, EMineType.MINE, 0, mineCount);
		// 生成
		arrUtils.fill(map, EMineType.BLOCK, mineCount, len);
		return map;
	}

	public toString(): string {
		if (!this.mineMap || !this.mineMap.length) return 'error';
		const mineMap = this.mineMap;
		const strArr = [];
		const row = this.row;
		const col = this.col;
		for (let i = 0; i < row; i++) {
			strArr.push(mineMap.slice(i * col, (i + 1) * col).join(' '));
		}
		return strArr.join('\n');
	}
}

console.log(' ========== 扫雷分割线分割线！！ ==========');
const mineSweeper = new MineSweeper();
mineSweeper.start();
