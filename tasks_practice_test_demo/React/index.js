<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>METANIT.COM</title>
</head>
<body>
    <div id="app"></div>
 
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 
    <script type="text/babel" data-type="module">
    import React from "https://esm.sh/react@19?dev";
    import ReactDOM from "https://esm.sh/react-dom@19/client?dev";
 
    class InputField extends React.Component {
 
        constructor(props) {
            super(props);
            this.state = {color: this.props.validate(this.props.value)?"green":"red"};
        }
 
        onChange = (e) =>{
            const val = e.target.value;
            const isValid = this.props.validate(val);
            this.props.setValue(val);
            this.setState({color: isValid?"green":"red"});
        }
        render() {
            return <p>
                <label>{this.props.header}:</label><br />
                <input type={this.props.type} value={this.props.value} onChange={this.onChange} 
                    style={{borderColor: this.state.color}} />
            </p>;
        }   
    }
    class UserForm extends React.Component {
 
        constructor(props) {
            super(props);
 
            this.state = {name: "", age: 0};
        }
        validateAge(val) { return val > 0;}
        validateName(val) { return val.length>2;}
 
        setName = (val) => this.setState({name: val});
        setAge = (val) => this.setState({age: val});
 
        handleSubmit = (e) =>{
            e.preventDefault();
 
            if(this.validateName(this.state.name) && this.validateAge(this.state.age)) 
                console.log(`Имя: ${this.state.name} Возраст: ${this.state.age}`);
            else console.log("Некорректные данные");
        }
   
        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                <InputField header="Имя" validate={this.validateName} type="text"
                    value={this.state.name} setValue={this.setName} />
                <InputField header="Возраст" validate={this.validateAge} type="number"
                    value={this.state.age} setValue={this.setAge} />
                <input type="submit" value="Отправить" />
            </form>
        );
      }
    }
    ReactDOM.createRoot(
        document.getElementById("app")
    )
    .render(
        <UserForm />
    );
    </script>
</body>
</html>