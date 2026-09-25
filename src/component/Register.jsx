import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.username || !form.email || !form.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (form.password.length < 6) {
      alert("La password debe tener mas de 6 caracteres!");
      return;
    }

    alert("Usuario Registrado exitosamente!!!");

    console.log(form);
  };

  // Renderizado
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleOnChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleOnChange}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Register;
