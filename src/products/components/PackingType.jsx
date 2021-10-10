/* eslint-disable react/prop-types */

/**
 * @param { Object } Props Props.children is Product packing type
 * @param { React.ReactNode } Props.children Product packing type
 *
 * @example
 * <ProductSummary>
 *   <PackingType>
 *     Refrigerator / Paper packaging
 *   </PackingType>
 * </ProductSummary>
 */
export default function PackingType({ children }) {
  return (
    <>
      <dt>포장타입</dt>
      <dd>{children}</dd>
    </>
  );
}
