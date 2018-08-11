import React, { Component } from 'react';
import styled from 'styled-components';

class GameBorad extends Component {
    state={
  
    }
    
    render() {
       
        return (
            <div>
                   <div>
                    <div> {cata} </div>
                    <div>  {Amep} {Abeep}{Aceeep} </div>

                </div>
                <div>
                    <div> {catb} </div>
                    <div>  {Bmep} {Bbeep}{Bceeep} </div>

                </div>
                <div>
                    <div> {catc} </div>
                    <div>   {Cmep} {Cbeep}{Cceeep} </div>

                </div>
                <div>
                    <div> {catd} </div>
                    <div>   {Dmep} {Dbeep}{Dceeep}</div>

                </div>
                <div>
                    <div> {cate} </div>
                    <div>    {Emep} {Ebeep}{Eceeep} </div>

                </div>
                <div>
                    <div> {catf} </div>
                    <div>   {Fmep} {Fbeep}{Fceeep}</div>


                </div>
            </div>
        );
    }
}

export default GameBorad;