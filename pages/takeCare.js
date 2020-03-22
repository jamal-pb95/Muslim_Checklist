/* eslint-disable no-unused-vars */
import checklist from '../data/checklist';

const TakeCare = () => <div>{checklist.social.map((i) => <h3>{i.title}</h3>)}</div>;

export default TakeCare;
