# Model Failures

A few tips and best practices on application development will go a long way in making your LLM-powered application production-ready:

*   **Test self-consistency**: Something that makes LLMs hard to rely on for production use cases is that their outputs cannot be tested deterministically.&#x20;

    Your use case might need you to set a temperature > 0, i.e. allow some randomness in the model output, but you can (and should) still test results by running the same inputs on the same model a few times, and ensuring the most common output is what you’d expect. This is easier if you can exactly match your model output text, else you can use another LLM to give you a fuzzy match yes/no binary answer.&#x20;
* **Handle errors well**: Have an alert in place in case the API you’re using under the hood has issues with availability, your request limit is exceeded, etc. Don’t ignore this as LLM Provider APIs are constantly under flux, and how you handle their errors will make or break your user’s experience.
*   **Sanitize model input and output**: Although most common LLM Providers have with basic model protection, you might still be vulnerable to prompt injection attacks, or leaking data for your specific use case.

    There is an explosion of LLM Firewalls and products in the Cybersecurity x AI space, though most providers we explored at LogicLoop only seemed to provide a very thin layer of protection, so we decided to punt on adding these natively. Instead, we adopted the stance of working with individual customers that need enhanced protection by allowing our application to communicate with Privacy APIs instead of the models directly. &#x20;
* **Test more than your demo input size**: Large contexts are still tricky for models, and unfortunately there seems to be no silver bullet here either.&#x20;
  * We are exploring large context models like Anthropic's Claude 100K and OpenAI's GPT4-32K, which run the risk of hallucinations.
  * We are exploring [Prompt Chaining](https://community.openai.com/t/promptchainer-chaining-large-language-model-prompts-through-visual-programming/16112), but model errors would compound.&#x20;
  * We are exploring [Embeddings](https://platform.openai.com/docs/guides/embeddings) to store bigger contexts for search and recommendations.
* **Offer customers model flexibility**: Our very first version of the product used specific models that we knew would perform well. As the model provider space grows, we are enabling customers to pick the models they feel comfortable with. For example, Anthropic has HIPAA certification, so healthcare customers might want to use their models instead of OpenAI's. We are exploring hosting models ourselves to give customers even more control over their data, once we've tested out general demand.

Finally, with each new release, continue to do UAT (User Acceptance Testing) manually until you are certain of model capabilities.&#x20;
