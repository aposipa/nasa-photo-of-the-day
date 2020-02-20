import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container} from 'reactstrap';
import styled from "styled-components";

const TextColor = styled.p `
    color: blue;
`
const BackgroundColor = styled.div `
background-color: slategray;
`
const NasaCardTitle = styled.div `
    font-weight: bold;
    text-decoration: underline;
` 

const PhotoCard = (props) => {
    return (
        <BackgroundColor>
            <Container>
            <Card>
            <CardImg width="50%" src={props.image} alt="space photo"/>
            <CardBody>
                <NasaCardTitle>Photo Title: {props.title}</NasaCardTitle>
                <TextColor>Explanation: {props.explanation}</TextColor>
                <CardSubtitle>Date: {props.date}</CardSubtitle>
            </CardBody>
            </Card>
            </Container>
        </BackgroundColor>
    );
};
export default PhotoCard;