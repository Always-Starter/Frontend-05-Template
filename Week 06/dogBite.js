class Dog {
    constructor(props) {
        // this.name = props.name;
        // this.type = props.type;
    }

    action () {
        console.log('Dog bite a person');
    }
}

const dog = new Dog({});

dog.actioin();