import React from "react";
import styled from "styled-components";
import Button from "../components/generic/Button/Button";
import Panel from "../components/generic/Panel/Panel";
import DisplayRound from "../components/generic/DisplayRounds/DisplayRounds";
import DisplayTime from "../components/generic/DisplayTime/DisplayTime";
import Input from "../components/generic/Input/Input";
import TimerButtons from "../components/generic/TimerButtons/TimerButtons";
import DocumentComponent from "../components/documentation/DocumentComponent";
import Loading from "../components/generic/Loading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
          title="Button "
          component={<Button onClick={() => console.log("Documentation - button clicked")} />}
          propDocs={[
            {
              prop: "type",
              description: "Flag to identify increment and decrement buttons from other ones",
              type: "string",
              defaultValue: "''",
            },
            {
              prop: "text",
              description: "Text to be placed on button",
              type: "string",
              defaultValue: "Click Here",
            },
            {
              prop: "onClick",
              description: "Actions to be performed when button is clicked",
              type: "function",
              defaultValue: "undefined",
            },
            {
              prop: "current",
              description: "Marks the timer that is being set",
              type: "bool",
              defaultValue: "",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayRound "
          component={<DisplayRound/>}
          propDocs={[
            {        
              prop: "none",
              description: "Just conditionally rendering the rounds from a different component. \n It uses the current round, total number or rounds, and rest boolean variabel from context.",
              type: "div",
              defaultValue: "",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayTime "
          component={<DisplayTime/>}
          propDocs={[
            {        
              prop: "none",
              description: "Display the number either ticking up or down with the information about the rounds of the timer and other visuals.",
              type: "",
              defaultValue: "",
            }
          ]}
        />
        <DocumentComponent
          title="Input "
          component={<Input />}
          propDocs={[
            {
              prop: "type",
              description: "Help identify type of input (rest, work, rounds)",
              type: "string",
              defaultValue: "the props in context default all inputs to either 0 or 1",
            },
            {
              prop: "placeholder",
              description: "Placeholder for the input",
              type: "string",
              defaultValue: "Name of input field"
            },
          ]}
        />
        <DocumentComponent
          title="Panel "
          component={<Panel />}
          propDocs={[
            {        
              prop: "children",
              description: "Other divs to render inside of the panel",
              type: "div",
              defaultValue: "undefined",
            },
            {
              prop: "type",
              description: "Help identify different panels on page to change their CSS accordingly",
              type: "string",
              defaultValue: "",
            },
          ]}
        />
        <DocumentComponent
          title="Panel "
          component={<TimerButtons />}
          propDocs={[
            {        
              prop: "none",
              description: "Uses everything it needs from context - it has all the timer controls (Start, Pause, Reset, resume).",
              type: "",
              defaultValue: "",
            },
          ]}
        />

        

        </div>
      </Container>
    );
  }
}

export default Documentation;
