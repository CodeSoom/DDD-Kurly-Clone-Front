/**
 * @param { Object } Props
 * Props.children is product summaries.<br/>
 * All child is not required.
 * @param { React.ReactNode } Props.children
 *
 * @example
 * <ProductSummary>
 *   <SalesUnit>1pack</SalesUnit>
 *   <WeightCapacity>500g</WeightCapacity>
 *   <DeliveryClassification>
 *     New star delivery / Parcel delivery
 *   </DeliveryClassification>
 *   <CountryOfOrigin>
 *     Tomato(Korean)
 *   </CountryOfOrigin>
 *   <PackagingType>
 *     Refrigerator / Paper packaging
 *   </PackagingType>
 *   <ExpirationDate>
 *     Mark the product separately/ We will ship it with at least 2 days left.
 *   </ExpirationDate>
 *   <Instructions>
 *     - Must Refrigerated.
 *     - There may be a weight error of about 3%.
 *   </Instructions>
 * </ProductSummary>
 */
export default function ProductSummary({ children }) {
  return (
    <dl>
      {children}
    </dl>
  );
}
