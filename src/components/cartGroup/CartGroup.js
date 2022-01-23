import React, { Component } from "react";
import gamePhoto from "../../images/game.jpg";
import edevlet from "../../images/unnamed.png";
import goverment from "../../images/goverment.png";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardSubtitle,
  Button,
  CardTitle,
  CardGroup,
} from "reactstrap";

export default class CartGroup extends Component {
    
  render() {
    return (
      <div>
        <CardGroup style={{boxShadow: "2px 2px 4px #000000"}}>
          <Card>
            <CardImg alt="Card image cap" src={gamePhoto} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">E-Commerce Game</CardTitle>

              <CardText>
                You can learn concepts and information about e-commerce by
                playing games. The learning process will become more enjoyable
                thanks to this 2D platform game. When you break the game, you
                will be able to rise to advanced levels with the knowledge you
                have learned and you will take your place in the leaderboard...
              </CardText>
             
            </CardBody>
          </Card>
          <Card>
            <CardImg alt="E-Devlet" src={edevlet} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">E-Goverment Process in Turkey</CardTitle>

              <CardText>
                e-Government, e-Government Gateway, or Digital Turkey is a
                web-based system that aims to deliver accurate information to
                citizens through a common point in a secure, uninterrupted and
                fast manner in electronic environment, taking into account user
                needs of government services...
              </CardText>
             
            </CardBody>
          </Card>
          <Card>
            <CardImg alt="E-Goverment" src={goverment} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">
                E-government development in the world
              </CardTitle>

              <CardText>
                Electronic government (or e-Government) is the application of
                Information and Communication Technologies (ICTs) to government
                functions and procedures with the purpose of increasing
                efficiency, transparency and citizen participation.Electronic
                government...
              </CardText>
              
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
