class vec2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

// 随机点生成
function createRadomPoint(borderX: number, borderY: number): vec2 {
	return new vec2(Math.random() * borderX, Math.random() * borderY);
}
// 判断是否在圆中
function isPointInCircle(pt: vec2, center: vec2, radius: number): boolean {
	return Math.pow(pt.x - center.x, 2) + Math.pow(pt.y - center.y, 2) <= radius;
}

const N = 1000000; // 样本数量
const PAGE_COUNT = N / 10; // 分页数量
// 默认原始坐标为 （ 0，0 ）
const SIDE_LEN = 1; // 正方形边长
const RADIUS = SIDE_LEN; // 内圆半径
const CIRCLE_CENTER = new vec2(0, 0);

let count = 0; // 记录落到园中的数量
for (let i = 1; i <= N; i++) {
	const pt = createRadomPoint(SIDE_LEN, SIDE_LEN);
	if (isPointInCircle(pt, CIRCLE_CENTER, RADIUS)) {
		count++;
	}
	if (i % PAGE_COUNT === 0) {
		console.log(`样本数量：${i}, 落到单位圆中的数量：${count}, PI : ${(count / i) * 4}`);
	}
}
