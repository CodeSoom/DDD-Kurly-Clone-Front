/**
 * @param { Object } Props Props.children is Product delivery classification
 * @param { React.ReactNode } Props.children Product delivery classification
 *
 * @example
 * <ProductSummary>
 *   <DeliveryClassification>
 *     New star delivery / Parcel delivery
 *   </DeliveryClassification>
 * </ProductSummary>
 */
export default function DeliveryClassification({ children }) {
  return (
    <>
      <dt>배송구분</dt>
      <dd>{children}</dd>
    </>
  );
}
