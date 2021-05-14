import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<>
			<h3>{counter}</h3>
			<div>
				<button onClick={inc}>++</button>
			</div>
			<div>
				<button onClick={dec}>--</button>
			</div>
			<div>
				<button onClick={rnd}>rnd</button>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		counter: state,
	};
};

export default connect(mapStateToProps, actions)(Counter);
