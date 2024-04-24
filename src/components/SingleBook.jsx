import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";

// const SingleBook = ({ book }) => {
//   return (
//     <Col xs={6} md={3} lg={2}>
//       <Card className="h-100 card">
//         <Card.Img variant="top" src={book.img} />
//         <Card.Body className="d-flex flex-column justify-content-end">
//           <Card.Title>{book.title}</Card.Title>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default SingleBook;

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };
  render() {
    const { selected } = this.state;
    return (
      <Col xs={6} md={3} lg={2}>
        <Card className={`h-100 card ${selected ? "selected" : ""}`} onClick={this.handleClick}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column justify-content-end">
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
