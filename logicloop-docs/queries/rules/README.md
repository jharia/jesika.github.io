# Write a rule

LogicLoop lets you write SQL-based rules on your data to manage your business processes.&#x20;

First, navigate to the **Rules** tab on the left sidebar. Here you'll see a listing of all existing Rules with useful metadata about the status of their last runs.

![](../../.gitbook/assets/rules-list.png)

Click **+ New Rule** on the top right corner to start a new query.

* Add a **Name** for your new rule in the top header.

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 9.37.34 AM (1).png>)

* Select a connected data source and search the schema. If you're using LogicLoop to query an API instead of a database, [follow these instructions instead](../../data-sources/supported-data-sources/json-apis.md).&#x20;

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 9.38.04 AM.png>)

* Write your SQL query, click **View Results** to check it looks good, and **Save**. You can make changes and re-run to fine-tune your results.

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 9.41.43 AM.png>)

* Publish your rule. Once you publish the rule, you will be able to [add an **Action** to it](../../actions/actions.md).&#x20;

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 9.42.29 AM.png>)

* (Optional) Add a **Rule Description** or other helpful documentation to your rule.

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 9.45.06 AM.png>)

* (Optional) You set a **Schedule** for your rule by clicking on **Never** in the bottom left corner. We support **Never**, **Minutes** (1-30), **Hours**, **Days**, **Weeks.**

![](https://gblobscdn.gitbook.com/assets%2F-MiUC7mpEpd2K-IYLNfq%2F-MiX2hZFh--yJzzgZbZw%2F-MiXFKMnhy5QPiRFGV4Y%2FScreen%20Shot%202021-09-01%20at%209.46.20%20AM.png?alt=media\&token=7f54389a-76f7-4306-bf55-1d59aa5e94a2)

![](<../../.gitbook/assets/Screen Shot 2021-09-01 at 9.46.27 AM.png>)

That's it, you've written your first rule!

![The full page for writing a query](../../.gitbook/assets/query-rule.png)
