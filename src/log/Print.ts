import * as readline from 'readline';
import { ReadLine } from 'readline';

const rl: ReadLine = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const limit = 20; // 模拟提取时长

const printProgress = index => {
	const loadedBar = '='.repeat(index);
	const unloadBar = '-'.repeat(limit - index);
	readline.cursorTo(process.stdout, 0, 1);
	readline.clearScreenDown(process.stdout);
	process.stdout.write(`提取中 : ${loadedBar}${unloadBar}`);
};

const printStr = (money, index) => {
	printProgress(index);
	if (index === limit) {
		process.stdout.write(`\n √ 本次提款: ${money} 元\n`);
		process.exit(0);
	}
};

const getMoney = answer => {
	let index = 0;
	setInterval(() => {
		++index;
		printStr(answer, index);
	}, 200);
};

readline.cursorTo(process.stdout, 0, 1);

setTimeout(() => {
	rl.question('enter you number: \r', getMoney);
}, 1000);
