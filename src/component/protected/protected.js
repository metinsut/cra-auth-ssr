import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import requireAuth from '../auth/auth';
import { H2 } from '../../styles/text';

class ProtectedComponent extends Component {
	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		const { data } = this.props;
		console.log(data);
		return (
			<div>
				<H2>PROTECTED PAGE</H2>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.protected
	};
};

const loadData = store => {
	return store.dispatch(fetchData());
};

const ProtectedComp = compose(connect(mapStateToProps))(ProtectedComponent);

export default {
	loadData,
	component: requireAuth(ProtectedComp)
};
