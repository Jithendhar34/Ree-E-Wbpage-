import React, { useState } from 'react';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${form.name}`);
    setForm({ name: '', email: '', password: '' }); // clear form
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '450px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4">Create an Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ borderRadius: '5px' }}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ borderRadius: '5px' }}
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              style={{ borderRadius: '5px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
