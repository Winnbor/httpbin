import './Button.scss';

export default function Button({ onClick, identifier }) {
  return (
    <button
      className="Button"
      type="button"
      onClick={() => onClick(identifier)}
    >
      {identifier}
    </button>
  );
}
