import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
 

describe("These test cases for contact Component" , ()=>{
    test("Checking the heading is present or not", ()=>{
        render(<Contact/>);
    
        const heading  = screen.getByText("This is a contact page!!");
    
        expect(heading).toBeInTheDocument();
    
    })
    
    
    test("checking the button is loaded or not",()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
    })
})
