export default function ContactUs() {
  return (
    <section id="contactUs">
      <div className="container mx-auto">
        <div className="contactUs">
          <h2>Contact Us</h2>
          <div className="form">
            <input
              //  for="emailinput"
              type="email"
              placeholder="example@host.com"
              required
            />
            <label id="emailinput" />
            <textarea name="textarea" id="" cols={10} rows={10}></textarea>
          </div>
        </div>
      </div>
    </section>
  )
}
