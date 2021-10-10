/**
 * @param { Object } Props Props.children is Product Sub Title
 * @param { React.ReactNode } Props.children Product Sub Title
 *
 * @example
 * <SubTitle>
 *   Very delicious cherry tomato without sugar
 * </SubTitle>
 */
export default function SubTitle({ children }) {
  return (
    <p>
      {children}
    </p>
  );
}
