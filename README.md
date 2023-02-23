# 정규표현식(RegExp)
정규식, Regular Expression

## 역할
1.문자 검색(search)  
1.문자 대체(replace)  
1.문자 추출(extract)  

## 테스트 사이트
https://regex101.com/  
https://regexr.com/  
https://regexper.com/  

## 정규 표현식 생성
```js
// 생성자
new RegExp('표현', '옵션');
new RegExp('[a-z','gi');

// 리터럴
/표현/옵션
/[a-z]/gi
```

### 생성자 함수 정규식 표현
```js
const str = `
  010-1234-5678
  second@gmail.com
  http://www.omdbapi.com/?apikey=[yourkey]&s=frozen
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quod.
`
// sit라는 특정 내용 검색
const regexp = new RegExp('sit', '');
console.log(str.match(regexp));

// sit 항목만 배열로 반환
// const regexp = new RegExp('sit', 'g');

// 대소문자 구분없이 반환
// const regexp = new RegExp('sit', 'gi');

```

### 리터럴 방식 정규식 표현
```js
const regexp = /sit/gi
console.log(str.match(regexp));
```
## 자바스크립트의 메소드

메소드 | 문법 | 설명  
--|--|--  
exec | `정규식.exec(문자열)` | 일치하는 하나의 정보(Array) 반환
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자열의 배열(Array) 반환
search | `문자열.search(정규식)` | 일치하는 문자열의 인덱스(Number) 반환
replace | `문자열.replace(정규식,대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
split | `문자열.split(정규식)` | 일치하는 문자열을 분할하여 배열(Array)로 반환
toString | `생성자_정규식.toString()` |생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)로 반환

#### 3가지 메소드를 활용하여 결과 확인
```js
const regexp = /dolor/gi;
console.log(regexp.test(str));

// 특정 문자열을 변환
// 원본에는 영향을 미치지 않음
console.log(str.replace(regexp, 'AAA'));
console.log(str);

// 변환하고자 할 떼 const -> let으로 변환
str = str.replace(regexp, 'BBB');
console.log(str);
```

## 플래그(옵션)
플래그 | 설명
--|--
`g` | 모든 문자 일치(global)
`i` | 영어 대소문자를 구분 않고 일치(ignore case)
`m` | 여러 줄 일치(multi line)
`u` | 유니코드(unicode)
`y` | lastIndex 속성으로 지정된 인덱스에서만 1회 일치(sticky)

```js
console.log(str.match(/sit/gi));

// . -> 하나의 명령으로 동작
// . 마침표 앞에 이스케이프 활용하여 문자로 활용(마침표 검색)
console.log(str.match(/\./gi));

// 마침표 뒤에 $ 사용
// 문자 데이터가 끝나는 부분(마침표)
// 문장의 시작과 끝
console.log(str.match(/\.$/gim));
```

## 패턴(표현)
- 표현식의 다양한 특수기호(패턴)는 그 기호의 의미(기능)와 매칭되어 인식되지 않기 때문에 따로 외우지 않으면 의미를 파악할 수가 없음.

정규식 패턴 | 설명
--|--
`^`|줄(Line)의 시작에서 일치, /^abc/
`$`|줄(Line)의 끝에서 일치, /xyz$/
`.`|임의의 한 문자와 일치
`a\|b`|a 또는 b와 일치, 인덱스가 작은 것을 우선 반환
`*`|0회 이상 연속으로 반복되는 문자와 가능한 많이 일치, {0,}와 동일
`*?`|0회 이상 연속으로 반복되는 문자와 가능한 적게 일치(lazy), {0}와 동일
`+`|1회 이상 연속으로 반복되는 문자에 가능한 많이 일치, {1,}와 동일
`+?`|1회 이상 연속으로 반복되는 문자에 가능한 적게 일치(lazy), {1}와 동일
`?`|없거나 1회 가능한 많이 일치
`??`|없거나 1회 가능한 적게 일치(lazy)
`{3}`|3(숫자)개 연속 일치
`{3,}`|3개 이상 연속 일치
`{3,5}`|3개 이상 5개 이하(3~5개) 연속 일치
`{3,5}?`|3개 이상 5개 이하(3~5개) 연속 중 가능한 적은 3개 연속 일치(lazy), {3}와 동일
`()`|캡처(Capture)할 그룹
`(?<>)`|캡처 그룹 이름 지정, /(?<name>pattern)/ ES2018
`\1~9`|정규식 내 캡처된 값 참조, /(abc)\1/
`(?:)`|캡처(Capture)하지 않는 그룹
`(?=)`|앞쪽 일치(Lookahead), /ab(?=c)/
`(?!)`|부정 앞쪽 일치(Negative Lookahead), /ab(?!c)/
`(?<=)`|뒤쪽 일치(Lookbehind), /(?<=ab)c/ ES2018
`(?<!)`|부정 뒤쪽 일치(Negative Lookbehind), /(?<!ab)c/ ES2018
`[abc]`|a 또는 b 또는 c와 일치, 점(.)이나 별표(*) 같은 특수 문자는 []안에서 특수 문자가 아님, /\.[.]/
`[a-z]`|a부터 z 사이의 문자 구간에 일치(영어 소문자)
`[A-Z]|A부터 Z 사이의 문자 구간에 일치(영어 대문자)
`[0-9]`|0부터 9 사이의 문자 구간에 일치(숫자)
`[가-힣]`|가부터 힣 사이의 문자 구간에 일치(한글)
`[2-7]`|2부터 7 사이의 문자 구간에 일치(2,3,4,5,6,7)
`[b-f]`|b부터 f 사이의 문자 구간에 일치(b,c,d,e,f)
`[다-바]`|다부터 바 사이의 문자 구간에 일치(다,라,마,바)
`[^abc]`|a 또는 b 또는 c가 아닌 나머지 문자에 일치(부정)
`\`|이스케이프 문자, /\.\?\/\$\^/
`\b`|63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)
`\B`|63개 문자에 일치하는 경계
`\d`|숫자(Digit)에 일치
`\D`|숫자가 아닌 문자에 일치
`\p{}`|유니코드 속성(Property) 집합에 맞는 문자에 일치, /\p{Emoji}/u ES2018
`\P{}`|유니코드 속성 집합에 맞지 않는 문자에 일치, /\p{Uppercase}/u ES2018
`\s`|공백(Space, Tab 등)에 일치
`\S`|공백이 아닌 문자에 일치
`\w`|63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + _)에 일치
`\W`|63개 문자가 아닌 나머지 문자에 일치
`\x`|16진수 문자에 일치, /\x61/는 a에 일치
`\0`|8진수 문자에 일치, /\141/은 a에 일치
`\u`|유니코드(Unicode) 문자에 일치, /\u0061/는 a에 일치
`\c`|제어(Control) 문자에 일치
`\f`|폼 피드(FF, U+000C) 문자에 일치
`\n`|줄 바꿈(LF, U+000A) 문자에 일치
`\r`|캐리지 리턴(CR, U+000D) 문자에 일치
`\t`|탭 (U+0009) 문자에 일치
`$`\`|문자 대체(replace) 시 일치한 문자 이전 값 참조
`$'`|문자 대체(replace) 시 일치한 문자 이후 값 참조
`$+`|문자 대체(replace) 시 마지막으로 캡처된 값 참조
`$&`|문자 대체(replace) 시 일치한 문자 결과 전체 참조
`$_`|문자 대체(replace) 시 입력(input)된 문자 전체 참조
`$1~9`|문자 대체(replace) 시 캡처(Capture)된 값 참조

```js
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
```