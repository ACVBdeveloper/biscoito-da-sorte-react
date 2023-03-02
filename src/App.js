import React, {Component} from "react";
import './style.css'
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      texto:''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
    'A persistência realiza o impossível', 'Seus sonhos não precisam de plateia, eles só precisam de você',
    'A persistência é o caminho do êxito','Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.']
  }

  quebraBiscoito(){

    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.texto ='"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src= {require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBnb={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.texto}</h3>
      </div>
    )
  }
}


class Botao extends Component{

  render(){
      return(
          <div>
              <button className="botao" onClick={this.props.acaoBnb}>{this.props.nome}</button>
          </div>
      )
  }
}


export default App;