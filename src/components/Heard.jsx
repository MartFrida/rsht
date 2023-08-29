import Checkbox from '@mui/material/Checkbox';
import redHeard from '../img/red-heard.svg';
import grayHeard from '../img/gray-heard.svg';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<img src={grayHeard} alt='Simple Heard'/>} checkedIcon={<img src={redHeard} alt='Red Heard'/>} />
    </div>
  );
}
