import React, {useState} from "react";
import './App.css';
import Square from "./components/square";
import Result from "./components/result";

function App() {

    const [state , setState] = useState({
        player: 'Circle',
        positions:[
            'EMPTY','EMPTY','EMPTY',
            'EMPTY','EMPTY','EMPTY',
            'EMPTY','EMPTY','EMPTY'
        ]
    })

    const takeTurn =(position)=>{
        const positions =[...state.positions]
        positions[position] =state.player

        setState({
            player:state.player ==='Circle' ?'Cross':'Circle',
            positions
        })
    }


    const detectWinner =(p)=>{
        if (p[0]==='Circle'&&p[1]==='Circle'&&p[2]==='Circle')return'Circle'
        if (p[3]==='Circle'&&p[4]==='Circle'&&p[5]==='Circle')return'Circle'
        if (p[6]==='Circle'&&p[7]==='Circle'&&p[8]==='Circle')return'Circle'

        if (p[0]==='Circle'&&p[3]==='Circle'&&p[6]==='Circle')return'Circle'
        if (p[1]==='Circle'&&p[4]==='Circle'&&p[7]==='Circle')return'Circle'
        if (p[2]==='Circle'&&p[5]==='Circle'&&p[8]==='Circle')return'Circle'

        if (p[0]==='Circle'&&p[4]==='Circle'&&p[8]==='Circle')return'Circle'
        if (p[2]==='Circle'&&p[4]==='Circle'&&p[6]==='Circle')return'Circle'

        if (p[0]==='Cross'&&p[1]==='Cross'&&p[2]==='Cross')return'Cross'
        if (p[3]==='Cross'&&p[4]==='Cross'&&p[5]==='Cross')return'Cross'
        if (p[6]==='Cross'&&p[7]==='Cross'&&p[8]==='Cross')return'Cross'

        if (p[0]==='Cross'&&p[3]==='Cross'&&p[6]==='Cross')return'Cross'
        if (p[1]==='Cross'&&p[4]==='Cross'&&p[7]==='Cross')return'Cross'
        if (p[2]==='Cross'&&p[5]==='Cross'&&p[8]==='Cross')return'Cross'

        if (p[0]==='Cross'&&p[4]==='Cross'&&p[8]==='Cross')return'Cross'
        if (p[2]==='Cross'&&p[4]==='Cross'&&p[6]==='Cross')return'Cross'

        if (p.every(position => position !=='EMPTY'))return 'it is a tie!'

    }
    const winner =detectWinner(state.positions)

    const reset =()=>{
        setState({
            player: 'Circle',
            positions:[
                'EMPTY','EMPTY','EMPTY',
                'EMPTY','EMPTY','EMPTY',
                'EMPTY','EMPTY','EMPTY'
            ]
        })
    }

  return (
    <div className="App">
        <div className="grid">
            <Square position={0} value={state.positions[0]} taketurn={takeTurn}/>
            <Square position={1} value={state.positions[1]} taketurn={takeTurn}/>
            <Square position={2} value={state.positions[2]} taketurn={takeTurn}/>
            <Square position={3} value={state.positions[3]} taketurn={takeTurn}/>
            <Square position={4} value={state.positions[4]} taketurn={takeTurn}/>
            <Square position={5} value={state.positions[5]} taketurn={takeTurn}/>
            <Square position={6} value={state.positions[6]} taketurn={takeTurn}/>
            <Square position={7} value={state.positions[7]} taketurn={takeTurn}/>
            <Square position={8} value={state.positions[8]} taketurn={takeTurn}/>
        </div>
        {winner && <Result winner={winner} reset={reset}/>}
    </div>
  );
}

export default App;
