export default function Contact() {
  return (
    <section className="stack">
      <h2>Contact</h2>
      <div className="page-header">
        <h3>Get in Touch</h3>
      </div>
      <p>
        Have a question about our products or services? Need assistance with your order? We're here to help! Contact the team at Hornet Outdoors & Tactical for personalized assistance and expert advice. Whether you prefer to reach us by phone, email, or through our online contact form, we'll respond promptly to address your inquiries and ensure your complete satisfaction. At Hornet Outdoors & Tactical, customer service is our top priority, and we're always eager to assist you in any way we can. Don't hesitate to reach out – we look forward to hearing from you! You can find our contact information below.
      </p>

      {/* Simple non-functional form placeholder */}
      <form className="form">
        <div className="form__row">
          <input placeholder="Name" />
          <input placeholder="Email" type="email" />
        </div>
        <textarea rows="5" placeholder="Your message" />
        <button className="btn" type="button">Send (placeholder)</button>
      </form>
    </section>
  )
}
