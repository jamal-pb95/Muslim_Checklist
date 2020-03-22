/* eslint-disable no-unused-vars */
import checklist from '../data/checklist';

const Ramadan = () => <div>{checklist.ramadan.map((i) => <h3>{i.title}</h3>)}</div>;

export default Ramadan;
