import React from 'react';

const mockOrders = [
  { id: 1, product: 'Wireless Headphones', date: '2024-05-01', status: 'Delivered' },
  { id: 2, product: 'Smart Watch', date: '2024-05-03', status: 'Shipped' },
];

function Orders() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Orders</h2>
      {mockOrders.length === 0 ? (
        <p className="text-center text-muted">You have no past orders.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.date}</td>
                  <td><span className={`badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
