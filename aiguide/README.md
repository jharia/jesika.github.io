# Building an LLM-powered Application

LogicLoop is a business alerting platform that lets users write SQL across their data to trigger alerts and automations. We recently added an [AI SQL Copilot](https://www.logicloop.com/ai-sql-query-generator), and jotted down some hard-learned observations that others implementing LLM-enabled features might find useful, primarily around:

* What to know before you start building
* What we learned implementing LLMs
* Important next steps that don't get talked about enough

Since this guide is influenced by our specific experiences, here’s some context about how we integrated LLMs into our SaaS applications:&#x20;

LogicLoop AI SQL Copilot helps you write queries like “find me the top 10 customers that have opened my email in the last 30 days”, explain and fix SQL queries. We also have a chatbot-like interface to help you answer more open-ended data questions.&#x20;

[LogicLoop AI SQL Copilot Promo - Watch Video](https://www.loom.com/share/22ff3b1f06da461b8a69608514154cda)

<figure><img src="https://cdn.loom.com/sessions/thumbnails/22ff3b1f06da461b8a69608514154cda-with-play.gif" alt=""><figcaption><p>LogicLoop AI SQL Copilot Demo</p></figcaption></figure>
