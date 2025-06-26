handleSubmit(e) {
    e.preventDefault();
    var name = this.nameField.current.state.value;
    var age = this.ageField.current.state.value;
    if(this.nameField.current.state.valid && this.ageField.current.state.valid){
        alert(`Имя: ${name} Возраст: ${age}`);
    }
}
