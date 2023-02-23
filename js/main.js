import _ from 'lodash';

let str = `
  010-1234-5678
  tecond@gmail.com
  http://www.omdbapi.com/?apikey=[yourkey]&s=frozen
  The quick brown fox.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quod.
  aaaaaadddddd
  d
  동해물과 백두산이
`

console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));
console.log(str.match(/./g));
console.log(str.match(/http/g));
console.log(str.match(/h..p/g));
console.log(str.match(/fox|quod/g));
console.log(str.match(/fox|quod/));
console.log(str.match(/https?/g));
console.log(str.match(/https?/g));
console.log(str.match(/d{2}/));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,3}/g));
console.log(str.match(/\w{2,3}/g));
console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/[fox]/g));
console.log(str.match(/[0-9]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]/g));
console.log(str.match(/[가-힣]{3,}/g));
console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}\b/g));
console.log(str.match(/\d/g));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

const h = `  The hello  world   !`

console.log(h.match(/\s/g));
console.log(h.replace(/\s/g, ''));

// 앞쪽 일치 패턴
console.log(str.match(/.{1,}(?=\@)/g));
// 뒤쪽 일치 패턴
console.log(str.match(/(?=\@).{1,}/g));