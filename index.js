const Button = (props) => {
  const { text, className } = props;
  return (
    <div className={className}>
      <h1>{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="button-container">
      <Button text="Like" className="like-button" />
      <Button text="Comment" className="comment-button" />
      <Button text="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
