import React, { useState } from 'react';
import MathJax from 'react-mathjax3'
import { Cell, Input, Outputs, Prompt, Source } from "@nteract/presentational-components";


function CustomCell(current) {
  const [text, setText] = useState("");
  const [isSelected, setIsSelected] = useState(current);

  const handleKeyPress = (e, bool) => {
    if (e.key === 'Enter' && e.shiftKey) {         
      setIsSelected(bool)
    }
  }

  return (
    <Cell isSelected={isSelected} onKeyPress={e => handleKeyPress(e, false)} onMouseDown={() => setIsSelected(true)}>
        {isSelected &&
        <Input>
            <Prompt counter={1} />
            <Source>
            <textarea
                style={{
                fontFamily: `"Dank Mono", "Source Code Pro", Consolas, "Courier New", Courier,  monospace`,
                backgroundColor: `#fafafa`,
                color: `#212121`,
                fontSize: "1em",
                height: "10em",
                border: "none",
                width: "100%"
                }}
                onChange={e => setText(e.target.value)}
            />
            </Source>
        </Input>
        }
        <Outputs>
        <MathJax.Context
            input='tex'
            onLoad={ () => console.log("Loaded MathJax script!") }
            onError={ (MathJax, error) => {
                console.warn(error);
                console.log("Encountered a MathJax error, re-attempting a typeset!");
                MathJax.Hub.Queue(
                MathJax.Hub.Typeset()
                );
            } }
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
            onKeyPress
        >
            <MathJax.Html html={ text }/>
        </MathJax.Context>
        </Outputs>
    </Cell>
  );
}

export default CustomCell;
