import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//만약 props로 받는다면 props.info.id로 받아야하는데
//{info} 이렇게 구조분해할당으로 받는다면 info.id 이렇게 받으면 됨
const MenuItem = ({info}) => {
  return (

    <Card style={{ width: '18rem'}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Img variant="top" src={info.img} />
        <Card.Body>
            <Card.Title>{info.name}</Card.Title>
            <Card.Text>
            {info.price}
            </Card.Text>
            <Button variant="primary">주문하기</Button>
        </Card.Body>
    </Card>
  )
}

export default MenuItem