import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {InputFull} from './components/InputFull';

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}


// function InputFullType(props: { callBack: () => void }) {
//   return null;
// }

// function Input() {
//   return null;
// }

export function Todolist(props: PropsType) {

  let [title, setTitle] = useState("")


  const tsarChangeFilter = (filterValue: FilterValuesType) => {
    props.changeFilter(filterValue)
  }
  // const onAllClickHandler = () => props.changeFilter("all");
  // const onActiveClickHandler = () => props.changeFilter("active");
  // const onCompletedClickHandler = () => props.changeFilter("completed");
  const onClickHandler = (tID: string) => {
    props.removeTask(tID)
  }
  const addTitleHandler = () => {
    console.log('drggfhg')
    props.addTask(title)
    setTitle('')
  }

  return <div>
    <h3>{props.title}</h3>

    {/*  <input value={title}*/}
    {/*         onChange={onChangeHandler}*/}
    {/*         onKeyDown={onKeyDownHandler}*/}
    {/*  />*/}
    {/*  <button onClick={addTask}>+</button>*/}
    {/* eslint-disable-next-line react/jsx-no-undef */}
    <Input title={title} setTitle={setTitle} callBack={addTitleHandler}/>
    <Button nameOfButton={'+'} callBack={addTitleHandler}/>

    {/*<InputFull callBack={props.addTask}/>*/}
    <ul>
      {
        props.tasks.map(t => {

          // const onClickHandler = () => props.removeTask(t.id)

          return <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            {/*<button onClick={ onClickHandler }>x</button>*/}
            <Button nameOfButton={'x'} callBack={() => onClickHandler(t.id)}/>
          </li>
        })
      }
    </ul>
    <div>
      {/*<button onClick={()=>tsarChangeFilter('all',)}>All</button>*/}
      <Button nameOfButton={'All'} callBack={() => tsarChangeFilter('all')}/>
      {/*<button onClick={()=>tsarChangeFilter('active')}>Active</button>*/}
      <Button nameOfButton={'Active'} callBack={() => tsarChangeFilter('active')}/>
      {/*<button onClick={()=>tsarChangeFilter('completed')}>Completed</button>*/}
      <Button nameOfButton={'Completed'} callBack={() => tsarChangeFilter('completed')}/>

    </div>
  </div>
}
