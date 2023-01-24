import React, { useState } from 'react';
import './MyForm.css';

function MyForm({ user }) {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o fomulário');
    console.log('name', name, 'email', email, 'bio', bio, 'role', role);

    // 7 Limpar formulário
    setName('');
    setEmail('');
    setBio('');
  };
  // console.log(name);
  // console.log(email);
  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - criação de form */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <span>Nome: </span>
            <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
          </label>
          {/* 2 - Label envolvendo input */}
          <label htmlFor="email">
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor="bio">
            <span>Bio: </span>
            <textarea
              name="bio"
              placeholder="Descrição do usuário"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </label>
          {/* 9 - select */}

          <label htmlFor="role">
            <span>Função no sistema</span>
            <select value="admin" name="role" onChange={(e) => setRole(e.target.value)}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default MyForm;
