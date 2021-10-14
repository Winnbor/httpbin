import { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import './InfoCard.scss';

export default function InfoCard({ info }) {
  const [headersVisible, setHeadersVisible] = useState(false);

  const handleToggleHeaders = () => {
    setHeadersVisible(!headersVisible);
  };

  const keyChecker = key => Object.keys(info)?.includes(key);

  return (
    <div className="InfoCard">
      <p className="render">"args": {JSON.stringify(info?.args, null, '\t')}</p>
      {keyChecker('data') && (
        <p className="render">
          "data": {JSON.stringify(info?.data, null, '\t')}
        </p>
      )}
      {keyChecker('files') && (
        <p className="render">
          "files": {JSON.stringify(info?.files, null, '\t')}
        </p>
      )}
      {keyChecker('form') && (
        <p className="render">
          "form": {JSON.stringify(info?.form, null, '\t')}
        </p>
      )}
      <p className="render">
        "headers":{' '}
        {headersVisible && (
          <span>{JSON.stringify(info?.headers, null, '\t')}</span>
        )}
        <button className="toggler-btn" onClick={handleToggleHeaders}>
          {headersVisible ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      </p>
      {keyChecker('json') && (
        <p className="render">
          "json": {JSON.stringify(info?.json, null, '\t')}
        </p>
      )}
      <p className="render">
        "origin": {JSON.stringify(info?.origin, null, '\t')}
      </p>
      <p className="render">"url": {JSON.stringify(info?.url, null, '\t')}</p>
    </div>
  );
}
