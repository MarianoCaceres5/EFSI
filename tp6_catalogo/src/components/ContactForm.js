import React from "react";
import '../styles.css'

export default function ContactForm() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, please feel free to get in touch
        with us.
      </p>
      <form>
        <label style={{ marginTop: "2rem", fontWeight: "bold" }} for="name">
          Name:
        </label>
        <input type="text" id="name" name="name" required />
        <label style={{ fontWeight: "bold" }} for="email">
          Email:
        </label>
        <input type="email" id="email" name="email" required />
        <label style={{ fontWeight: "bold" }} for="message">
          Message:
        </label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button className="btnSubmit">Submit</button>
      </form>
    </section>
  );
}
