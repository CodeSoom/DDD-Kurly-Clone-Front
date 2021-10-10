/* eslint-disable react/prop-types */

/**
 * @param { Object } Props Props.children is Product weight or capacity
 * @param { React.ReactNode } Props.children Product weight or capacity
 *
 * @example
 * <ProductSummary>
 *   <WeightCapacity>500g</WeightCapacity>
 * </ProductSummary>
 */
export default function WeightCapacity({ children }) {
  return (
    <>
      <dt>중량/용량</dt>
      <dd>{children}</dd>
    </>
  );
}
