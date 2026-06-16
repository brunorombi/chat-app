import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

import MessageSkeleton from "./skeletons/MessageSkeleton";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  const {messages, getMessages, isMessagesLoading, selectedUser} = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages])

  if(isMessagesLoading) return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader></ChatHeader>
      <MessageSkeleton></MessageSkeleton>
      {/* <MessageInput></MessageInput> */}
    </div>
  )

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader/>

      <p>messages...</p>

      <MessageInput></MessageInput>
    </div>
  )
}

export default ChatContainer