import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair=styled.div `
color: #464646;
font-size: 18px;
font-weight: 300;
line-height: 22px;
`
const WorkTime=styled.div `
color: #2a2a2a;
font-size: 12px;
font-weight: 300;
line-height: 24px;
	span{
		display: block;
		color: #464646;
		font-weight: 700;
		font-size: 21px;
	}
`

const Calls=styled.div `
color: #2a2a2a;
font-size: 12px;
font-weight: 300;
line-height: 24px;
	span{
		display: block;
		color: #464646;
		font-weight: 700;
		font-size: 21px;
	}
`
const CallButton = styled.button `
width: 176px;
height: 48px;
background-color: #3fc7db;
border-radius: 30px;
color: #ffffff;
font-weight: 400;
font-size: 14px;
&:hover{
background-color: purple;

}

`

class Adress extends React.Component{
	render(){
	return(
		<span> {this.props.addr} </span>
	)
	}
}

class TelNumber extends React.Component{
	render(){
	return(
		<span> {this.props.tel} </span>
	)
	}
}

class Menu extends React.Component {
	render(){
		return (
					<Row>
						<Col lg={3}>
							<Repair> Ремонт айфонов в сервисном центре и на выезде
							</Repair>
						</Col>
						<Col lg={3} lgOffset={1}>
							<WorkTime>Пн-Пт с 10 до 20б сб,вс с 11 до 18
								<Adress addr="Ленинская, 301"></Adress>
							</WorkTime>
						</Col>
						<Col lg={3}>
							<Calls>Звонки принимаются 24 часа </Calls>
							<TelNumber tel="8 (846) 922 55 44"></TelNumber>
						</Col>
						<Col lg={2}>
							<CallButton>Заказать звонок!</CallButton>
						</Col>
					</Row>
			)
	}
}

export default Menu