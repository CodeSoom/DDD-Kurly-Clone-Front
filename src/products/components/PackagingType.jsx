/* eslint-disable react/prop-types */

/**
 * @param { Object } Props Props.children is Product packaging type
 * @param { React.ReactNode } Props.children Product packaging type
 *
 * @example
 * <ProductSummary>
 *   <PackagingType>
 *     Refrigerator / Paper packaging
 *   </PackagingType>
 * </ProductSummary>
 */
export default function PackagingType({ children }) {
  return (
    <>
      <dt>포장타입</dt>
      <dd>{children}</dd>
    </>
  );
}
