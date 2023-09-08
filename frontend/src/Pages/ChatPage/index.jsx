import { MultiChatSocket ,useMultiChatLogic,MultiChatWindow} from "react-chat-engine-advanced";

const ChatPage = (props) => {
  const chatProps = useMultiChatLogic(
    '9147bf30-8aed-48c0-966b-8c1b5fc27bb5',
    props.user.username,
    props.user.secret,
  )
  return (
    <div className="background">
        <MultiChatSocket    {...chatProps} />
        <MultiChatWindow {...chatProps} />
    </div>
  );
};

export default ChatPage;