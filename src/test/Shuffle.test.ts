import { knuthDurstenfeldShuffle, fisherYatesShuffle, randomShuffle, randomSortShuffle } from '../ algorithm/Shuffle';
import { arrUtils, numUtils } from '../utils';

const Grid = require('console-grid');
const grid = new Grid();

/**
 * 乱序算法测试
 */

/**
 * 乱序算法测试
 * @param N    测试次数
 * @param arr  测试源
 */
function testShuffle<T>(N: number, arr: T[], shuffle: Function, expectVal: number): void {
	const len = arr.length;
	// 记录元素出现频次
	const freqMap = arrUtils.fill([], 0, 0, len);
	for (let i = 0; i < N; i++) {
		let temp = arrUtils.copy(arr, []);
		shuffle(temp);
		for (let j = 0; j < len; j++) {
			if (temp[j]) {
				freqMap[j]++;
			}
		}
	}
	console.log(`测试数据：${arr.toString()} 测试次数：${N} 测试期望值： ${expectVal}`);
	// 统计结果
	const resultArr = [];
	for (let i = 0; i < len; i++) {
		const freq = freqMap[i]; // 每个频次
		const freqRate = Number((freqMap[i] / N).toFixed(3)); // 频率
		const result = {
			// 'array index': i,
			'count ': `${freq}`,
			'frequency ': `${freqRate}`,
			'frequency percent': numUtils.num2percent(freqRate),
			'Biase ': numUtils.num2percent(freqRate - expectVal),
		};
		resultArr.push(result);
	}
	console.table(resultArr);
}

const N = 100000; // 实验次数
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]; // 实验数据
const expectVal = arr.filter((val: number) => val === 1).length / arr.length; // 期望概率值
console.log('========== 测试 randomSortShuffle ==========');
testShuffle(N, arr, randomSortShuffle, expectVal);
console.log('========== 测试 randomShuffle ==========');
testShuffle(N, arr, randomShuffle, expectVal);
console.log('========== 测试 fisherYatesShuffle ==========');
testShuffle(N, arr, fisherYatesShuffle, expectVal);
console.log('========== 测试 knuthDurstenfeldShuffle ==========');
testShuffle(N, arr, knuthDurstenfeldShuffle, expectVal);
