/* eslint-disable no-unused-vars */
import checklist from '../data/checklist';

const Salat = () => <div>{checklist.salat.map((i) => <h3>{i.title}</h3>)}</div>;

export default Salat;
