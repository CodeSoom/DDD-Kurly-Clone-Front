/**
 * @param { Object } Props Props.children is Product Origin Price(number type)
 * @param { React.ReactNode } Props.children Product Origin Price(number type)
 *
 * @example
 * <OriginPrice>8640</OriginPrice>
 */
export default function OriginPrice({ children }) {
  const price = children.toLocaleString();

  return (
    <strong>
      {price}
      <small>원</small>
    </strong>
  );
}
