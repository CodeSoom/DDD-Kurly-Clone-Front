/**
 * @param { Object } Props Props.children is Product instructions
 * @param { React.ReactNode } Props.children Product instructions
 *
 * @example
 * <ProductSummary>
 *   <Instructions>
 *     - Must Refrigerated.
 *     - There may be a weight error of about 3%.
 *   </Instructions>
 * </ProductSummary>
 */
export default function Instructions({ children }) {
  const instructionsValue = children
    .split('\n')
    .map((value) => value.trim())
    .join('\n');

  return (
    <>
      <dt>안내사항</dt>
      <dd>
        <pre>{instructionsValue}</pre>
      </dd>
    </>
  );
}
