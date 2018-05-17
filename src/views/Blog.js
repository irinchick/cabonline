import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

class Blog extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to My blog</h1>
                </header>

            </div>
        );
    }
}

export default Blog;
