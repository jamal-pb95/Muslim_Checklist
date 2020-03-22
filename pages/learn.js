/* eslint-disable no-unused-vars */
import checklist from '../data/checklist';

const Learn = () => <div>{checklist.learn.map((i) => <h3>{i.title}</h3>)}</div>;

export default Learn;
