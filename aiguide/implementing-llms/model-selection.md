# Model Selection

### How to compare different LLMs

Now that we've validated that we're solving a business need, know what part of the user journey to improve and how, we're ready to start building.

First, you’ll want to select the best model(s) to use for your needs. Let’s keep cost and security aside for a moment, and focus on the technical aspects of model selection.&#x20;

At LogicLoop, we saw a tradeoff between **latency**, **cost** and **accuracy**.

<figure><img src="../.gitbook/assets/Model Selection (1).png" alt="" width="563"><figcaption><p>LLM Selection Framework: Accuracy, Cost, Latency</p></figcaption></figure>

Latency is important in cases where the user is actively interacting with the model in back and forth, and accuracy is less important since the user has a chance to rectify the model output with a few-shot learning approach. For the first version of LogicLoop’s Ask AI Chatbot, we used text-davinci-003, which optimized for latency, at the expense of accuracy and cost.

Conversely, accuracy is more important if your users are interacting with AI through a single button and they don’t have a way to influence model behavior after the first iteration. For LogicLoop’s AI Copilot (Generator, Fixer, Editor), we used gpt3.5-turbo, which optimized for accuracy and cost, at the expense of latency.

### How to compare different LLM Providers

If you’re in the earliest stages of experimentation as an Engineer or a Product Manager and you’re using a popular model provider, you can use something like [https://play.vercel.ai/](https://play.vercel.ai/) to compare model outputs quickly. &#x20;

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>Comparing LLM Providers</p></figcaption></figure>

If you’re ready to take your experimentation to the next level, you can use a framework like Langchain.ai to compare the same template across multiple models, from the likes of OpenAI, Cohere, AI21, HuggingFace Hub, Azure, etc. This is a _lot_ slower, so make sure you’re doing some research before picking the models you’d like to test against each other. It's also harder for non-engineers to contribute to this kind of experimentation.

{% hint style="info" %}
At LogicLoop, we prioritized getting something out quickly, so stuck to OpenAI for the first version. This allowed us to get an initial version of the product out in a week.
{% endhint %}

