import { countAtom } from "./store/atom/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";



function App(){
  return(
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CountRender />
    <Buttons />
  </div>
}

function CountRender(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)

  return <div>
    <button onClick= {()=>{
      setCount(count+1)
    }} >Increase</button>

    <button onClick= {()=>{
      setCount(count-1)
    }}>Decrease</button>

    {count%2 ==0 ? "It is even": null}
  </div>
}

export default App