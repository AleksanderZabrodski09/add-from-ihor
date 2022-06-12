import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputType = {
  title: string
  setTitle: (title: string) => void
  callBack:()=>void
}

export const Input = (props: InputType) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.callBack();
    }
  }
  return (
    <div>
      <input value={props.title}
             onChange={onChangeHandler}
             onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};