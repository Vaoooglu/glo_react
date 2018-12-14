import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components'


class App extends Component {
  render() {
    return (
			<div className="wrapper">
			<SayFullName name="Ivan" surname="Ivanov" link="yandex.ua" />
			<SayFullName name="Anna" surname="Sedakova" link="mail.ru" />
			<SayFullName name="Nikolay" surname="Gagarin" link="gmail.com" />
			</div>
    );
  }
}

function SayFullName(props){
	return(
		<div>
		<h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
		<a href={props.link}>Ссылка на мой профиль</a>
		</div>
	)
}

export default App;
