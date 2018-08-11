import React, { Component } from 'react';
import styled from 'styled-components';

class GameBorad extends Component {
    state={
  one:200,
  two:400,
  three:600,
  four:800,
  five:1000
    }
    
    render() {
       
const cata= this.props.Agroup.map((cat)=>{

} )


        return (
            <div>
                 <div>
                    {/* {Amep} {Abeep}{Aceeep}
                </div>
                <div>
                    {Bmep} {Bbeep}{Bceeep}
                </div>
                <div>
                    {Cmep} {Cbeep}{Cceeep}
                </div>
                <div>
                    {Dmep} {Dbeep}{Dceeep}
                </div>
                <div>
                    {Emep} {Ebeep}{Eceeep}
                </div>
                <div>
                    {Fmep} {Fbeep}{Fceeep} */}
                </div>
            
            </div>
        );
    }
}

export default GameBorad;