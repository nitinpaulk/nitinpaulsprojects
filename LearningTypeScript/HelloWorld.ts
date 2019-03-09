import { Address } from "./SecondFile"; //This is how we import another file
class Hello
{
    public UserName: string = "";
    public Addressobj: Address = new Address();
    
    Validate() {
        alert("Hello World");
    }

    ShowNumber(input: number): void {
        alert("Hi you are number: " + input);
    }
}
//implementing inheritance using typescript
class AnotherClass extends Hello {
    Validate(){
        alert("This is from the other class");
    }
}