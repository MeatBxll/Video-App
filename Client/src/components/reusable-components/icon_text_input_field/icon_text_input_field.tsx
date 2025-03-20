import "./icon_text_input_field.css";

// interface IconProps {
//   children: String;
//   placeHolder: String;
//   type: string;
// }
// const IconInput = (props: IconProps) => {
//   return (
//     <div className="wrap">
//       <div className="icon-wrap">children</div>
//       <input type=type placeholder =(placeHolder)  />
//     </div>
//   );

function IconInput({ children, placeHolder, type }) {
  return (
    <div className="wrap">
      <div className="icon-wrap">{children}</div>
      <input type={type} placeholder={placeHolder} />
    </div>
  );
}

function App() {
  return (
    <div className="input-wrap">
      <IconInput
        children={"hello"}
        placeHolder="Apple Id"
        type="text"
      ></IconInput>
    </div>
  );
}
