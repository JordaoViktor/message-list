import React, {createContext, useState} from 'react';

const MessageListContext = createContext({} as any);

const MessageList: React.FC = ({children}) => {
  const [messagesList, setMessagesList] = useState([]);
  

  return (
    <MessageListContext.Provider value={{messagesList, setMessagesList}}>
      {children}
    </MessageListContext.Provider>
  );
};

export {MessageListContext, MessageList};
