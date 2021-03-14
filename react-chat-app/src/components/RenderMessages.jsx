import MyMessage from "./MyMessage";
import RenderReadReceipts from "./RenderReadReceipts";
import TheirMessage from "./TheirMessage";

const RenderMessages = ({ messages, userName, chat }) => {
  const keys = Object.keys(messages);
  return keys.map((key, index) => {
    const message = messages[key];
    const lastMessageKey = index === 0 ? null : keys[index - 1];
    const isMyMessage = userName === message.sender.username;

    return (
      <div key={`msg_${index}`} style={{ width: "100%" }}>
        <div className="message-block">
          {isMyMessage ? (
            <MyMessage message={message} />
          ) : (
            <TheirMessage
              message={message}
              lastMessage={messages[lastMessageKey]}
            />
          )}
        </div>
        <div
          className="read-receipts"
          style={{
            marginRight: isMyMessage ? "18px" : "0px",
            marginLeft: isMyMessage ? "0px" : "68px",
          }}
        >
          <RenderReadReceipts
            chat={chat}
            message={message}
            isMyMessage={isMyMessage}
          />
        </div>
      </div>
    );
  });
};

export default RenderMessages;
