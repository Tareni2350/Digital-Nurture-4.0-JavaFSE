import React from 'react';

class Cart extends React.Component {
  render() {
    const { item } = this.props;  // ✅ Destructure props to avoid undefined

    return (
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => (
            <tr key={index}>
              <td>{item.itemname}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Cart;
