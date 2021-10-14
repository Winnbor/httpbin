import './TimeBar.scss';

export default function TimeBar({ time }) {
  return (
    <div className="TimeBar">
      <p>Request was made: {time}</p>
    </div>
  );
}
