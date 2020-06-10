// Liskov substitution principle

class Person {
}

class Member extends Person {
    access() {
        console.log("You have access!!!")
    }
}

class Guest extends Person {
    isGuest = true;
}

class  FrontEnd extends Member{
    canWEBDev() {}
}

class  BackEnd extends Member{
    canServerDev() {}
}

class AnotherPerson extends Guest {
    access() {
        throw new Error("Access denied. Go home...");
    }
}

function openSecretDoor(member) {
    member.access();
}

openSecretDoor(new FrontEnd());
openSecretDoor(new BackEnd());
// openSecretDoor(new AnotherPerson());// Here should be Member

//==================================================================================================

class Component {
    isComponent = true;
}

class ComponentWithTemplate extends Component {
    render() {
        return `
            <div>Component</div>
        `
    }
}

class HighOrderComponent extends Component{

}

class HOC extends HighOrderComponent {
    render() {
        throw new Error("Render is impossible here!")
    }

    wrapComponent(component) {
        component.wrapped = true;

        return component;
    }
}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {

    }
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {

    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());




