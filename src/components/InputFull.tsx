import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type InputFullType = {
  callBack: (title: string) => void
}
export const InputFull = (props: InputFullType) => {

  let [title, setTitle] = useState("")

  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.currentTarget.value)
  // }

  // const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.charCode === 13) {
  //     addTask();
  //   }
  // }
  const addTask = () => {
    props.callBack(title);
    setTitle('');
  }
  return (
    <div>
      {/*<input value={title}*/}
      {/*       onChange={onChangeHandler}*/}
      {/*       onKeyDown={onKeyDownHandler}*/}
      {/*/>*/}
      <button onClick={addTask}>+</button>
    </div>
  );
};

