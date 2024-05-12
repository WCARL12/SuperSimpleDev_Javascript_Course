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
  <br>
  <li>Learned html elements (So basic!!!)</li>
  <ul>
    <li>&lt;button&gt;, &lt;p&gt;</li>
    <li>opening, closing tags</li>
  </ul>
  <br>
  <li><b>Nesting</b> means element inside of element</li>
  <ul>
    <li>&lt;p&gt;Hello&lt;button&gt;World!&lt;/button&gt;&lt;/p&gt;</li>
  </ul>
  <br>
  <li>If you have extra spaces it will only display 1 space</li>
  <ul>
    &lt;p&gt;Hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World&lt;/p&gt; === &lt;p&gt;Hello World&lt;/p&gt;
  </ul>
  <br>
  <li>Learned how to style</li>
  <br>
  <li>HTML Attributes: changes the behavior of an element</li>
  <ul>
    <li>
      &lt;button title='Good job!'&gt;
    </li>
  <br>
    <li>
      title (attribute name) = 'Good job!' (attribute value)
    </li>
  </ul>
  
  ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/88dbb235-41b1-4370-b896-521a1483d224)
  
  <br>
  <li>&lt;head&gt;: contains information about the page. Anything that is not visible is typically inside the head</li>
  <ul>
    <li>&lt;title&gt;. &lt;style&gt;...</li>
  </ul>
  <br>
  <li>You can search word wrap on the settings of visual studio code to prevent lines from extending too far and turn word wrap on</li>
  <br>
  <li>You can use &lt;script&gt; at the very end of the &lt;body&gt; to write Javascript code</li>
  
  ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/fbfb4dde-f737-4108-a4c0-e55945c56da0)

  <br>
<li>console.log(): This displays the values in the console of the website that you input inside the console.log()</li>
  <br>
<li>Summarization of what I learned:</li>
<ul>
  <li>Reviewed basics of HTML and CSS</li>
  <li>Set up VSCODE (you already know this)</li>
  <li>Load JavaScript inside an HTML file <script>, onclick=’’ </li>
  <li>Comments</li>
  <li>Console.log()</li>
</ul>
</ul>

<h4>Lesson 5 Variables:</h4>
<ul>
  <li>What is a variable?</li>
  <ul>
    <li>A variable is a container where we can save a value and use it later</li>
  </ul>
  <br>
  <li>Ways to create variables:</li>
  <ul>
    <li>let x = 1</li>
    <li>const = 2</li>
    <li>var = 3</li>
  </ul>
  <br>
  <li>Variable Rules:</li>
  <ul>
    <li>Can't use special words / reserved words</li>
    <li>Can’t start with a number</li>
    <li>Can’t use special characters except: $ _</li>
  </ul>
  
  ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/40d3dd8c-f298-40f4-a10a-6bb9cf2eccc9)

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/421ad0fc-3ece-48ce-9e51-a4877b840ceb)

<li><b>;</b> means the end of an instruction</li>
<ul>
  <li>let x = 12; console.log(x); console.log(‘hello’);</li>
</ul>
  <br>
<li>Creating and reassigning variables</li>
<ul>
  <li>Creating variables -> let y = ‘Hello’;</li>
  <li>Reassigning variables -> y = ‘World’</li>
  <li>Note you do not need to use the “let” again if you want to reassign a new value inside a variable. “let” is for assigning new variables that has not been created yet.</li>
</ul>
  <br>
<li>Learned how to make buttons interactive in the website using Javascript ‘onclick’ and ‘variables’:</li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/7e52074a-0403-4adf-b0ad-7859671c0afa)

<li>Variable Re-assignment Shortcuts</li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/c1855d4e-5103-4b95-8c98-1a591473dd8f)

  <br>
<li>Naming Conventions:</li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/62ff9c32-3ec7-4018-b86d-8cf7da36efd5)

Note: Can't use kebab-case for Javascript. The standard for Javascript is camelCase
<br>
<li>Last thing I learned was "typeof"</li>
<ul>
  <li>console.log(typeof(variable))</li>
</ul>
<br>
<li>Summary of the lesson:</li>
<ul>
  <li>Variables = a way to store values</li>
  <li>Re-assign a variable</li>
  <li>Created the Cart Quantity feature</li>
  <li>Shortcuts for re-assigning a variable</li>
  <li>Naming conventions and best practices</li>
  <li>3 ways to create a variable: let, const, var</li>
</ul>
</ul>

<h4>Lesson 6: Booleans and If-Statements</h4>
<ul>
  <li>What are Booleans?</li>
  <ul>
    <li>Booleans are another type of value</li>
    <li>There are only 2 boolean values:</li>
    <ul>
      <li>True</li>
      <li>False</li>
    </ul>
  </ul>
  <br>
  <li>What is the purpse of booleans?</li>
  <ul>
    <li>A boolean value represents whether something is true or false.</li>
    <ul>
      <li>console.log(3 < 5) -> Output = true</li>
      <li>console.log(3 > 5) -> Output = false</li>
      <li>console.log(typeof(true)) -> Output = boolean</li>
    </ul>
  </ul>
          <br>
        <li>Learned <b>Comparison Operators</b></li>
        <ul>
          <li><b>Note:</b> The “==” operator compares the values on both sides and returns true if they are equal, <b>even if their types are different.</b></li>
          <ul><li>For example: 1 == ‘1’; // true</li></ul>
          <li><b>Note:</b> The “===” operator checks if the values are equal, but it also <b>checks if their types are the same.</b></li>
          <ul>
            <li>For example: 1 === '1'; // false</li>
          </ul>
        </ul>
          <br>
        
![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/eb3a9f77-3042-4c1c-b673-a378e5b10a26)

  <br>
  <li><b>Order of Operations:</b></li>
  <br>

  ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/77a62b2c-4309-4c47-adac-feb93dd4bdb1)

  <li>console.log(3 > 5 - 5)</li>
  <ul>
    <li>This would first do the operation 5 - 5 then do the comparison 3 > 0
</li>
  </ul>
  <li>Comparison Operators have a <b>lower priority</b> than arithmetic operators</li>
  <br>
  <li><b>If Statements</b></li>
  <ul>
    <li>Lets us write multiple group of code and then decide which code to run</li>    
  <br>    
    
![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/86140af7-5f10-4b9b-911e-8afd2d4876ad)
    <li>Using if-statements if you are old enough to drive:</li>
  <br>    
      ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/f2f23925-9ca4-4f6d-b09d-a75678d969d6)    

  </ul>
  <li>Any variable created inside {...} will only exist inside the { ... }</li>
  
![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/ff827b3f-94db-4a80-91aa-8d07143c815d)

<p>This will result in error since the x variable is only available inside the { … } brackets
It is a local variable not a global variable
</p>
  
</ul>


