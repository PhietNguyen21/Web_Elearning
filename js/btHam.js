var mang=['cc',4,'ds',true,false,'cc'];
mang[3]=8;
console.log(mang.indexOf('cc'));
console.log(mang.lastIndexOf('cc'));
mang.push('??');
console.log(mang);
// mang.pop();
// console.log(mang);

// mang.shift();
// console.log(mang);
var mang2=mang.slice(1,3);
console.log("a[] = "+mang2);


var mang1=mang.slice(3,mang.length);
console.log("b[] = "+mang1);

var gopMang=mang2.concat(mang1);
console.log(gopMang);

