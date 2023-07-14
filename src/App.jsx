/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // 左がfalseの場合に右側を返す
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //左がtrueの場合に右側を返す
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // 第2引数に空の配列を渡すと最初の1回のみ読み込ませる
    // 第2引数に変数を入れると変数が変更されたときのみ読み込まれる
  }, [num]);

  // [stateとして利用する変数名, stateを変更するための関数]
  // useState(初期値)を設定
  return (
    <>
      {/* 外側の{}はjsですよの括弧,内側の{}はjsのオブジェクトの括弧 */}
      {/* cssのプロパティは文字列で囲う */}
      {/* 直接オブジェクトを書くかオブジェクトの変数を定義してstyleの中に反映する */}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* コンポーネントに対して任意の名前を付け、=で要素を渡すことでpropsを渡すことができる */}
      {/* 変数名指定かタグで囲う */}
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です!"> */}
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* &&:左がtrueの場合に右を返す */}
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
