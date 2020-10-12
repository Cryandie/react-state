import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Person extends Component {
  state = {
    fullName: "Seïf BS",
    bio: " This is my bio",
    imgSrc:
      "https://cdn1.iconfinder.com/data/icons/cute-mice-reactions/250/Asset_2-512.png",
    profession: "Becoming a dev",
    count: 0,
  };

  render() {
    return (
      <div className="person">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            style={{ height: "16rem" }}
            src={this.state.imgSrc}
          />
          <Card.Body>
            <Card.Title>{this.state.fullName}</Card.Title>
            <span>{this.state.profession}</span>
            <Card.Text>{this.state.bio}</Card.Text>
            <p className="count">Current Count :{this.state.count}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
  componentDidMount() {
    this.Myinterval = setInterval(() => {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
    }, 1000);
  }
}
