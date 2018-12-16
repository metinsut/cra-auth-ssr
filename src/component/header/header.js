import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Header, HeaderLeft, HeaderMid, HeaderRight, StyledLink, Button } from "./headerStyle";
import { P } from "../../styles/text";
import { HOME, PROTECTED, USERS, LOGIN, SIGNUP } from "../../constant/routesPath";

class HeaderComponent extends Component {

    logOut = () => {
        this.props.firebase.logout();
        this.props.history.push("/");
    }

    render() {
        let { auth } = this.props;
        const isLogin = auth.success;
        return (
            <Header>
                <HeaderLeft>
                    <StyledLink to={HOME}><P color="white">FireStore Test</P></StyledLink>
                </HeaderLeft>
                <HeaderMid>
                    <StyledLink to={HOME}><P color="white">Home</P></StyledLink>
                    <StyledLink to={USERS}><P color="white">Users</P></StyledLink>
                    {isLogin === true && <StyledLink to={PROTECTED}><P color="white">Protected</P></StyledLink>}
                </HeaderMid>
                <HeaderRight>
                    {isLogin === true ?
                        <Fragment>
                            <P color="white">{auth.displayName}</P>
                            <Button onClick={this.logOut} second>Logout</Button>
                        </Fragment>
                        :
                        <Fragment >
                            <StyledLink to={LOGIN}><Button primary>Login</Button></StyledLink>
                            <StyledLink to={SIGNUP}><Button second>Sign Up</Button></StyledLink>
                        </Fragment>
                    }
                </HeaderRight>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(HeaderComponent));

