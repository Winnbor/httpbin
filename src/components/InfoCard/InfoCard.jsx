import './InfoCard.scss';

export default function InfoCard({ info }) {
  return (
    <div className="InfoCard">
      <p className="render">{JSON.stringify(info, null, '\t')}</p>
    </div>
  );
}
