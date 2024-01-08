import React, { useState, useCallback, useEffect } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { GiftedChat, Message } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const deleteMessage = async (messageId) => {
    try {
      await deleteDoc(doc(database, "chats", messageId));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const editMessage = async (messageId, newText) => {
    try {
      await updateDoc(doc(database, "chats", messageId), {
        text: newText,
      });
      setEditingMessageId(null);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const renderMessage = useCallback(
    (props) => {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Message {...props} />
          </View>
          {props.currentMessage && (
            <View style={{ flexDirection: "row" }}>
              {editingMessageId !== props.currentMessage._id ? (
                <TouchableOpacity
                  onPress={() => {
                    setEditingMessageId(props.currentMessage._id);
                    setEditedText(props.currentMessage.text);
                  }}
                  style={{ marginRight: 10 }}
                >
                  <AntDesign name="edit" size={24} color="blue" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    editMessage(props.currentMessage._id, editedText)
                  }
                  style={{ marginRight: 10 }}
                >
                  <AntDesign name="check" size={24} color="green" />
                </TouchableOpacity>
              )}
              {editingMessageId === props.currentMessage._id && (
                <TextInput
                  value={editedText}
                  onChangeText={setEditedText}
                  onBlur={() => setEditingMessageId(null)}
                  autoFocus
                />
              )}
              <TouchableOpacity
                onPress={() => deleteMessage(props.currentMessage._id)}
                style={{ marginLeft: 10 }}
              >
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
    },
    [messages, editingMessageId, editedText]
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          <AntDesign
            name="logout"
            size={24}
            color={colors.gray}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
      renderMessage={renderMessage}
      messagesContainerStyle={{
        backgroundColor: "#fff",
      }}
      textInputStyle={{
        backgroundColor: "#fff",
        borderRadius: 20,
      }}
      user={{
        _id: auth?.currentUser?.email,
        avatar: "https://i.pravatar.cc/300",
      }}
    />
  );
}
