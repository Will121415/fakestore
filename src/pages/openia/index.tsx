import { Textarea, useInput, Grid, Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { generateText } from '../../../api';


// http petition



const OpenIAPage = () => {
    const [text, setText] = useState<string>('');
    const { value, bindings } = useInput('');

    const handleClick = async () => {
        console.log(value)
        const message = await generateText(value);
        setText(message);
    };

    return (
        <div>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={12} md={12}>
                    <Textarea
                        id='textarea'
                        onChange={bindings.onChange}
                        aria-label="textarea"
                        placeholder="Write your text here"
                        width='100%'
                    />
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Button onClick={handleClick}>Generate text</Button>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <p>{text}</p>
                </Grid>

            </Grid.Container>
        </div>
    );
}


export default OpenIAPage