# TypeScript Enum vs Const Assertion

## 개요

타입스크립트의 enum과 const assertion (a.k.a. `as const`) 사이의 차이를 알아보고 싶어서 만든 실험실입니다. 열거형은 tree-shaking이 되지 않는다는 이야기가 있어서 정말인지 궁금했어요.

## 실행 방법

사실 실행 결과물은 이미 레포지토리에 들어 있습니다. 윈도우 컴퓨터에서 실행한 거라 혹시 맥에서 돌아가지 않는다면 미리 사과(apple)의 말씀 전합니다.

`js-to-bundled-js`는 타입스크립트 컴파일러를 사용해서 자바스크립트로 트랜스파일한 코드에 번들러를 먹인 것이고, `ts-to-bundled-js`는 각 번들러에서 제공하는 본인의 기능을 사용해 타입스크립트에서 자바스크립트로 한번에 바꾼 것입니다(물론 얘네도 내부에서는 타입스크립트 컴파일러를 쓸 수도 있음). webpack-babel은 타입스크립트에서 바로 자바스크립트로 옮긴 코드만 있습니다.

#### tsc (transpile only)

```bash
npm run ts-to-js
```

#### rollup

```bash
npm run do:rollup
```

#### esbuild

```bash
npm run do:esbuild
```

#### webpack + babel

```bash
npm run do:webpack-babel
```

#### 귀찮은데 한번에 돌리죠?

```bash
npm run all
```
