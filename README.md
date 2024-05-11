# SuperSimpleDev_Javascript_Course

<h2>Notes that I wrote learning from the JavaScript course:</h2>

<h3>Lesson 1: JavaScript Basics</h3>
<ul>
  <li>Used website <b>“supersimple.dev/js-basics/”</b></li>
  <li><b>alert(text)</b></li>
  <ul>
        <li>This allows a pop-up on the screen of the website</li>
  </ul>
  <br>
  <li>You can use the console as the calculation</li>
  
  ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/29556356-104d-40c5-a9e7-25e16e113ca1)
  
  
  <li><b>document.body.InnerHTML = ‘(text)’</b></li>
  <li>This replaces the entire code with the text you inputted on the document.body.InnerHTML = “(input_text)”</li>
</ul>
<br>
<h3>Lesson 2: Numbers and Math:</h3>
<ul>
  <li>Did mostly to calculate numbers with the amazon website</li>
  <ul>
    <li>supersimple.dev/projects/amazon</li>
  </ul>
  <br>
  <li>Learned new function Math.round(decimal_num)</li>
  <ul>
    <li>Make sure to use Capital ‘M’ for Math</li>
    <li>Rounds to the nearest integer</li>
    <li>Math.round(2.2) / output = 2</li>
    <li>Math.round((2095 + 799) * 0.1) / 100</li>
  </ul>
  <br>
  <li>Converting into 2 decimal places using conversions. Note: Only know 2 decimal places</li>
  <ul>
    <li>20.95 + 7.99 + 18.99) -> Output: 47.92999999999999</li>
    <li>Then turn everything to an integer, no decimals.  Use order of precedence then divide by 100</li>
    <li>(2095 + 799 + 1899) / 100 -> Output 47.93</li>
  </ul>
  <br>
  <li>Easier function to round numbers are <b>.toFixed(round_to_nearest…)</b></li>
  <li>Math.ceil() and Math.floor()</li>
</ul>

<br>
<h3>Lesson 3: Strings</h3>
<ul>
  <li>Pretty much learned how to concatenate letters</li>
  <br>
  <li>Working with different type values like string, number, bool</li>
  <br>
  <li>Learned <b>type coercion</b>: The process of automatic or implicit conversion of values from one datatype to another</li>
  <ul>
    <li>For example: 'string' + 3 -> output: 'string3'</li>
  </ul>
  <br>
  <li>Javascript calculator left to right (might affect calculations)</li>
  <ul>
    <li>‘$’ + 20.95 + 7.99 -> Output '$20.957.99' *Incorrect*</li>
    <li>‘$’ + (20.95 + 7.99) -> '$28.93…' *Correct*</li>
  </ul>
  <br>
  <li>Summary of what I learned</li>
    <ul>
      <li>String = text</li>
      <li>Three ways to create a strings:</li>
      <ul>
        <li>‘...’ <b>(single string / single quotes)</b></li>
        <li>“...” <b>(double string / double quotes)</b></li>
        <li>`...` <b>(template string)</b></li>
        <ul>
          <li>Equivalent to <b>f-string</b> in Python</li>
        </ul>
      </ul>
      <li>Escape Characters: <b>\n \’</b></li>
      <li>Interpolation -> <b>`${calculation or variable}`</b> equivalent to f-string</li>
      <li>Multiline String -> `dfds  (Shift + Enter)<br>
Dfs (Shift + Enter) <br>
Dsfsdf ` 
</li>
    </ul>
</ul>

<h4>Lesson 4: HTML, CSS Review, console.log()</h4>

<ul>
  <li><b>HTML:</b>creates the content</li>
  <li><b>CSS:</b> changes the appearance</li>
  <li><b>JavaScript:</b> makes it interactive</li>
  <li>Learned html elements (So basic!!!)</li>
  <ul>
    <li>&lt;button&gt;, &lt;p&gt;</li>
    <li>opening, closing tags</li>
  </ul>
  <li><b>Nesting</b> means element inside of element</li>
  <ul>
    <li>&lt;p&gt;Hello&lt;button&gt;World!&lt;/button&gt;&lt;/p&gt;</li>
  </ul>
  <li>If you have extra spaces it will only display 1 space</li>
  <ul>
    &lt;p&gt;Hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World&lt;/p&gt; === &lt;p&gt;Hello World&lt;/p&gt;
  </ul>
  <li>Learned how to style</li>
  <li>HTML Attributes: changes the behavior of an element</li>
  <ul>
    <li>
      &lt;button title='Good job!'&gt;
    </li>
    <li>
      title (attribute name) = 'Good job!' (attribute value)
    </li>
  </ul>
</ul>


