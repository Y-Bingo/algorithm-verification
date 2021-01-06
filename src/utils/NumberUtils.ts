/**
 * 数字转百分比单位
 * @param val
 * @param total
 */
export function num2percent(val: number, total: number = 1): string {
	return calculatePercent(val, total) + '%';
}

/**
 * 计算百分比
 * @param value  当前的值
 * @param total  总值
 * @param scalar 缩放比例
 * @param digits 保留小数点多少位
 */
export function calculatePercent(value: number, total: number, scalar: number = 100, digits: number = 2): number {
	return Number(((value / total) * scalar).toFixed(digits));
}
