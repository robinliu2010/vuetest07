// class Dog {
//     name = '旺财';
//     color = '黑色';
//     constructor(name,color) {
//         this.name = name;
//         this.color = color;
//     }
//     static say() {
//         console.log('汪汪汪');
//     }
//     get isDark() {
//         if (this.color === '黑色') {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     set isDark(value) {
//         this.color = value;
//         console.log('设置颜色为：' + value);
//     }

// }

// let dog = new Dog('小白','灰色');
// console.log(dog.name);
// console.log(dog.isDark);
// console.log(dog.isDark = '白色');
// dog.say();

// class BlackDog extends Dog {
//     constructor(name,color) {
//         super(name,color);
//         // 调用父类构造函数
//     }
//     say() {
//         console.log('哐哐哐');
//         console.log(super.say());
//     }

// }

// let blackDog = new BlackDog('小黑','黑色');
// console.log(blackDog.name);
// console.log(blackDog.isDark);
// blackDog.say();


// function* createPerson() {
//     // return [1,2,3,4,5];    
//     for (let i = 0; i < 5; i++) {
//         yield i;
//     }
// }

// for (let i of createPerson()) {
//     console.log(i);
//     if (i > 2) {
//         break;
//     }
// }



    // const a = await fetch('https://baidu.com')

    // console.log(a);


// async function test() {
//     const a = await fetch('https://qq.com')
//     console.log(a);
//     const b = await fetch('https://x.com')
//     console.log(b);
// }

// await test();
function test() {
    console.log(3);
}
function test1() {
    console.log(33);
}
console.log(1);

setTimeout(() => {
   test();
}, 7);

setTimeout(() => {
    test1();
 }, 7);

console.log(2);
