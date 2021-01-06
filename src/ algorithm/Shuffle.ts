import { arrUtils } from "../utils";

/**
 * sort 乱序
 * @param arr
 */
export function randomSortShuffle<T>(arr: T[]): void {
	arr.sort(() => 0.5 - Math.random());
}

/**
 * 随机位置 乱序
 * @param arr
 */
export function randomShuffle<T>(arr: T[]): void {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		const randomIndex = Math.floor(Math.random() * len);
		arrUtils.swap(arr, randomIndex, i);
	}
}

/**
 * Fisher - Yates 乱序算法
 * @param arr
 */
export function fisherYatesShuffle<T>(arr: T[]): void {
	const result = [];
	let len = arr.length;
	for (let i = len - 1; i >= 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		result.push(arr[randomIndex]);
		arr.splice(randomIndex, 1);
	}
	arrUtils.copy(result, arr);
}

/**
 * Knuth - Durstenfeld 乱序算法
 * @param arr
 */
export function knuthDurstenfeldShuffle<T>(arr: T[]): void {
	const len = arr.length - 1;
	for (let i = len; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		arrUtils.swap(arr, randomIndex, i);
	}
}
