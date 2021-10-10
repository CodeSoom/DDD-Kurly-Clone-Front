/* eslint-disable react/prop-types */

/**
 * @param { Object } Props Props.children is Product expiration date
 * @param { React.ReactNode } Props.children Product expiration date
 *
 * @example
 * <ProductSummary>
 *   <ExpirationDate>
 *     Mark the product separately/ We will ship it with at least 2 days left.
 *   </ExpirationDate>
 * </ProductSummary>
 */
export default function ExpirationDate({ children }) {
  return (
    <>
      <dt>유통기한</dt>
      <dd>{children}</dd>
    </>
  );
}
