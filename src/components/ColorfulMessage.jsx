import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // プロパティ名と当てはめる値（変数名）が同じ時に省略できる
    color,
    // cssではfont-sizeと書くが、reactではfontSizeとなる
    fontSize: "18px"
  };

  // htmlの中ではjsは必ず{}をつける
  return <p style={contentStyle}>{children}</p>;
  // return <p style={contentStyle}>{props.message}</p>;
};

// export default ColorfulMessage;
