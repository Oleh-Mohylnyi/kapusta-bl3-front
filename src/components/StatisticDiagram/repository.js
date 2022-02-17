const customBarLabelPriceMobile = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={width - 30}
      y={y}
      fill="#52555f"
      fontSize={10}
      textAnchor="start"
      dy={-5}
    >{`${parseFloat(value).toFixed(2)}грн`}</text>
  );
};

const customLabelListNameMobile = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x}
      y={y}
      fill="#52555f"
      fontSize={10}
      textAnchor="bottom"
      dy={+26}
    >{`${value}`}</text>
  );
};

const customBarLabelPrice = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x}
      y={y}
      fill="#52555f"
      fontSize={12}
      textAnchor="top"
      dy={-10}
    >{`${parseFloat(value).toFixed(2)} грн`}</text>
  );
};

const customLabelListName = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x}
      y={y}
      fill="#52555f"
      fontSize={12}
      textAnchor="middle"
      dx={+width / 2}
      dy={height + 20}
    >{`${value}`}</text>
  );
};
export {
  customLabelListName,
  customBarLabelPrice,
  customLabelListNameMobile,
  customBarLabelPriceMobile,
};
