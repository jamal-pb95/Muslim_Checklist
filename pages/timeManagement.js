/* eslint-disable no-unused-vars */
import checklist from '../data/checklist';

const TimeManagement = () => <div>{checklist.timeMangement.map((i) => <h3>{i.title}</h3>)}</div>;

export default TimeManagement;
