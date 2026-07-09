
function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>
        Have a question, suggestion, or need assistance? We're here to help!
        Feel free to contact us using the information below.
      </p>

      <h2>Contact Information</h2>

      <p><strong>📍 Address:</strong> Beni Mellal, Morocco</p>
      <p><strong>📞 Phone:</strong> +212 6 XX XX XX XX</p>
      <p><strong>📧 Email:</strong> contact@myboutique.com</p>

      <h2>Business Hours</h2>

      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
      <p>Saturday: 9:00 AM - 1:00 PM</p>
      <p>Sunday: Closed</p>

      <h2>Send Us a Message</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>

      <h2>Our Commitment</h2>

      <p>
        We are committed to providing quality products, excellent customer
        service, and a smooth shopping experience for every customer.
      </p>
    </div>
  );
}

export default Contact;