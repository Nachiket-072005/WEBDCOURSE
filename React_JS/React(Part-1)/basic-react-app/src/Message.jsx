function Message({ userName, color }) {
  let styles = { color: color };
  return (
    <div style={styles}>
      <h1>Hello, {userName}</h1>
    </div>
  );
}

export default Message;
