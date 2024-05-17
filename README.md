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
<br>
    </ul>
</ul>
<h3>Lesson 4: HTML, CSS Review, console.log()</h3>

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
	<br>
</ul>
</ul>

<h3>Lesson 5 Variables:</h3>
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
<br>
</ul>

<h3>Lesson 6: Booleans and If-Statements</h3>
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
It is a local variable not a global variable.
</p>
<br>
  <li><b>Scope</b></li>
  <ul>Allows to avoid naming conflicts like similar to local and global variables</ul>
  <br>
  <li>Learned how to create rock paper scissors</li>\
  
  ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/7ae733cf-d769-4efa-ba50-1f0f2ff6dd97)

<li><b>Algorithm</b></li>
<ul>
  <li>An algorith is a set of steps to complete a task or solve a problem</li>
</ul>
<br>
<li><b>Math.random()</b></li>
<ul>
  <li>Displays a random floating number between 0 - 1</li>
  <li>Cannot change the value that goes up to or between like 1 - 10</li>
</ul>
<br>
<li><b>Logical Operators:</b></li>
<ul>
  <li><b>&& (AND operator)</b></li>
  <ul>
    <li><b>Both / all conditions must be True</b> in order to be True</li>
    <li>console.log(8 > 5 &&  7< 10) // True</li>
    <li>console.log(1 > 10 && 12 > 10) // False</li>
  </ul>
    <li><b>||</b> (OR operator)</li>
      <ul>
        <li><b>Only one condition of the condition or more must be true</b> in order to be true</li>
        <li>console.log(8 > 2 || 12 < 9) // True</li>
        <li>console.log(9 < 2 || ‘Carl’ === ‘Wico’) // False</li>
      </ul>
    <li><b>!</b> (NOT operator)</li>
      <ul>
        <li>Makes the value the opposite</li>
        <li>console.log(!true) // false</li>
        <li>console.log(!(12 > 2)) // False</li>
        <li>console.log(12 !== 9) // True</li>
      </ul>
          <br>
</ul>
  <li><b>Truthy Value</b></li>
          <ul>
            <li>A value that behaves just like true</li>
          </ul>
          <p>If (3){<br>
	console.log(‘Truthy’)<br>
} // Output is Truthy 
</p>

<li><b>Falsy value</b></li>
<ul>
	<li>A value that behaves just like false</li>
</ul>
<p>If (0){<br>
	console.log(‘Truthy’)<br>
} // No output 
</p>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/381a7240-780d-42ad-88ff-45d6767cc169)
<br>
<li>Truthy and Falsy used for example IRL </li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/44d323c2-1d18-4c2d-b825-11fe4eafaff8)

<li><b>Shortcuts for If-Statements</b></li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/7e91e2e1-5eb9-47b5-a9f2-cf8bbdaeb172)

<li><b>Ternary Operator Example:</b></li>
<ul>
	<li>true ? console.log('truthy') : console.log('falsy')</li>

 ![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/2dacb861-95b0-4580-b507-6f29dd2af211)

<li>let points = 110;<br>
Let type = points > 100 ? ‘gold’ : ‘silver’ ; 
</li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/23998a43-84dd-4e45-bb6a-4587f6b6b406)

<li>var result = (x > 10) ? "greater than 10" : (x < 5) ? "less than 5" : "between 5 and 10";</li>
</ul>
<br>
<li><b>Guard Operator</b></li>
<br>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/9d081245-c298-447c-a836-4e91c0eac1eb)

<ul>
	<li>Similar to: </li>
	<li>Note if the value on the left is already false, it will not have to check the right one if it is true or false since AND operator both needs to be true in order to be true</li>
<li><b>This is a Short Circuit Evaluation</b></li>
</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/126f9c62-0bc1-44f6-a77f-560070d8d36d)



<li><b>Default Operator ||</b></li>
<br>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/f30dc35f-0076-4bab-8d07-585d71c31cf1)

<ul>
	<li>Good for getting default values if there is no decision by the user.</li>
	<br>
</ul>

<h3>Lesson 7: Functions</h3>
<li>What is a function?</li>
<ul>
	<li>A function lets us reuse code</li>
</ul>
<br>
<li>Rules for funciton names:</li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/4e9e92e4-050f-4b27-bcec-49fad25c20b1)

<li>It is best practice to use camelCase for naming functions</li>
<br>
<li><b>Variable scope exists in functions as well.</b> Any variable that is created inside a function is only accessible inside of that function (local variable). Anything outside is global variable</li>
<br>
<li>Any variable between {...}, only exist between the {...}</li>
<br>
<li><b>Return Statement</b></li>
<ul>
	<li>Lets us get a value out of a function</li>
	<li>When we use a return statement, it ends the function immediately</li>


![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/c6ba7cdf-5de5-45c3-9a81-762362bf492e)

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/d897b30f-23d8-4110-a31f-27e90bc3aa9e)

<li>The second image above, the value it will return is undefined</li>
</ul>
<br>
<li><b>Parameter</b></li>
<ul>
	<li>Allows a value to put into a function</li>
</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/3bedd21c-3ccf-4758-bb88-e088569cea45)

<li><b>Rules for Parameter Names:</b></li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/56bf89b9-4bc1-427f-a1a3-9e5d3cd074f8)

<li><b>Arguments</b></li>
<ul>
	<li>Arguments are the values you specifically give the function when you can call it.</li>
	<li>calculateTax(<b>argument</b>)</li>
</ul>
<p><b>Note:</b> If you did not give a value for a function that needs a argument, the value will be undefined but the function will still run</p>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/5ccbb42b-2c4d-4a9d-bc25-8f0299562c0a)

<li><b>Parameter default value</b></li>
<ul>
	<li>You can also give parameters in the function a default value</li>
</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/13fc356c-8301-4d25-99e1-bbd32a1d0a55)

<li>You can also call functions inside a function in Javascript</li>
<br>
<li><b>Summary of the lesson</b></li>
<ul>
	<li>Functions = let us reuse code</li>
	<li>Return = gets a value out of a function</li>
	<li>Parameter = put values into a function</li>
	<br>
</ul>
<h3>Lesson 8: Objects</h3>
<li><b>What is an Object?</b></li>
<ul>
	<li>An object groups multiple values together</li>
	<li>Use multiple values together.</li>
	<li>Property Value pair</li>
	<li>An object is also another type of value</li>
	
</ul>
<br>
<li><b>Why do we use Objects?</b></li>
<ul>
	<li>Make our code more organized</li>
	<li>Allows to group variables into one object (encapsulation)</li>
</ul>
<br>
<li><b>Example of Object in Javascript:</b></li>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/14fc3b48-5451-46f8-83d2-bfc301d5c57c)

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/9fbd4857-440e-40e6-92a4-5d7b8cee56f4)

<li><b>Changing the value inside of an object</b></li>
<ul>
	<li>Use <b>Dot Notation</b></li>
	<ul>
		<li>console.log(object_name.property)</li>
	</ul>
	<br>
	<li>Use <b>Bracket Notation</b></li>
	<ul>
		<li>console.log(object_name[‘property’])</li>
		<li>Lets us use properties that don’t work with dot notation</li>
		<li>For example: <b>console.log(product.delivery-time) will not work</b> because Javascript thinks you are using the arithmetic operator “ <b>-</b> ”.</li>
		<li>console.log(product.[“delivery-time”]) <b>will work</b></li>
	</ul>
	<br>
	<li>If you access a property that does not exist it will return as undefined</li>
</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/08b25fba-f517-4a6e-a6db-cb7397c65ee4)

<li>Bracket Notation Objects Example:</li>
<ul>Note that the first image below will create a syntax error while the second and third image works fine</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/9f3c8bc6-22ea-47fb-8cc5-6e5b00a9f9b3)

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/f9cda9a9-a06c-4458-b144-c2fe68485ec8)

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/bc0eb0ab-368a-432e-b317-a4b545f66eda)

<li><b>Adding a new property inside an object</b></li>
<ul>
	<li>objectName.newPropertyName = newValue</li>
</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/b04e4483-cab1-4d65-a057-4d57426913ee)

<li><b>Nested Object</b></li>
<ul>
	<li>Allows to create objects inside of an object</li>
</ul>

![image](https://github.com/WCARL12/SuperSimpleDev_Javascript_Course/assets/139624156/907738f3-4ea1-474d-b164-a260c25bc232)

</ul>


