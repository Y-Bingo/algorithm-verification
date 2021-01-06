/**
 * 交换数组数据的两个位置的数据
 * @param arr   源数组
 * @param l     待交换位置1
 * @param r     待交换位置2
 */
export function swap<T>(arr: T[], l: number, r: number) {
	if (!arr || l === r || l < 0 || l >= arr.length || r < 0 || r >= arr.length) return;
	const temp = arr[l];
	arr[l] = arr[r];
	arr[r] = temp;
}

/**
 * 填充数组
 * @param srcArr 源数组
 * @param value  填充值
 * @param start  填充起始索引
 * @param end    填充结束索引
 */
export function fill<T>(srcArr: T[], value: T | any, start: number = 0, end: number = srcArr.length): T[] {
	for (let i = start; i < end; i++) {
		srcArr[i] = JSON.parse(JSON.stringify(value)) as T;
	}
	return srcArr;
}

/**
 * 拷贝数据
 * @param src 被拷贝数据
 * @param dst 待拷贝数据 目标盘拷贝数据
 */
export function copy<T>(srcArr: T[], dstArr: T[]): T[] {
	let len = srcArr.length;
	for (let i = 0; i < len; i++) {
		dstArr[i] = JSON.parse(JSON.stringify(srcArr[i])) as T;
	}
	for (let j = len; j < dstArr.length; j++) {
		dstArr.pop();
	}

	return dstArr;
}

/**
 * 移除数据
 * @param srcArr 源数组
 * @param rmvArr 待移除数据
 */
export function remove<T>(srcArr: T[], rmvArr: T[]): boolean {
	let srcLen = srcArr.length;
	let rmvLen = rmvArr.length;
	if (srcLen <= 0 || rmvLen <= 0) {
		console.warn('remove Error. rmvLen <= 0 || srcLen <= 0');
		return false;
	}
	let point = 0;
	let i = 0,
		j = 0;
	for (i = 0; i < srcLen; i++) {
		for (j = 0; j < rmvLen; j++) {
			if (rmvArr[j] === srcArr[i]) break;
		}

		if (j == rmvLen) srcArr[point++] = srcArr[i];
	}

	srcArr.length = point;

	return true;
}
