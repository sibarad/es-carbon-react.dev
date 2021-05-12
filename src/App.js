import React from 'react';
// import './App.css';
import './app.scss';
import Header from './components/header/Header';

// All the Form components from Carbon
import { Checkbox }  from 'carbon-components-react';
import { Form } from 'carbon-components-react';
import { FormGroup } from 'carbon-components-react';
import { FileUploader } from 'carbon-components-react';
import { NumberInput } from 'carbon-components-react';
import { RadioButton } from 'carbon-components-react';
import { RadioButtonGroup } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import { Search } from 'carbon-components-react';
import { Select } from 'carbon-components-react';
import { SelectItem } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';
import { Toggle } from 'carbon-components-react';
import { mdx } from 'carbon-components-react';

// import { Button } from 'carbon-components-react';

function App() {

    const checkboxEvents = {
        className: 'some-class',
        labelText: 'Checkbox label',
    };

    const fieldsetCheckboxProps = () => ({
        className: 'some-class',
        // legendText: 'Fieldset Legend Text',
        // message: boolean('Show form requirement (message)', false),
        messageText: 'Message Text',
        // invalid: boolean('Mark as invalid (invalid)', false),
    });

  return (
    <div className="App">
        <div className="o-container">
            <Header />
            <FormGroup {...fieldsetCheckboxProps()}>
                <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" />
                <Checkbox {...checkboxEvents} id="checkbox-1" />
            </FormGroup>
            <Search />

            <Button />
        </div>
    </div>
  );
}

export default App;
