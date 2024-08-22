# Prompt Engineering

There are several public [guides](https://www.promptingguide.ai/) on ‘Prompt Engineering’ you can get to with a Google Search, so we won’t go into all the details here.&#x20;

The basic structure of a prompt includes context, task and temperature. _Context_ is any background information you wish to give your model, a _Task_ is what you want the model to do, and the _Temperature_ controls the randomness of the model output.&#x20;

We’ll highlight a few practical observations that official docs don’t talk about:&#x20;

* **There is no silver bullet prompt**. Use tools to play around with different parameters to find what suits _your_ task best.
* If you’re sending a lot of context or instructions, **you can tell the model what part of your prompt to get creative with, and what to not**. For example: in LogicLoop’s use case of generating SQL queries from text, the data schema should be followed exactly for the SQL to compile but there can be some variation in the interpretation of a business metric, i.e. which columns are used to generate a revenue column.
* **Prompt engineering is not a one and done**. You will likely find issues as users start to use your product, which you can then fix. You don't need to block the first version of getting your product out there.&#x20;
* **There are few agreed-upon best practices for prompt storage**. Some people love Langchain, some people don't like that excessive templating makes it feel over-engineered and hard to understand what's going on. At LogicLoop, we kept the first version simple and just stored our prompts in code.&#x20;
