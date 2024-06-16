

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [avalablePlaces, setAvailablePlaces] = useState([]);


  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
