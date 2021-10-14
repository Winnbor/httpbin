import { useState } from 'react';
import { getRequest } from 'services/helpers';

import Button from 'components/Button/Button';
import InfoCard from 'components/InfoCard/InfoCard';
import TimeBar from 'components/TimeBar/TimeBar';

import './InfoHub.scss';

export default function InfoHub({ identifier }) {
  const [info, setInfo] = useState(null);
  const [time, setTime] = useState(null);

  const handleClick = async type => {
    const timePrint = new Date();

    try {
      setTime(timePrint.toLocaleString('en-GB'));
      const data = await getRequest(type);
      setInfo(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="InfoHub">
      <Button onClick={handleClick} identifier={identifier} />
      {info && (
        <>
          <InfoCard info={info} />
          <TimeBar time={time} />
        </>
      )}
    </div>
  );
}
