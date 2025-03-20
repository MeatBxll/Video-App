import "./Meeting-Block.css";
// import IconInput from "../reusable-components/icon_text_input_field/icon_text_input_field";
const Meeting_Block = () => {
  return (
    <section>
      <h2>Join Calls With Whoever</h2>
      <h3>Join Calls for: Overwatch, Marvel Rivals, Or even Rust !</h3>
      <button>New Meeting</button>
      <input type="text" placeholder="Enter Your Code"></input>
      <button>Join</button>
      <p>
        <a
          href="https://support.google.com/meet/?hl=en#topic=14074839"
          className="learn-more"
        >
          Learn More
        </a>
        about Google Meet
      </p>
    </section>
  );
};

export default Meeting_Block;
