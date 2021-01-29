import React, { useState, useEffect, useCallback } from "react";
import { defaultDataset } from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId) => {
    chats.push({ text: dataset[nextQuestionId].question, type: "question" });
    setChats(chats);
    setCurrentId(nextQuestionId);
    setAnswers(dataset[nextQuestionId].answers);
  };

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        displayNextQuestion(nextQuestionId);
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: "answer",
        };
        chats.push(chat);
        setChats(chats);
        displayNextQuestion(nextQuestionId);
        break;
    }
  };

  useEffect(() => {
    const initAnswer = "";
    selectAnswer(initAnswer, currentId);
  }, []);

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
      </div>
    </section>
  );
};

export default App;
