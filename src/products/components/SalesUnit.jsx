/* eslint-disable react/prop-types */

/**
 * @param { Object } Props Props.children is Product sales unit
 * @param { React.ReactNode } Props.children Product sales unit
 *
 * @example
 * <ProductSummary>
 *   <SalesUnit>1pack</SalesUnit>
 * </ProductSummary>
 */
export default function SalesUnit({ children }) {
  return (
    <>
      <dt>판매단위</dt>
      <dd>{children}</dd>
    </>
  );
}
