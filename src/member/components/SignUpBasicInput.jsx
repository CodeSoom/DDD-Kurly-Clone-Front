export default function BasicInput({
  title, required, placeholder, name, pattern,
  component,
}) {
  return (
    <div>
      <p>
        <span>{title}</span>
        {required ? <span>*</span> : null}
      </p>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        pattern={pattern}
      />
      {component}
    </div>
  );
}
