function Contact() {
    return (
      <div className="contact">
        <header>
          <h1>Contacto</h1>
        </header>
        <section>
          <h2>Formulario de Contacto</h2>
          <form>
            <label>
              Nombre:
              <input type="text" name="name" required />
            </label>
            <label>
              Correo Electrónico:
              <input type="email" name="email" required />
            </label>
            <label>
              Mensaje:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </section>
        <section>
          <h2>Información de Contacto</h2>
          <p>Correo Electrónico: <a href="leonelochoa2901@gmail.com">leonelochoa2901@gmail.com</a></p>
          <p>Teléfono: +52 631 164 5478</p>
          <p>LinkedIn: <a href="www.linkedin.com/in/cristian-leonel-ochoa-beltran-845b92324" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </section>
      </div>
    );
  }
  
  export default Contact;