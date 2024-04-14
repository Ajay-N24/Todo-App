import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState({ text: '' });
  const [todo, setTodo] = useState([]);
  const addItem = () => {
    const updatedTodo = [...todo, data.text];
    setTodo(updatedTodo);
    setData({ text: '' });
    localStorage.setItem('todoItems', JSON.stringify(updatedTodo));
  }
  const setValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  const deleteItem = (k) => {
    setTimeout(() => {
    }, 500);
    let copy = [...todo];
    copy.splice(k, 1);
    setTodo(copy);
    localStorage.setItem('todoItems', JSON.stringify(copy));
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todoItems'));
    if (items) {
      setTodo(items);
    }
  }, [])

  return (
    <div className='bg-[#e4e9fd] bg-gradient-to-l from-slate-500 px-[300px] max-[1100px]:px-[150px] max-[750px]:px-[50px] max-sm:px-[13px] py-20'>
      <div className='flex flex-col items-start min-h-[480px] border-1 border-solid border-gray-500 shadow-lg rounded-xl bg-white'>
        <h1 className='font-bold text-2xl pt-5 flex justify-center w-full text-slate-600'>
          <div>Todo Application</div>
        </h1>
        <div className="flex items-start justify-center mt-10 gap-2 w-full px-20 max-[1100px]:px-14 max-[750px]:px-10 max-sm:px-3 mb-10">
          <input type="text" name="text" id="text" className='text-lg border-2 border-slate-950 rounded-lg w-full focus:ring-2 p-2' onChange={setValue} value={data.text} />
          <div className='mt-[-3px] cursor-pointer rounded-full ' onClick={addItem}>
            <svg width="50px" height="50px" stroke-width="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 12H12M16 12H12M12 12V8M12 12V16" stroke="#000000" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>
        <ul className='px-28 text-start'>
          {console.log(todo)}
          {todo.map((item, k) => {
            return (
              <div className='flex gap-2'>
                <input type="checkbox" onChange={() => { deleteItem(k) }} />
                <li className='text-lg py-3' key={k}>{item}</li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;