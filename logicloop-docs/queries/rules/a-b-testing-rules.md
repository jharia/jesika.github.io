# A/B testing rules

Sometimes, you want to test your rules on different data before pushing them to production.&#x20;

1. You want to define cohorts of users or a hold-out population
2. You want to backtest rules on a historical dataset
3. You want to preview rules in shadow mode on future data

LogicLoop supports your needs by allowing you to&#x20;

1. Assign a label to each row to define a cohort, and using query parameters to select the right groups&#x20;
2. Run the same query against different tables in the same database
3. Run the same query on different databases (this is most commonly used when your dev, QA and production databases are separate)

Here's a video explaining how to test your query with different data

{% embed url="https://www.loom.com/share/c3fee9a7b18247d0a8ec802b2d8c9d96" %}
