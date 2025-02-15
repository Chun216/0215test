import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  // axios取得資料後狀態的改變
  const [ people, setPeople ] = useState([]);

  useEffect(() => {
    const getPeopleList = async() => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=10')
        // 確認取得資料
        // console.log('您已取得資料')
        // 確認資料內容
        // console.dir(res)
        // 取得資料
        setPeople(res.data.results)
      } catch (error) {
        console.log(error)
      }
    };
    getPeopleList();
  }, [])
  

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="row">
          <div className="col-md-4">
            {
              people.map((item) => {
                return (
                  <div className="bg-light p-3" key={item.id}>
                    <img
                      src={item.picture.medium}
                      alt="頭像"
                      className="img-fluid rounded-circle"
                    />
                    <h2 className="mb-0">{item.name.first} {item.name.last}</h2>
                    <p className="mb-0">{item.email}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
