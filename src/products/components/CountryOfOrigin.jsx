/* eslint-disable react/prop-types */

/**
 * @param { Object } Props Props.children is Product country of origin
 * @param { React.ReactNode } Props.children Product country of origin
 *
 * @example
 * <ProductSummary>
 *   <CountryOfOrigin>
 *     Tomato(Korean)
 *   </CountryOfOrigin>
 * </ProductSummary>
 */
export default function CountryOfOrigin({ children }) {
  return (
    <>
      <dt>원산지</dt>
      <dd>{children}</dd>
    </>
  );
}
