const Card = (props) => (
	<div style={card}>
		<h2 style={cardTitle}>{props.title}</h2>
		<p style={cardBody}>{props.message}</p>
	</div>
);

export default Card;

const card = {
	fontFamily: 'Arial',
	margin: 15,
	padding: 20,
	border: '1px solid #DDD'
};

const cardTitle = {
	fontSize: 36,
	fontWeight: 'bold'
};

const cardBody = {
	fontWeight: 300
};
