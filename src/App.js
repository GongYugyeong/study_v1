/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, setTitle] = useState(['title01', 'title02', 'title03']);
  let [titleNumber, setTitleNumber] = useState(0);
  let [like, setLike] = useState([0,1,2]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState('');

  let style = ({'cursor':'pointer'});

  return (
    <div className="App">
      <div className="black-nav">
        <h1>blogTest</h1>
      </div>
      {title.map(function (name, index) {
        return (
          <div
            className="list"
            key={index}
            onClick={() => {
              setTitleNumber(index), setModal(true);
            }}
          >
            <h3 className="titleName">
              {name}{' '}
              <span style={style} data-item={index}
                onClick={(e) => {
                  let data = e.target.dataset['item'];
                  let likeCopy = [...like];
                  
                  data == index
                  ? likeCopy[index] = likeCopy[index] + 1
                  : null

                  // data == 1
                  // ? likeCopy[1] = likeCopy[1] + 1
                  // : null

                  // data == 2
                  // ? likeCopy[2] = likeCopy[2] + 1
                  // : null

                  setLike(likeCopy);
                }}
              >
                👍{' '}
              </span>
              {like[index]}
            </h3>
            <p>2020년 11월 0{index + 1}일</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let titleCopy = [...title];
            titleCopy.unshift(input);
            setTitle(titleCopy);
          }}
        >
          저장
        </button>
      </div>

      {/* <input type="text" onChange={(e)=>{ setInput(e.target.value) }} /> */}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        열고닫기
      </button>

      {modal === true ? (
        <Modal title={title} titleNumber={titleNumber}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.title[props.titleNumber]}</h3>
      <p>내용</p>
    </div>
  );
}

export default App;
