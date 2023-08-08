import React from 'react'
import '../styles.css'

export default function Contact() {
  return (
    <>
      <main>
        <section className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <button className="btnSubmit">Submit</button>
            </form>
        </section>
      </main>
    </>
  );
}
